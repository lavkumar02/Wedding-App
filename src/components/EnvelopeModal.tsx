import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';

interface EnvelopeModalProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ isOpen, onOpen }) => {
  const [openingState, setOpeningState] = useState<'idle' | 'breaking' | 'opening' | 'complete'>('idle');

  if (!isOpen) return null;

  const handleTapToReveal = () => {
    if (openingState !== 'idle') return;
    setOpeningState('breaking');

    // Confetti burst from seal
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.5, x: 0.5 },
      colors: ['#f5d77f', '#e6c364', '#b8860b', '#d93856', '#ffffff'],
      shapes: ['circle', 'square'],
      scalar: 0.9,
    });

    setTimeout(() => {
      setOpeningState('opening');
    }, 450);

    setTimeout(() => {
      setOpeningState('complete');
      onOpen();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#150207] p-4 select-none overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5e0d1d] via-[#2d050d] to-[#120206] opacity-90" />

      {/* Floating subtle gold sparkles in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#fde047] blur-[1px] animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-[#fde047] blur-[1px] animate-pulse" />
        <div className="absolute top-1/3 right-1/6 w-3 h-3 rounded-full bg-[#fbcfe8] blur-[1px] animate-bounce" />
      </div>

      {/* Main Envelope Container (Phone / Card aspect ratio) */}
      <div className={`relative w-full max-w-[420px] aspect-[9/16] max-h-[820px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${
        openingState === 'complete' ? 'scale-110 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
      }`}>
        {/* Envelope Body */}
        <div className="absolute inset-0 royal-envelope-bg border-4 border-[#c89d44]/30 rounded-3xl flex flex-col items-center justify-between p-6">
          
          {/* Subtle Embossed Floral Graphics at Top */}
          <div className="w-full flex justify-between items-start opacity-35 text-[#f5d77f]">
            <svg className="w-16 h-16 transform -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M50 20 C60 5, 80 5, 80 25 C80 45, 50 60, 50 60 C50 60, 20 45, 20 25 C20 5, 40 5, 50 20 Z" />
              <path d="M50 35 Q65 15 85 30 Q80 55 50 70 Q20 55 15 30 Q35 15 50 35 Z" />
              <circle cx="50" cy="40" r="6" />
            </svg>
            <div className="text-center font-cinzel text-xs tracking-[0.25em] text-[#e6c364]/70 pt-2">
              ROYAL INVITATION
            </div>
            <svg className="w-16 h-16 transform rotate-12 scale-x-[-1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M50 20 C60 5, 80 5, 80 25 C80 45, 50 60, 50 60 C50 60, 20 45, 20 25 C20 5, 40 5, 50 20 Z" />
              <path d="M50 35 Q65 15 85 30 Q80 55 50 70 Q20 55 15 30 Q35 15 50 35 Z" />
              <circle cx="50" cy="40" r="6" />
            </svg>
          </div>

          {/* Envelope Center / Flap Creases and Geometry */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Top flap diagonal lines */}
            <svg className="w-full h-full opacity-25" viewBox="0 0 400 650" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0 L200 325 L400 0" stroke="#f6d585" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M0 650 L200 325 L400 650" stroke="#f6d585" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Center Seal Area */}
          <div className="relative z-20 flex flex-col items-center my-auto">
            {/* "Tap to Reveal" text with sparkles */}
            <div className="flex items-center gap-1.5 mb-5 text-[#fdedc9] font-serif text-lg tracking-wider animate-pulse">
              <Sparkles className="w-4 h-4 text-[#eab308]" />
              <span className="font-cormorant italic text-xl font-semibold">Tap to Reveal</span>
              <Sparkles className="w-4 h-4 text-[#eab308]" />
            </div>

            {/* The 3D Wax Seal Button */}
            <button
              onClick={handleTapToReveal}
              disabled={openingState !== 'idle'}
              aria-label="Tap to open wedding invitation"
              className={`group relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                openingState === 'idle' ? 'hover:scale-105 active:scale-95 animate-float' : ''
              } ${openingState === 'breaking' ? 'scale-125 rotate-12' : ''}`}
            >
              {/* Outer Glowing Golden Aura */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#eab308]/40 via-[#f59e0b]/50 to-[#ca8a04]/40 blur-md group-hover:blur-lg transition-all" />

              {/* Wax Seal Outer Rim with uneven artisanal wax edge */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#f8f6f0] via-[#ede7db] to-[#d6c7b2] p-1.5 wax-seal-shadow border-2 border-[#b89552]/40">
                {/* Inner Pressed Ring */}
                <div className="w-full h-full rounded-full border border-dashed border-[#8d6728]/60 flex flex-col items-center justify-center bg-gradient-to-tr from-[#ece5d8] to-[#faf8f5] shadow-inner">
                  {/* Monogram / Initials */}
                  <div className="font-serif-cormorant text-2xl font-bold tracking-tight text-[#6d1326] flex items-center gap-0.5">
                    <span className="font-cinzel text-xl">K</span>
                    <Heart className="w-3.5 h-3.5 fill-[#881337] text-[#881337] mx-0.5 animate-pulse" />
                    <span className="font-cinzel text-xl">K</span>
                  </div>
                  <span className="text-[8px] uppercase tracking-[0.25em] font-sans font-semibold text-[#884725] mt-0.5">
                    12 • 12 • 26
                  </span>
                </div>
              </div>

              {/* Shimmer line across wax seal */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer" />
              </div>
            </button>

            {/* Names on seal */}
            <p className="mt-5 text-[#f5d77f] font-cinzel text-xs tracking-[0.3em] uppercase opacity-90">
              Kush & Komal
            </p>
          </div>

          {/* Floral Embellishment at Bottom */}
          <div className="w-full flex flex-col items-center pb-2 text-[#f5d77f]/50">
            <svg className="w-36 h-6" viewBox="0 0 200 30" fill="none" stroke="currentColor">
              <path d="M10 15 Q50 5 100 15 Q150 25 190 15" strokeWidth="1" />
              <circle cx="100" cy="15" r="3" fill="#eab308" />
              <circle cx="70" cy="15" r="2" fill="#eab308" />
              <circle cx="130" cy="15" r="2" fill="#eab308" />
            </svg>
            <span className="text-[10px] tracking-widest text-[#f3e3be]/70 uppercase mt-1">
              Shyam Sundar Palace & Secret Meadows • Patna City
            </span>
          </div>

        </div>

        {/* Golden light burst ripple when breaking */}
        {openingState !== 'idle' && (
          <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-amber-200/50 blur-2xl animate-ping" />
            <div className="absolute inset-0 bg-gradient-to-b from-amber-200/40 via-transparent to-amber-500/20 mix-blend-screen" />
          </div>
        )}
      </div>
    </div>
  );
};
