import React, { useRef } from 'react';
import { WEDDING_COUPLE, WEDDING_EVENTS } from '../data/weddingData';
import { X, Download, Share2, Sparkles, MapPin, Calendar, Heart } from 'lucide-react';

interface GuestPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuestPassModal: React.FC<GuestPassModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const savedRsvp = localStorage.getItem('kush_komal_rsvp');
  let guestName = 'Honored Wedding Guest';
  let partySize = 2;

  if (savedRsvp) {
    try {
      const parsed = JSON.parse(savedRsvp);
      if (parsed.fullName) guestName = parsed.fullName;
      if (parsed.partySize) partySize = parsed.partySize;
    } catch {
      // default
    }
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 select-none">
      <div className="relative w-full max-w-sm bg-gradient-to-b from-[#faf6f0] via-[#f7eee2] to-[#eddcc9] rounded-3xl border-2 border-[#d4af37] shadow-2xl p-6 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f0e4d4] text-[#712234] flex items-center justify-center hover:bg-[#ebd3bd] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Pass Header */}
        <div className="text-center pt-2 pb-4 border-b border-[#ebd7be]">
          <span className="text-[10px] uppercase font-cinzel font-bold tracking-[0.3em] text-[#93523f]">
            OFFICIAL DIGITAL WEDDING PASS
          </span>
          <h3 className="font-cormorant text-2xl font-bold text-[#6a1125] mt-0.5">
            Kush & Komal
          </h3>
          <p className="font-script text-lg text-[#b45309]">
            #KushKomalKiShadi
          </p>
        </div>

        {/* Guest Details */}
        <div className="py-4 text-center">
          <span className="text-[10px] uppercase tracking-widest text-[#8a5d4d] font-sans">
            Cordially Welcoming
          </span>
          <h4 className="font-cormorant text-2xl font-bold text-[#551020] mt-0.5">
            {guestName}
          </h4>
          <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-[#881337] text-[#fff7df] text-xs font-semibold shadow-xs">
            Admit {partySize} {partySize === 1 ? 'Guest' : 'Guests'}
          </span>
        </div>

        {/* Itinerary Summary */}
        <div className="bg-white/80 rounded-2xl p-3 border border-[#e8d5be] space-y-2 text-xs text-[#6a3f32] mb-4">
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div>
                <p className="font-semibold text-[#541223]">Dec 10 • Sangeet Night (6:00 PM)</p>
                <p className="text-[10px] text-[#855a4c]">Shyam Sundar Palace, Patna City, Bihar</p>
              </div>
              <div>
                <p className="font-semibold text-[#541223]">Dec 11 • Haldi Ceremony (10:30 AM)</p>
                <p className="text-[10px] text-[#855a4c]">Shyam Sundar Palace, Patna City, Bihar</p>
              </div>
              <div>
                <p className="font-semibold text-[#541223]">Dec 12 • Sacred Phere (6:30 PM)</p>
                <p className="text-[10px] text-[#855a4c]">Secret Meadows, Patna City, Bihar</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1.5 border-t border-[#f0e3d2] text-[11px]">
            <span className="text-[#885748]">Helpdesk:</span>
            <span className="font-semibold text-[#881337]">{WEDDING_COUPLE.phone}</span>
          </div>
        </div>

        {/* QR Code / Security Badge */}
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-[#ebd7be]">
          {/* Stylized QR Code SVG */}
          <div className="w-24 h-24 bg-white p-1">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#580d1e]">
              {/* Corner squares */}
              <rect x="5" y="5" width="30" height="30" rx="3" fill="none" stroke="#580d1e" strokeWidth="6" />
              <rect x="14" y="14" width="12" height="12" fill="#580d1e" />
              
              <rect x="65" y="5" width="30" height="30" rx="3" fill="none" stroke="#580d1e" strokeWidth="6" />
              <rect x="74" y="14" width="12" height="12" fill="#580d1e" />

              <rect x="5" y="65" width="30" height="30" rx="3" fill="none" stroke="#580d1e" strokeWidth="6" />
              <rect x="14" y="74" width="12" height="12" fill="#580d1e" />

              {/* Data dots */}
              <circle cx="50" cy="20" r="4" />
              <circle cx="50" cy="35" r="4" />
              <circle cx="40" cy="50" r="4" />
              <circle cx="60" cy="50" r="4" />
              <circle cx="50" cy="65" r="4" />
              <circle cx="50" cy="80" r="4" />
              <circle cx="70" cy="70" r="4" />
              <circle cx="85" cy="85" r="4" />
              <circle cx="70" cy="85" r="4" />
              <circle cx="85" cy="70" r="4" />
            </svg>
          </div>
          <span className="text-[9px] uppercase font-cinzel tracking-widest text-[#936454] mt-1">
            VIP Guest Verification
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={handlePrint}
            className="flex-1 py-2 px-3 rounded-xl bg-[#881337] text-white text-xs font-cinzel font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#720e2c] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#fcd34d]" />
            Save / Print Pass
          </button>
        </div>

      </div>
    </div>
  );
};
