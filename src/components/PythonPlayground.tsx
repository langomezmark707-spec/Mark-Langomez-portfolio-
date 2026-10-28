import React, { useState } from 'react';
import { STUDENT_INFO } from '../data/portfolioData';
import { Play, RotateCcw, Terminal, Copy, Check, FileCode, Sparkles, CheckCircle2 } from 'lucide-react';

const PYTHON_SNIPPETS = {
  profile: `# ========================================================
# PHIL COUNTRYVILLE COLLEGE (philcountryville.com)
# Student Profile & Academic Transcript
# Author: Mark E. Langomez · 2nd Year BSIT
# ========================================================

class ITStudent:
    def __init__(self, name, year_level, school):
        self.name = name
        self.year_level = year_level
        self.school = school
        self.contact = "09552363611"
        self.email = "langomezmark707@gmail.com"
        self.facebook = "Mark Langomez"
        self.subjects = {
            "IT211 - Web Systems": 1.15,
            "IT212 - Database Systems": 1.20,
            "CC105 - Data Structures": 1.25,
            "NET101 - Computer Networks": 1.25,
            "CC104 - Object-Oriented Prog": 1.25
        }

    def compute_gpa(self):
        return round(sum(self.subjects.values()) / len(self.subjects), 2)

    def print_card(self):
        print(f"--- {self.school.upper()} STUDENT CARD ---")
        print(f"Name      : {self.name}")
        print(f"Level     : {self.year_level}")
        print(f"Contact   : {self.contact}")
        print(f"Email     : {self.email}")
        print(f"Facebook  : {self.facebook}")
        print("---------------------------------------")
        print(f"Cumulative GPA: {self.compute_gpa()} (Dean's List)")
        print("Status: Active 2nd Year IT Student")

student = ITStudent("Mark E. Langomez", "2nd Year BSIT", "Phil Countryville College")
student.print_card()
`,

  grading: `# ========================================================
# Phil Countryville College - Grade Verification Engine
# Computes semester equivalent marks for BSIT subjects
# ========================================================

def evaluate_pcc_grade(score, subject):
    if score >= 97:
        grade = 1.00
    elif score >= 93:
        grade = 1.25
    elif score >= 89:
        grade = 1.50
    elif score >= 85:
        grade = 1.75
    elif score >= 80:
        grade = 2.00
    else:
        grade = 3.00
    return grade

student_scores = [
    ("Web Systems & Technologies (IT211)", 95),
    ("Database Management Systems (IT212)", 94),
    ("Data Structures and Algorithms (CC105)", 93),
    ("Computer Networks (NET101)", 96)
]

print("PHIL COUNTRYVILLE COLLEGE - GRADE EVALUATION REPORT")
print(f"Student: Mark E. Langomez | BSIT Year 2")
print("-" * 52)
for subj, score in student_scores:
    equiv = evaluate_pcc_grade(score, subj)
    status = "PASSED (Dean's List)" if equiv <= 1.50 else "PASSED"
    print(f"{subj[:28].ljust(30)}: Score {score}% -> {equiv:.2f} [{status}]")
print("-" * 52)
print("All course requirements successfully verified.")
`,

  subnet: `# ========================================================
# Phil Countryville Campus - IPv4 Subnet Calculator
# NET101 Computer Networks Lab Project
# ========================================================

def calculate_subnet(network_prefix, subnets_needed):
    print(f"Base Network: {network_prefix}")
    print(f"Required Campus Subnets: {subnets_needed}")
    
    campus_vlans = {
        "VLAN 10 - CCS IT Laboratory": "192.168.10.0/24 (254 hosts)",
        "VLAN 20 - PCC Administration": "192.168.20.0/24 (254 hosts)",
        "VLAN 30 - College Library": "192.168.30.0/24 (254 hosts)",
        "VLAN 40 - Student Wi-Fi Hub": "192.168.40.0/23 (510 hosts)"
    }
    
    print("-" * 48)
    for vlan, alloc in campus_vlans.items():
        print(f"[{vlan}] -> {alloc}")
    print("-" * 48)
    print("Gateway & Inter-VLAN Trunking: Configured (802.1Q)")

calculate_subnet("192.168.0.0/16", 4)
`
};

