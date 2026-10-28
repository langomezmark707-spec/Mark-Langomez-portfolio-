import React from 'react';
import { STUDENT_INFO, COURSES, SKILL_CATEGORIES, PROJECTS } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Building, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative my-auto overflow-hidden">
        {/* Modal Top Actions */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="font-semibold text-white">{STUDENT_INFO.name}</span>
            <span aria-hidden="true">·</span>
            <span>Official Academic Curriculum Vitae (Phil Countryville College)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="py-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
                  {STUDENT_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-blue-700 mt-0.5">
                  2nd Year Bachelor of Science in Information Technology (BSIT)
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  {STUDENT_INFO.school} (philcountryville.com)
                </p>
              </div>

              {/* Contact Block */}
              <div className="text-xs text-slate-700 space-y-1 font-mono sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <span>{STUDENT_INFO.contactNumber}</span>
                  <Phone className="w-3 h-3 text-slate-500" />
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <span>{STUDENT_INFO.email}</span>
                  <Mail className="w-3 h-3 text-slate-500" />
                </div>
                <div className="flex sm:justify-end items-center gap-1.5 font-sans">
                  <span>FB: {STUDENT_INFO.facebookName}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5 font-sans">
                  <span>Philippines</span>
                  <MapPin className="w-3 h-3 text-slate-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Professional Objective */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Career Objective & Profile
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              Dedicated and technically oriented 2nd-year Information Technology student at Phil Countryville College with strong foundational knowledge in web systems development, relational database modeling, and computer networking. Eager to leverage classroom knowledge and practical problem-solving to build reliable software solutions and support enterprise IT operations.
            </p>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Education
            </h2>
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {STUDENT_INFO.school}
                </h3>
                <p className="text-xs text-slate-700">
                  Bachelor of Science in Information Technology (BSIT)
                </p>
              </div>
              <div className="text-xs text-slate-600 text-right font-mono">
                <span>2023 – Present (2nd Year)</span>
                <p className="text-[11px] text-blue-700 font-semibold font-sans">philcountryville.com</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Relevant Coursework:</span> Web Systems & Technologies (IT211), Database Management Systems (IT212), Data Structures and Algorithms (CC105), Computer Networks (NET101), Object-Oriented Programming (CC104).
            </div>
          </section>

          {/* Technical Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Academic Projects & Systems
            </h2>
            <div className="space-y-4">
              {PROJECTS.slice(0, 3).map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="font-bold text-slate-900">{proj.title}</span>
                    <span className="text-slate-500 font-mono text-[11px]">{proj.date}</span>
                  </div>
                  <p className="text-slate-700 text-xs mb-1">
                    {proj.description}
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono">
                    <strong className="text-slate-700">Technologies:</strong> {proj.techStack.join(', ')} · <strong className="text-slate-700">Course:</strong> {proj.academicContext}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs">
              <div>
                <span className="font-semibold text-slate-900">Frontend:</span> HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React basics.
              </div>
              <div>
                <span className="font-semibold text-slate-900">Backend & DB:</span> PHP, MySQL, phpMyAdmin, SQL Queries, REST APIs.
              </div>
              <div>
                <span className="font-semibold text-slate-900">Networking:</span> Cisco Packet Tracer, IPv4 Subnetting, LAN RJ45 Cabling.
              </div>
              <div>
                <span className="font-semibold text-slate-900">Tools:</span> VS Code, Git, GitHub, XAMPP, Postman, Linux basics.
              </div>
            </div>
          </section>

          {/* Languages & References */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Languages & Affiliations
            </h2>
            <div className="flex justify-between text-xs text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Languages:</span> English, Bisaya / Cebuano, Tagalog.
              </div>
              <div>
                <span className="font-semibold text-slate-900">Affiliation:</span> Phil Countryville College Computer Society (PCC-CS).
              </div>
            </div>
          </section>
        </div>

        {/* Modal bottom bar */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-400">
            Contact: {STUDENT_INFO.contactNumber} · {STUDENT_INFO.email}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
