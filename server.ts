import express from 'express';
import { createServer as createViteServer } from 'vite';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API endpoint to execute Python code
  app.post('/api/run-python', (req, res) => {
    const { code } = req.body;
    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'Python code is required' });
    }

    // Safety checks: restrict dangerous system actions for sandbox
    const forbiddenPatterns = ['rm -rf', 'shutil.rmtree', 'os.remove', 'subprocess.Popen'];
    for (const pattern of forbiddenPatterns) {
      if (code.includes(pattern)) {
        return res.status(403).json({
          error: `Restricted operation detected: ${pattern}. System actions are disabled in this playground.`
        });
      }
    }

    const pyProcess = spawn('python3', ['-c', code]);

    let stdout = '';
    let stderr = '';

    pyProcess.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    pyProcess.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    const timeout = setTimeout(() => {
      pyProcess.kill('SIGKILL');
      if (!res.headersSent) {
        res.json({
          output: stdout,
          error: 'Process timed out (5s limit). Check for infinite loops.',
          exitCode: 1
        });
      }
    }, 5000);

    pyProcess.on('close', (exitCode) => {
      clearTimeout(timeout);
      if (!res.headersSent) {
        res.json({
          output: stdout,
          error: stderr || null,
          exitCode: exitCode ?? 0
        });
      }
    });

    pyProcess.on('error', (err) => {
      clearTimeout(timeout);
      if (!res.headersSent) {
        res.status(500).json({ error: `Failed to execute python3: ${err.message}` });
      }
    });
  });

  // Python environment info endpoint
  app.get('/api/python-info', (req, res) => {
    const py = spawn('python3', ['--version']);
    let version = '';
    py.stdout.on('data', (d) => { version += d.toString(); });
    py.stderr.on('data', (d) => { version += d.toString(); });
    py.on('close', () => {
      res.json({
        version: version.trim() || 'Python 3.10.12',
        environment: 'Phil Countryville College Python 3 Runtime',
        status: 'online'
      });
    });
  });

  // Direct static handler for exact uploaded image
  app.get(['/028ba6c3-163a-49fb-99db-966a017af5f7.jpg', '/Mark.jpg', '/mark.jpg'], (req, res) => {
    const filename = req.path.replace(/^\//, '');
    const rootPath = path.resolve(__dirname, filename);
    if (fs.existsSync(rootPath)) {
      return res.sendFile(rootPath);
    }
    const publicPath = path.resolve(__dirname, 'public', filename);
    if (fs.existsSync(publicPath)) {
      return res.sendFile(publicPath);
    }
    // Fallback to the exact user uploaded image
    const exactUserImage = path.resolve(__dirname, '028ba6c3-163a-49fb-99db-966a017af5f7.jpg');
    if (fs.existsSync(exactUserImage)) {
      return res.sendFile(exactUserImage);
    }
    res.status(404).send('Not found');
  });

  // Mount Vite in dev or serve static dist in prod
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
