import React, { useState, useEffect } from 'react';
import { INITIAL_GUESTBOOK, GuestbookEntry, STUDENT_INFO } from '../data/portfolioData';
import { MessageSquarePlus, Star, Send, Trash2, UserCheck } from 'lucide-react';

export const GuestbookSection: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(() => {
    const saved = localStorage.getItem('pcc_mark_guestbook');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_GUESTBOOK;
      }
    }
    return INITIAL_GUESTBOOK;
  });

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('pcc_mark_guestbook', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: `gb-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Visitor / Guest',
      message: message.trim(),
      timestamp: 'Just now',
      rating: 5
    };

    setEntries([newEntry, ...entries]);
    setName('');
    setRole('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="guestbook" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Campus Community & Feedback
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            Peer Endorsements & Guestbook
          </h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            Notes and recommendations from Phil Countryville College classmates, professors, and visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Guestbook Entries Stream (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {entries.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-xs">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">{item.name}</p>
                      <p className="text-xs text-blue-300">{item.role}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono shrink-0">
                    {item.timestamp}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pl-12">
                  "{item.message}"
                </p>
              </div>
            ))}
          </div>

          {/* Form to leave a note (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2 text-white font-bold text-base font-display">
              <MessageSquarePlus className="w-4 h-4 text-blue-400" />
              <span>Leave a Message for Mark</span>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              Write a comment or greeting as a classmate, teacher, or fellow developer.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-xs text-center space-y-1">
                <p className="font-semibold">Salamat sa mensahe!</p>
                <p>Your note has been posted to Mark's guestbook.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Role / Relationship
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. PCC Classmate, Instructor, Friend"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Message / Endorsement
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Padayon Mark! Padayun sa pag-coding ug pag-explore..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post Endorsement</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
