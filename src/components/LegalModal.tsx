import React from 'react';
import { X, ShieldCheck, FileText, Mail, Lock, CheckCircle2 } from 'lucide-react';
import { useAccessibleModal } from '../hooks/useAccessibleModal';

interface LegalModalProps {
  isOpen: boolean;
  type: 'ftc' | 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  const [contactName, setContactName] = React.useState('');
  const [contactEmail, setContactEmail] = React.useState('');
  const [contactMessage, setContactMessage] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const isModalOpen = Boolean(isOpen && type);
  const { modalRef } = useAccessibleModal(isModalOpen, onClose);

  if (!isOpen || !type) return null;

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191410]/75 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div 
        ref={modalRef}
        className="bg-[#FAF7F2] border border-[#E8DFD3] rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl modal-animate relative"
      >
        {/* Header */}
        <div className="bg-[#191410] text-[#FAF7F2] p-5 flex items-center justify-between border-b border-[#3D3228]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#C86D43]" />
            <h3 className="text-base font-serif font-bold text-white uppercase tracking-wider">
              {type === 'ftc' && 'FTC Affiliate Disclosure & Integrity Pledge'}
              {type === 'privacy' && 'Privacy Policy & Data Security'}
              {type === 'terms' && 'Terms of Service & Usage Agreements'}
              {type === 'contact' && 'Editorial & Science Board Contact'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-[#251E18] text-[#8C8074] hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4 text-xs text-[#5C5248] leading-relaxed">
          {type === 'ftc' && (
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E8DFD3] space-y-2">
                <h4 className="text-sm font-serif font-bold text-[#1C1510]">Federal Trade Commission (FTC) Compliance</h4>
                <p>
                  CupCura is an independent digital publication dedicated to coffee, tea, and botanical beverage curation. 
                  When you purchase products through our affiliate links (such as Amazon Associates, Fellow Products, Breville, or partner specialty roasters), we may earn a small referral commission at <strong>zero extra cost to you</strong>.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E8DFD3] space-y-2">
                <h4 className="text-sm font-serif font-bold text-[#1C1510]">Editorial Independence Pledge</h4>
                <p>
                  Our sensory taste ratings, health science notes, and equipment recommendations are 100% independent. 
                  Manufacturers and coffee roasters cannot pay to receive positive taste reviews or top positions in our catalog.
                </p>
              </div>
            </div>
          )}

          {type === 'privacy' && (
            <div className="space-y-4">
              <h4 className="text-sm font-serif font-bold text-[#1C1510]">Privacy & Data Protection (GDPR & CCPA Compliant)</h4>
              <p>
                CupCura respects visitor privacy. We do not sell, rent, or trade your personal email or browsing data to third-party ad networks.
              </p>
              <ul className="list-disc pl-4 space-y-1 text-[#5C5248]">
                <li><strong>Newsletter Emails</strong>: Used solely to deliver requested weekly cupping digests. You can unsubscribe anytime with 1 click.</li>
                <li><strong>Analytics</strong>: We use privacy-first, anonymized site analytics to improve site load times and page user experience.</li>
              </ul>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-4">
              <h4 className="text-sm font-serif font-bold text-[#1C1510]">Terms of Service & Health Disclaimer</h4>
              <p>
                All health benefits, contraindications, and caffeine mg metrics published on CupCura are provided for educational and informational purposes only. 
                They do not constitute formal medical advice or prescription diagnosis.
              </p>
              <p>
                Always consult your personal physician regarding specific health conditions, GERD acid reflux management, pregnancy caffeine restrictions, or pharmaceutical interactions.
              </p>
            </div>
          )}

          {type === 'contact' && (
            <div className="space-y-4">
              {sent ? (
                <div className="bg-[#2D5A46] text-white p-6 rounded-2xl text-center font-bold text-sm space-y-2">
                  <CheckCircle2 className="w-8 h-8 mx-auto" />
                  <p>Message Sent Successfully!</p>
                  <span className="text-xs font-normal opacity-90 block">Our editorial team will reply within 24 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmitContact} className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#1C1510] uppercase block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#D5C7B4] rounded-xl px-3.5 py-2 text-xs text-[#1C1510]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#1C1510] uppercase block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#D5C7B4] rounded-xl px-3.5 py-2 text-xs text-[#1C1510]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#1C1510] uppercase block mb-1">Inquiry / Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Ask our cupping lab or editorial team..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#D5C7B4] rounded-xl p-3.5 text-xs text-[#1C1510]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#191410] hover:bg-[#C86D43] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Editorial Message
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};