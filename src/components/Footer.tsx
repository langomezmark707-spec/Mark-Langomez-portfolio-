import React from 'react';
import { STUDENT_INFO } from '../data/portfolioData';
import { ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="text-sm font-bold text-white font-display">
              {STUDENT_INFO.name}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              2nd Year BS Information Technology · {STUDENT_INFO.school}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a
              href={STUDENT_INFO.schoolWebsite}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>philcountryville.com</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
            <a
              href={`tel:${STUDENT_INFO.contactNumber}`}
              className="hover:text-white transition-colors font-mono"
            >
              {STUDENT_INFO.contactNumber}
            </a>
            <a
              href={`mailto:${STUDENT_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              {STUDENT_INFO.email}
            </a>
            <a
              href={STUDENT_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook: {STUDENT_INFO.facebookName}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} Mark E. Langomez. All rights reserved.</p>
          <p>Philippine Countryville College · College of Computer Studies</p>
        </div>
      </div>
    </footer>
  );
};
