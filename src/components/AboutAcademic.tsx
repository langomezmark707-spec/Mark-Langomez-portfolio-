import React from 'react';
import { STUDENT_INFO, COURSES } from '../data/portfolioData';
import { BookOpen, GraduationCap, Award, CheckCircle2, ExternalLink } from 'lucide-react';

export const AboutAcademic: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Academic Background
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            Education at Phil Countryville College
          </h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            As a second-year Information Technology student, I am building strong foundational competencies in software engineering, database systems, and enterprise networking.
          </p>
        </div>

        {/* Institution Feature Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
              <img
                src="/src/assets/images/hero_tech_campus_1791726483084.jpg"
                alt="Phil Countryville College Computer Laboratory"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/80" />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>College of Computer Studies</span>
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  Philippine Countryville College (PCC)
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                  <a
                    href={STUDENT_INFO.schoolWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-300 transition-colors underline decoration-blue-500/40"
                  >
                    philcountryville.com
                  </a>
                  <span className="text-slate-600">·</span>
                  <span>Bachelor of Science in Information Technology</span>
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  Phil Countryville College provides students with hands-on technical environments, emphasizing community-driven IT solutions and practical systems architecture. Currently progressing through the 2nd Year BSIT curriculum.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Focus on modern web frameworks and backend databases</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Hands-on Cisco networking and lab workstation support</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Algorithmic problem-solving in OOP environments</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Active student collaboration and capstone development</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Student: {STUDENT_INFO.name}</span>
                <span className="text-blue-400 font-medium">Class of 2027 Candidate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coursework & Modules Grid */}
        <div id="academics">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                Curriculum Overview
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Key Coursework & Subjects
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono hidden sm:block">
              Phil Countryville College BSIT Roadmap
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSES.map((course) => (
              <div
                key={course.code}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/50">
                      {course.code}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      {course.semester}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white mb-2 leading-snug">
                    {course.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                    {course.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Status</span>
                  <span className={`text-xs font-medium ${course.status === 'Completed' ? 'text-emerald-400' : 'text-blue-400'}`}>
                    {course.status} {course.gradeEquivalent && `(Grade: ${course.gradeEquivalent})`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
