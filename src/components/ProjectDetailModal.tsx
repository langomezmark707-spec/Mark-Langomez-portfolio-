import React, { useState } from 'react';
import { Project, STUDENT_INFO } from '../data/portfolioData';
import { X, CheckCircle2, Layers, Cpu, Play, School, Calendar, Search, FileText } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator'>('overview');
  
  // Interactive simulator state for the PCC Portal
  const [selectedSimSubject, setSelectedSimSubject] = useState('IT211');
  const [simSearchQuery, setSimSearchQuery] = useState('');
  const [simResidentGenerated, setSimResidentGenerated] = useState(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative my-auto overflow-hidden">
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-blue-400 font-mono">
            <School className="w-3.5 h-3.5" />
            <span>{project.academicContext}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Project Title & Category */}
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.date}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white font-display">
              {project.title}
            </h2>
          </div>

          {/* Banner image */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Tabs: Overview vs Interactive Prototype Simulator */}
          <div className="flex gap-2 p-1 bg-slate-950 border border-slate-800 rounded-xl max-w-sm">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Project Architecture
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('simulator')}
              className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'simulator'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Play className="w-3 h-3 text-amber-400" />
              <span>Interactive Prototype</span>
            </button>
          </div>

          {activeTab === 'overview' ? (
            <div className="space-y-6">
              {/* Detailed Description */}
              <div>
                <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  System Overview
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  Key Technical Features
                </h3>
                <div className="space-y-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  Technologies Employed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Simulator Pane */
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Live System Sandbox: {project.title}
                </span>
                <span className="font-mono text-slate-400 text-[11px]">Interactive Demo Mode</span>
              </div>

              {project.id === 'pcc-portal' ? (
                /* PCC Student Portal Simulator */
                <div className="space-y-4 text-xs">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-sm">Phil Countryville Student ID: 2023-IT-0842</p>
                      <p className="text-slate-400">Student: {STUDENT_INFO.name} · BSIT Year 2</p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 font-bold font-mono">GPA: 1.28</p>
                      <p className="text-[11px] text-slate-400">Dean's List Standing</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Select Subject Grade & Syllabus:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['IT211', 'CC105', 'IT212', 'NET101'].map((code) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => setSelectedSimSubject(code)}
                          className={`py-2 px-3 rounded-lg border text-center transition-colors font-mono ${
                            selectedSimSubject === code
                              ? 'bg-blue-600 text-white border-blue-500'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px] space-y-1">
                    <p className="text-blue-300 font-bold">Selected: {selectedSimSubject}</p>
                    <p>Status: Regular Enrolled (Phil Countryville College)</p>
                    <p>Schedule: Mon/Wed 08:30 AM - 11:30 AM (Computer Lab 3)</p>
                    <p>Instructor: College of Computer Studies Faculty</p>
                    <p className="text-emerald-400">Midterm Grade: 94.5% (1.25 equivalent)</p>
                  </div>
                </div>
              ) : project.id === 'barangay-system' ? (
                /* Barangay Clearance Simulator */
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1.5 font-medium">Search Resident Registry:</label>
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-500" />
                      <input
                        type="text"
                        value={simSearchQuery}
                        onChange={(e) => setSimSearchQuery(e.target.value)}
                        placeholder="Search resident name (e.g. Langomez, Cruz, Santos)..."
                        className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{simSearchQuery ? simSearchQuery : 'Mark E. Langomez'}</p>
                      <p className="text-slate-400 text-[11px]">Resident ID: BRGY-2024-0391 · Phil Countryville Community</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSimResidentGenerated(true)}
                      className="py-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
                    >
                      Issue Clearance
                    </button>
                  </div>

                  {simResidentGenerated && (
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 space-y-2">
                      <div className="flex items-center gap-2 font-semibold">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <span>Barangay Clearance Certificate Generated</span>
                      </div>
                      <p className="text-[11px] text-emerald-300">
                        Official document clearance issued for {simSearchQuery || 'Mark E. Langomez'}. Security hash validated against local MySQL database table.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Generic System Status */
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs space-y-2 font-mono">
                  <p className="text-blue-300 font-bold">{project.title}</p>
                  <p>Deployment Target: Phil Countryville College Intranet</p>
                  <p>Status: Ready for Capstone Evaluation</p>
                  <div className="mt-3 p-3 bg-slate-950 rounded border border-slate-800 text-[11px] text-emerald-400">
                    System healthy · 0 compile warnings · Verified by Mark E. Langomez
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Candidate: {STUDENT_INFO.name}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
