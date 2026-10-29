import React from 'react';
import { WEDDING_COUPLE } from '../data/weddingData';
import { Heart, Share2, QrCode, Phone } from 'lucide-react';

interface InvitationFooterProps {
  onOpenPass: () => void;
  onOpenShare: () => void;
  onReopenEnvelope: () => void;
}

export const InvitationFooter: React.FC<InvitationFooterProps> = ({
  onOpenPass,
  onOpenShare,
  onReopenEnvelope
}) => {
  return (
    <footer className="pt-10 pb-16 px-4 text-center flex flex-col items-center bg-gradient-to-b from-transparent to-[#f4ebe0]/60 border-t border-[#ebd8c1]/70">
      
      {/* Bollywood Romantic Closing Lines matching video */}
      <div className="max-w-xs space-y-3 mb-8">
        <p className="font-cormorant text-lg sm:text-xl text-[#7a182d] italic leading-snug">
          "Your presence will turn this real-life romance into a blockbuster we'll never forget."
        </p>

        <p className="font-cormorant text-base text-[#6f3f33] italic">
          Come, dance, laugh, and celebrate with us in true Bollywood style!
        </p>
      </div>

      {/* Warm Regards Box */}
      <div className="w-full max-w-sm p-5 rounded-2xl bg-white/90 border border-[#ebd8c1] shadow-sm mb-8">
        <span className="text-[10px] font-cinzel font-bold uppercase tracking-[0.25em] text-[#9a4d3b] block mb-2">
          WARM REGARDS
        </span>
        <h4 className="font-cormorant text-2xl font-bold text-[#6d1326]">
          {WEDDING_COUPLE.groom} & {WEDDING_COUPLE.bride}
        </h4>
        <div className="text-xs text-[#7d5345] font-sans mt-2 space-y-0.5 leading-relaxed">
          <p className="italic text-[#9a5b48]">with blessings from</p>
          <p className="font-medium text-[#5f2331]">{WEDDING_COUPLE.groomParents}</p>
          <p className="text-[#b45309] font-serif text-[10px]">&</p>
          <p className="font-medium text-[#5f2331]">{WEDDING_COUPLE.brideParents}</p>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-3 text-[#d97706]">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span className="font-script text-xl text-[#881337]">#KushKomalKiShadi</span>
          <Heart className="w-3.5 h-3.5 fill-current" />
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-sm">
        <button
          onClick={onOpenShare}
          className="flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-semibold shadow-md hover:bg-[#1faa4f] transition-all cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          Share on WhatsApp
        </button>

        <button
          onClick={onOpenPass}
          className="flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#881337] text-[#fef3c7] text-xs font-cinzel font-semibold shadow-md hover:bg-[#700f2c] transition-all cursor-pointer"
        >
          <QrCode className="w-4 h-4 text-[#fcd34d]" />
          View Wedding Pass
        </button>
      </div>

      {/* Direct Phone Link */}
      <div className="mt-4 text-xs font-sans">
        <a
          href={`tel:${WEDDING_COUPLE.phone}`}
          className="inline-flex items-center gap-1.5 font-bold text-sm text-[#881337] hover:underline"
        >
          <Phone className="w-3.5 h-3.5 text-[#881337]" />
          {WEDDING_COUPLE.phone}
        </a>
      </div>
    </footer>
  );
};
