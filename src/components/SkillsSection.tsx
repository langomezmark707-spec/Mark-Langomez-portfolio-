import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, Network, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const icons = [
    <Code2 className="w-4 h-4" key="code" />,
    <Server className="w-4 h-4" key="server" />,
    <Network className="w-4 h-4" key="net" />,
    <Wrench className="w-4 h-4" key="tool" />
  ];

  const currentCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Technical Competencies
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            Skills & Applied Technologies
          </h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            Proficiencies acquired through hands-on academic laboratory projects, personal study, and practical IT troubleshooting at Phil Countryville College.
          </p>
        </div>

        {/* Interactive Segmented Control / Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl mb-8 max-w-2xl">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategoryIndex === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {icons[idx]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="mb-6 pb-4 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                {currentCategory.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentCategory.description}
              </p>
            </div>
            <div className="text-xs font-mono text-blue-400 shrink-0">
              {currentCategory.skills.length} core competencies
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80"
              >
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-xs text-blue-400 font-mono font-medium">
                    {skill.level}
                  </span>
                </div>

                <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>

                <div className="mt-2 flex justify-between items-center text-[11px] text-slate-500 font-mono">
                  <span>Proficiency index</span>
                  <span className="tabular-nums">{skill.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
