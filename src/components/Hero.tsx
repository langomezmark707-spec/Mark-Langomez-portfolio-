import React from 'react';
import { STUDENT_INFO } from '../data/portfolioData';
import { Phone, Mail, ExternalLink, ArrowRight, MapPin, Building, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Split Hero: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Kicker metadata with clean typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-400 mb-4 tracking-wide uppercase">
              <span>Phil Countryville College</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>2nd Year BSIT</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>College of Computer Studies</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15] text-balance">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">Mark E. Langomez</span>
            </h1>

            {/* Lead copy */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl">
              2nd-year Information Technology student at <span className="text-white font-semibold underline decoration-blue-500/50 underline-offset-4">Phil Countryville College</span>. Passionate about web application development, structured databases, and computer networking.
            </p>

            {/* Bisaya greeting card */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2.5 max-w-xl">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong className="text-amber-300 font-semibold">{STUDENT_INFO.bisayaGreeting}</strong> Proud taga-Phil Countryville naga-tuon sa IT!
              </span>
            </div>

            {/* Direct Contact Metadata Row (Clean unboxed text) */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 font-mono">
              <a
                href={`tel:${STUDENT_INFO.contactNumber}`}
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{STUDENT_INFO.contactNumber}</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={`mailto:${STUDENT_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{STUDENT_INFO.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={STUDENT_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <span>FB: {STUDENT_INFO.facebookName}</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3 text-slate-400 hover:text-white font-medium text-sm transition-colors"
              >
                Contact Mark
              </a>
            </div>
          </div>

          {/* Right Column: Visual Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-2xl relative">
              {/* Photo Frame */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950 group">
                <img
                  src="/028ba6c3-163a-49fb-99db-966a017af5f7.jpg"
                  alt="Mark E. Langomez - IT Student"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay card tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-lg p-2.5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">{STUDENT_INFO.name}</p>
                    <p className="text-[11px] text-blue-300">BSIT 2nd Year Student</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400">Phil Countryville</p>
                    <p className="text-[10px] text-emerald-400 font-medium">Enrolled & Active</p>
                  </div>
                </div>
              </div>

              {/* Verified School Information */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Building className="w-3.5 h-3.5 text-blue-400" />
                  <a
                    href={STUDENT_INFO.schoolWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    philcountryville.com
                  </a>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>Philippines</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI metrics strip below hero split */}
        <div className="mt-16 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
              2nd Year
            </div>
            <div className="text-xs text-slate-400 mt-1">Academic Year Level (BSIT)</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-display">
              PCC
            </div>
            <div className="text-xs text-slate-400 mt-1">Phil Countryville College</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
              6+
            </div>
            <div className="text-xs text-slate-400 mt-1">Core IT Modules Taken</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">Dedication to Tech Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};
