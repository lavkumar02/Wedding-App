import React from 'react';
import { WEDDING_COUPLE } from '../data/weddingData';
import { ChevronDown, Sparkles, Heart } from 'lucide-react';

export const InvitationHeader: React.FC = () => {
  return (
    <header className="relative pt-8 pb-10 px-4 text-center flex flex-col items-center">
      {/* Royal Arch Frame Border Corner Accents */}
      <div className="absolute top-3 left-4 text-[#cba358]/50 select-none pointer-events-none">
        <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none" stroke="currentColor">
          <path d="M0 0 L25 0 C25 25, 0 25, 0 50" strokeWidth="1" />
          <circle cx="12" cy="12" r="3" fill="#d4af37" />
        </svg>
      </div>
      <div className="absolute top-3 right-4 text-[#cba358]/50 select-none pointer-events-none scale-x-[-1]">
        <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none" stroke="currentColor">
          <path d="M0 0 L25 0 C25 25, 0 25, 0 50" strokeWidth="1" />
          <circle cx="12" cy="12" r="3" fill="#d4af37" />
        </svg>
      </div>

      {/* Lord Ganesha Emblem & Shloka */}
      <div className="flex flex-col items-center mb-5 max-w-sm">
        {/* Lord Ganesha SVG icon */}
        <div className="w-14 h-14 mb-2 text-[#991b1b] flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            {/* Elegant stylized Ganesha icon */}
            <path d="M50 8 C40 8 32 15 32 24 C32 30 35 34 39 37 C34 40 30 46 30 54 C30 65 39 74 50 74 C61 74 70 65 70 54 C70 46 66 40 61 37 C65 34 68 30 68 24 C68 15 60 8 50 8 Z M50 14 C56 14 62 18 62 24 C62 29 58 33 52 33 C49 33 46 31 46 28 C46 26 48 24 50 24 C51 24 52 23 52 22 C52 21 51 20 50 20 C46 20 42 24 42 28 C42 34 48 38 54 38 C56 38 58 37 60 36 C63 40 65 46 65 52 C65 62 58 68 50 68 C42 68 35 62 35 52 C35 46 37 40 40 36 C42 37 44 38 46 38 C47 38 49 36 49 34 C49 32 47 30 45 30 C41 30 38 27 38 24 C38 18 44 14 50 14 Z" />
            <circle cx="50" cy="22" r="2.5" fill="#ca8a04" />
            <path d="M47 35 Q50 38 53 35 Q55 48 48 55 Q45 52 48 46 Q51 40 47 35 Z" fill="#ca8a04" />
          </svg>
        </div>

        {/* Auspicious Sanskrit invocation */}
        <p className="font-rozha text-[#881337] text-sm tracking-widest font-medium">
          ॥ श्री गणेशाय नमः ॥
        </p>
        <p className="text-xs text-[#7e4f40] font-cormorant italic mt-1 leading-relaxed max-w-xs px-2">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>
      </div>

      {/* Invitation Lead Line */}
      <p className="font-cormorant text-sm sm:text-base text-[#6f4236] max-w-xs leading-relaxed px-2">
        With the blessings of Shri Ganesh and our beloved families, we joyfully invite you to celebrate the union of
      </p>

      {/* The Couple's Grand Names */}
      <div className="my-5 flex flex-col items-center">
        <h1 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-normal text-[#751126] hover:scale-102 transition-transform">
          {WEDDING_COUPLE.groom}
        </h1>

        <div className="flex items-center gap-3 my-1 text-[#b45309]">
          <span className="h-px w-8 bg-[#d4af37]" />
          <span className="font-script text-3xl text-[#b45309]">&</span>
          <span className="h-px w-8 bg-[#d4af37]" />
        </div>

        <h1 className="font-cormorant text-4xl sm:text-5xl font-bold tracking-normal text-[#751126] hover:scale-102 transition-transform">
          {WEDDING_COUPLE.bride}
        </h1>
      </div>

      {/* Family Lineage & Blessings */}
      <div className="w-full max-w-md mx-auto border-t border-b border-[#ebd7be] py-2.5 px-3 sm:px-4 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-xs sm:text-sm font-cormorant font-semibold tracking-wide text-[#784f42] leading-relaxed">
          <span>Son of {WEDDING_COUPLE.groomParents}</span>
          <span className="hidden sm:inline text-[#d4af37] text-base">•</span>
          <span>Daughter of {WEDDING_COUPLE.brideParents}</span>
        </div>
      </div>

      {/* Scroll to see magic indicator matching video */}
      <div className="mt-8 flex flex-col items-center animate-bounce text-[#881337] cursor-pointer">
        <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase font-bold text-[#9f1239]">
          SCROLL TO SEE MAGIC
        </span>
        <ChevronDown className="w-4 h-4 text-[#9f1239] mt-0.5" />
      </div>
    </header>
  );
};