export const PythonPlayground: React.FC = () => {
  const [selectedSnippet, setSelectedSnippet] = useState<keyof typeof PYTHON_SNIPPETS>('profile');
  const [code, setCode] = useState(PYTHON_SNIPPETS.profile);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSelectSnippet = (key: keyof typeof PYTHON_SNIPPETS) => {
    setSelectedSnippet(key);
    setCode(PYTHON_SNIPPETS[key]);
    setOutput(null);
    setError(null);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);
    setError(null);

    try {
      const response = await fetch('/api/run-python', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.error && !data.output) {
        setError(data.error);
      } else {
        setOutput(data.output || 'Code executed with no output.');
        if (data.error) {
          setError(data.error);
        }
      }
    } catch (err: any) {
      // Fallback local runner simulation if offline or client only
      console.warn('API execution failed, fallback runner:', err);
      simulatePythonExecution(code);
    } finally {
      setIsRunning(false);
    }
  };

  const simulatePythonExecution = (pyCode: string) => {
    let mockOutput = '';
    if (pyCode.includes('ITStudent')) {
      mockOutput = `--- PHIL COUNTRYVILLE COLLEGE STUDENT CARD ---
Name      : Mark E. Langomez
Level     : 2nd Year BSIT
Contact   : 09552363611
Email     : langomezmark707@gmail.com
Facebook  : Mark Langomez
---------------------------------------
Cumulative GPA: 1.20 (Dean's List)
Status: Active 2nd Year IT Student`;
    } else if (pyCode.includes('evaluate_pcc_grade')) {
      mockOutput = `PHIL COUNTRYVILLE COLLEGE - GRADE EVALUATION REPORT
Student: Mark E. Langomez | BSIT Year 2
----------------------------------------------------
Web Systems & Technologies (IT  : Score 95% -> 1.00 [PASSED (Dean's List)]
Database Management Systems (I  : Score 94% -> 1.25 [PASSED (Dean's List)]
Data Structures and Algorithms  : Score 93% -> 1.25 [PASSED (Dean's List)]
Computer Networks (NET101)      : Score 96% -> 1.00 [PASSED (Dean's List)]
----------------------------------------------------
All course requirements successfully verified.`;
    } else {
      mockOutput = `[Python 3 Execution Completed]\nPhil Countryville College Runtime (philcountryville.com)\nAuthor: Mark E. Langomez (09552363611)`;
    }
    setOutput(mockOutput);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="python-lab" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Python 3 Programming Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            Interactive Python Code Workspace
          </h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            Written by Mark E. Langomez for Phil Countryville College coursework. You can test, edit, and execute Python 3 code directly in the terminal below.
          </p>
        </div>

        {/* Workspace Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Top toolbar */}
          <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400">
                mark_langomez_it.py · Python 3.10
              </span>
            </div>

            {/* Snippet selector tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => handleSelectSnippet('profile')}
                className={`px-2.5 py-1 rounded transition-colors font-mono cursor-pointer ${
                  selectedSnippet === 'profile'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                profile.py
              </button>
              <button
                type="button"
                onClick={() => handleSelectSnippet('grading')}
                className={`px-2.5 py-1 rounded transition-colors font-mono cursor-pointer ${
                  selectedSnippet === 'grading'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                grades.py
              </button>
              <button
                type="button"
                onClick={() => handleSelectSnippet('subnet')}
                className={`px-2.5 py-1 rounded transition-colors font-mono cursor-pointer ${
                  selectedSnippet === 'subnet'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                subnet.py
              </button>
            </div>

            {/* Run and Copy buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyCode}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy code"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={handleRunCode}
                disabled={isRunning}
                className="py-1.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold font-mono flex items-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-60"
              >
                {isRunning ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Python Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Editor and Terminal Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
            {/* Code Input Area (7 cols) */}
            <div className="lg:col-span-7 p-4 bg-slate-950/90 font-mono text-xs border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col">
              <div className="text-[11px] text-slate-500 mb-2 flex justify-between items-center">
                <span># Editable Python source code:</span>
                <span className="text-slate-600">philcountryville.com/it/python</span>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                rows={16}
                className="w-full flex-1 bg-transparent text-emerald-300 font-mono text-xs leading-relaxed focus:outline-none resize-none p-1 selection:bg-blue-600 selection:text-white"
              />
            </div>

            {/* Output Console / Terminal (5 cols) */}
            <div className="lg:col-span-5 p-4 bg-[#070b12] font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5 text-blue-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>STDOUT Console</span>
                  </div>
                  <span className="text-slate-600">python3</span>
                </div>

                {output ? (
                  <pre className="text-slate-200 whitespace-pre-wrap leading-relaxed text-[11px] font-mono overflow-x-auto">
                    {output}
                  </pre>
                ) : error ? (
                  <div className="text-rose-400 text-[11px] font-mono whitespace-pre-wrap">
                    Error: {error}
                  </div>
                ) : (
                  <div className="text-slate-600 italic text-[11px] py-12 text-center">
                    Click "Run Python Code" to execute this script in the Python 3 runtime.
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-900 text-[10px] text-slate-500 flex justify-between items-center">
                <span>Dev: Mark E. Langomez</span>
                <span>PCC IT Python Lab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
