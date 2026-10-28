import React, { useState } from 'react';
import { STUDENT_INFO } from '../data/portfolioData';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight, Sparkles, GraduationCap, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

interface LoginPortalProps {
  onLoginSuccess: () => void;
}

export const LoginPortal: React.FC<LoginPortalProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showHintModal, setShowHintModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      const cleanUser = username.trim();
      const cleanPass = password.trim();

      // Check credentials strictly per prompt: username "Mark", password "Cute123"
      if (cleanUser.toLowerCase() === STUDENT_INFO.credentials.username.toLowerCase() && cleanPass === STUDENT_INFO.credentials.password) {
        if (rememberMe) {
          localStorage.setItem('pcc_portfolio_authenticated', 'true');
          localStorage.setItem('pcc_portfolio_user', cleanUser);
        }
        setIsLoading(false);
        onLoginSuccess();
      } else {
        setIsLoading(false);
        setError('Sayop ang credentials (Incorrect username or password). Palihug suwayi pag-usab.');
      }
    }, 400);
  };

  const handleQuickFill = () => {
    setUsername(STUDENT_INFO.credentials.username);
    setPassword(STUDENT_INFO.credentials.password);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              Phil Countryville College
              <span className="text-xs px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-700/40 font-mono">
                BSIT 2nd Year
              </span>
            </div>
            <p className="text-xs text-slate-400">philcountryville.com · Student Digital Portfolio Portal</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowHintModal(true)}
          className="text-xs text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Login Credentials</span>
        </button>
      </header>

      {/* Main card section */}
      <main className="relative z-10 w-full max-w-md mx-auto px-6 py-8 my-auto">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl shadow-black/60 relative">
          {/* Student Profile Peek */}
          <div className="flex flex-col items-center text-center mb-7">
            <div className="relative mb-3">
              <img
                src="/028ba6c3-163a-49fb-99db-966a017af5f7.jpg"
                alt="Mark E. Langomez"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-500/50 shadow-lg shadow-blue-500/20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-1.5 -right-1.5 bg-blue-600 text-white p-1 rounded-full border-2 border-slate-900 shadow">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white font-display">
              {STUDENT_INFO.name}
            </h1>
            <p className="text-xs text-blue-400 font-medium mt-1">
              2nd Year BS Information Technology
            </p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              Palihug i-enter ang credentials aron ma-access ang full digital portfolio ug academic projects.
            </p>
          </div>

          {/* Error notice */}
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-200 text-xs flex items-start gap-2.5 animate-shake">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span>{error}</span>
                <button
                  type="button"
                  onClick={handleQuickFill}
                  className="block mt-1 font-semibold text-rose-300 underline hover:text-white"
                >
                  I-auto fill ang credentials ni Mark
                </button>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. Mark"
                  required
                  autoFocus
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950/70 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowHintModal(true)}
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Need password hint?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="e.g. Cute123"
                  required
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-950/70 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-400 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-blue-500"
                />
                <span>Hinumdumi ko (Keep logged in)</span>
              </label>

              <button
                type="button"
                onClick={handleQuickFill}
                className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                1-Click Auto Fill
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Naga-verify sa portal...</span>
                </>
              ) : (
                <>
                  <span>Ablihi ang Portfolio (Open Portfolio)</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick credentials chip banner */}
          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
              <span className="text-slate-500">Provided Access:</span>
              <span className="font-mono text-blue-300 font-semibold">User: Mark</span>
              <span className="text-slate-700">|</span>
              <span className="font-mono text-emerald-300 font-semibold">Pass: Cute123</span>
            </div>
          </div>
        </div>

        {/* Quick Contact Info if visitor needs direct access */}
        <div className="mt-6 text-center text-xs text-slate-500 space-y-1">
          <p>Direktang contact ni Mark E. Langomez:</p>
          <div className="flex items-center justify-center gap-4 text-slate-400 font-mono">
            <a href={`tel:${STUDENT_INFO.contactNumber}`} className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-slate-500" />
              <span>{STUDENT_INFO.contactNumber}</span>
            </a>
            <span className="text-slate-700">·</span>
            <a href={`mailto:${STUDENT_INFO.email}`} className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3 text-slate-500" />
              <span>{STUDENT_INFO.email}</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-4 text-center text-xs text-slate-600">
        <p>Phil Countryville College (philcountryville.com) · College of Computer Studies · BSIT Program</p>
      </footer>

      {/* Hint Modal */}
      {showHintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-display">Student Portal Credentials</h3>
                <p className="text-xs text-slate-400">Gipangayo sa user request aron maablihan ang portfolio</p>
              </div>
            </div>

            <div className="space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Username:</span>
                <span className="text-blue-400 font-bold px-2 py-1 bg-blue-950/50 rounded border border-blue-800/40">Mark</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Password:</span>
                <span className="text-emerald-400 font-bold px-2 py-1 bg-emerald-950/50 rounded border border-emerald-800/40">Cute123</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-[11px] font-sans">
                <span className="text-slate-400">Student Name:</span>
                <span className="text-white font-medium">{STUDENT_INFO.name}</span>
              </div>
              <div className="flex justify-between items-center text-[11px] font-sans">
                <span className="text-slate-400">School:</span>
                <span className="text-slate-300">{STUDENT_INFO.school} (philcountryville.com)</span>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  handleQuickFill();
                  setShowHintModal(false);
                }}
                className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Gamita Kini (Auto-Fill)
              </button>
              <button
                type="button"
                onClick={() => setShowHintModal(false)}
                className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
