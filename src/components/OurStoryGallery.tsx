import React, { useState } from 'react';
import { PHOTO_MEMORIES } from '../data/weddingData';
import { Heart, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const OurStoryGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev === 0 ? PHOTO_MEMORIES.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev === PHOTO_MEMORIES.length - 1 ? 0 : prev + 1));
  };

  const current = PHOTO_MEMORIES[currentIndex];

  return (
    <section className="py-8 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-cinzel font-semibold tracking-[0.3em] uppercase text-[#9e2a2b]">
          • Our Story •
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#670c1e] mt-1">
          Forever Us
        </h2>
        <p className="text-xs font-sans text-[#7d5045] mt-1 italic">
          Moments we cherish, memories we hold dear
        </p>
      </div>

      {/* Polaroid Card Display */}
      <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
        {/* Subtle background stacked polaroids for realism */}
        <div className="absolute inset-0 bg-white/70 rounded-2xl transform rotate-3 scale-95 shadow-md -z-10 translate-y-2 border border-[#e5d5be]" />
        <div className="absolute inset-0 bg-white/50 rounded-2xl transform -rotate-2 scale-90 shadow-sm -z-20 translate-y-4 border border-[#e5d5be]" />

        {/* Main Active Polaroid */}
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#ebd8c1] flex flex-col items-center transition-all duration-500">
          {/* Photo Frame */}
          <div className="relative w-full aspect-[4/4.5] rounded-xl overflow-hidden bg-stone-100 shadow-inner group">
            <img
              src={current.url}
              alt={current.caption}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Soft vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Top corner photo tape */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-100/60 backdrop-blur-xs transform -rotate-1 rounded-xs shadow-xs border border-amber-200/50" />
            
            <div className="absolute bottom-3 right-3 text-white/90">
              <Camera className="w-4 h-4 drop-shadow-md" />
            </div>
          </div>

          {/* Polaroid Caption */}
          <div className="w-full pt-4 pb-1 text-center">
            <h3 className="font-cormorant text-2xl font-bold text-[#6a1125] leading-tight">
              {current.caption}
            </h3>
            <p className="font-script text-xl text-[#94614b] mt-1">
              {current.subtitle}
            </p>
          </div>

          {/* Dots & Nav controls */}
          <div className="w-full flex items-center justify-between mt-3 pt-3 border-t border-[#f0e4d7]">
            <button
              onClick={prevPhoto}
              className="w-8 h-8 rounded-full bg-[#f8f3ec] text-[#7b1428] flex items-center justify-center hover:bg-[#ebdccb] transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {PHOTO_MEMORIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-5 bg-[#881337]' : 'bg-[#e0d0be]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPhoto}
              className="w-8 h-8 rounded-full bg-[#f8f3ec] text-[#7b1428] flex items-center justify-center hover:bg-[#ebdccb] transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
