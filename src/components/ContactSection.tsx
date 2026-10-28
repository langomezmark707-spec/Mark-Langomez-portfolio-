import React, { useState } from 'react';
import { STUDENT_INFO } from '../data/portfolioData';
import { Phone, Mail, ExternalLink, Copy, Check, Send, MessageSquare, MapPin, Building } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMessage) return;

    // Save message locally
    const savedMessages = JSON.parse(localStorage.getItem('pcc_mark_messages') || '[]');
    savedMessages.push({
      name: formName,
      email: formEmail,
      message: formMessage,
      date: new Date().toISOString()
    });
    localStorage.setItem('pcc_mark_messages', JSON.stringify(savedMessages));

    setFormSubmitted(true);
    setTimeout(() => {
      // Clear form
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            Contact & Connect with Mark
          </h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            Need to collaborate on a software project, ask about Phil Countryville College IT coursework, or discuss tech opportunities? Reach out directly anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels cards (Left 7 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Mobile & SMS (Contact Number)</p>
                  <p className="text-base font-bold text-white font-mono">{STUDENT_INFO.contactNumber}</p>
                  <p className="text-[11px] text-slate-500 font-mono">Globe / TM Network (Philippines)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(STUDENT_INFO.contactNumber, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${STUDENT_INFO.contactNumber}`}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <p className="text-xs text-slate-400">Official Gmail Account</p>
                  <p className="text-base font-bold text-white font-mono truncate">{STUDENT_INFO.email}</p>
                  <p className="text-[11px] text-slate-500">Fastest response for inquiries</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => copyToClipboard(STUDENT_INFO.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${STUDENT_INFO.email}?subject=Inquiry%20from%20Mark%20Langomez%20Portfolio`}
                  className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Facebook Profile Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Facebook Name & Messenger</p>
                  <p className="text-base font-bold text-white">{STUDENT_INFO.facebookName}</p>
                  <p className="text-[11px] text-slate-500">Connect via social media & messaging</p>
                </div>
              </div>
              <a
                href={STUDENT_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Open FB</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* School Campus Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Educational Institution</p>
                  <p className="text-base font-bold text-white">{STUDENT_INFO.school}</p>
                  <p className="text-[11px] text-slate-500 font-mono">philcountryville.com · College of Computer Studies</p>
                </div>
              </div>
              <a
                href={STUDENT_INFO.schoolWebsite}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Visit PCC</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick message form (Right 6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7">
            <h3 className="text-lg font-bold text-white font-display mb-1">
              Send a Direct Note to Mark
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Leaves a message in Mark's student inbox and provides an instant link to dispatch via Gmail.
            </p>

            {formSubmitted ? (
              <div className="p-5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-xs space-y-2 text-center">
                <p className="font-bold text-sm">Daghang Salamat! Message received.</p>
                <p>Your note has been saved. Mark E. Langomez can review your correspondence.</p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Instructor, Classmate, or Recruiter"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">
                    Your Contact Email or Phone
                  </label>
                  <input
                    type="text"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. your_email@gmail.com or 09xxxxxxxxx"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Hi Mark! Saw your Phil Countryville digital portfolio..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-1">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Mark</span>
                  </button>

                  <a
                    href={`mailto:${STUDENT_INFO.email}?subject=Portfolio%20Message%20from%20${encodeURIComponent(formName || 'Visitor')}&body=${encodeURIComponent(formMessage || '')}`}
                    className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl transition-colors text-center"
                  >
                    Open in Mail
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
