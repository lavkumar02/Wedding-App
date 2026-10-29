import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Sparkles, Clock, Heart } from 'lucide-react';

interface ScratchCardProps {
  label: string;
  hiddenValue: string;
  subValue?: string;
  onRevealed: () => void;
  isRevealed: boolean;
}

const IndividualScratchCard: React.FC<ScratchCardProps> = ({
  label,
  hiddenValue,
  subValue,
  onRevealed,
  isRevealed
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isScratching, setIsScratching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    if (isRevealed) {
      ctx.clearRect(0, 0, rect.width, rect.height);
      return;
    }

    // Paint the rose-crimson foil layer
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#c22d4f');
    gradient.addColorStop(0.5, '#9e1a38');
    gradient.addColorStop(1, '#780e25');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Decorative foil pattern
    ctx.strokeStyle = 'rgba(255, 235, 180, 0.25)';
    ctx.lineWidth = 1;
    for (let i = -rect.height; i < rect.width + rect.height; i += 12) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + rect.height, rect.height);
      ctx.stroke();
    }

    // "SCRATCH" text on foil
    ctx.fillStyle = 'rgba(255, 245, 220, 0.85)';
    ctx.font = '600 11px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '2px';
    ctx.fillText('SCRATCH', rect.width / 2, rect.height / 2 - 2);

    // Subtle sparkles
    ctx.fillStyle = 'rgba(255, 215, 0, 0.9)';
    ctx.beginPath();
    ctx.arc(rect.width / 2, rect.height / 2 + 14, 2, 0, Math.PI * 2);
    ctx.fill();
  }, [isRevealed]);

  const scratch = (clientX: number, clientY: number) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    checkCompletion();
  };

  const checkCompletion = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let transparentPixels = 0;
      const totalPixels = imageData.data.length / 4;

      for (let i = 3; i < imageData.data.length; i += 16) {
        if (imageData.data[i] < 50) {
          transparentPixels += 4;
        }
      }

      if (transparentPixels / totalPixels > 0.38) {
        onRevealed();
      }
    } catch {
      // In case of security restrictions
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center">
      {/* Label */}
      <span className="text-[10px] sm:text-xs uppercase font-cinzel tracking-[0.2em] text-[#8e5238] font-bold mb-1.5">
        {label}
      </span>

      {/* Card Box */}
      <div className="relative w-full aspect-[3/4.2] rounded-2xl overflow-hidden shadow-md border border-[#e5d5be] bg-gradient-to-b from-[#fdfbf7] to-[#f4ece1] flex flex-col items-center justify-center select-none group">
        {/* Hidden Content Revealed Underneath */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
          <span className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight text-[#7b1128] leading-none">
            {hiddenValue}
          </span>
          {subValue && (
            <span className="text-[9px] uppercase font-sans tracking-widest text-[#946c42] mt-1 font-medium">
              {subValue}
            </span>
          )}
          <Heart className="w-3 h-3 text-[#d97706]/70 mt-1 fill-[#d97706]/40" />
        </div>

        {/* Scratchable Canvas Overlay */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full cursor-pointer touch-none transition-opacity duration-500 ${
            isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          onMouseDown={() => setIsScratching(true)}
          onMouseUp={() => setIsScratching(false)}
          onMouseLeave={() => setIsScratching(false)}
          onMouseMove={(e) => isScratching && scratch(e.clientX, e.clientY)}
          onTouchStart={() => setIsScratching(true)}
          onTouchEnd={() => setIsScratching(false)}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            scratch(touch.clientX, touch.clientY);
          }}
          onClick={(e) => scratch(e.clientX, e.clientY)}
        />
      </div>

      <span className="text-[9px] text-[#9a6a57] font-sans tracking-wide mt-1 italic flex items-center gap-0.5">
        ✨ scratch
      </span>
    </div>
  );
};

export const SaveTheDateScratch: React.FC = () => {
  const [revealedState, setRevealedState] = useState({
    month: false,
    day: false,
    year: false,
  });
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const allRevealed = revealedState.month && revealedState.day && revealedState.year;

  // Wedding Countdown Timer calculation
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-12T18:30:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#c22d4f', '#d4af37', '#f59e0b', '#ffffff', '#eab308']
    });
  };

  const handleReveal = (field: 'month' | 'day' | 'year') => {
    setRevealedState(prev => {
      const next = { ...prev, [field]: true };
      if (next.month && next.day && next.year && !hasCelebrated) {
        setHasCelebrated(true);
        triggerConfetti();
      }
      return next;
    });
  };

  const revealAllCards = () => {
    setRevealedState({ month: true, day: true, year: true });
    if (!hasCelebrated) {
      setHasCelebrated(true);
      triggerConfetti();
    }
  };

  return (
    <section className="py-8 px-4 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-cinzel font-semibold tracking-[0.3em] uppercase text-[#9e2a2b]">
          • The Date •
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#670c1e] mt-1">
          Save the Date
        </h2>
        <p className="text-xs sm:text-sm font-sans text-[#7d5045] mt-1.5 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
          Scratch below to reveal our wedding date
          <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
        </p>
      </div>

      {/* 3 Scratch Cards */}
      <div className="w-full max-w-sm flex gap-3 sm:gap-4 justify-center">
        <IndividualScratchCard
          label="MONTH"
          hiddenValue="DECEMBER"
          subValue="Auspicious"
          isRevealed={revealedState.month}
          onRevealed={() => handleReveal('month')}
        />
        <IndividualScratchCard
          label="DAY"
          hiddenValue="12"
          subValue="Saturday"
          isRevealed={revealedState.day}
          onRevealed={() => handleReveal('day')}
        />
        <IndividualScratchCard
          label="YEAR"
          hiddenValue="2026"
          subValue="Forever"
          isRevealed={revealedState.year}
          onRevealed={() => handleReveal('year')}
        />
      </div>

      {/* Quick Scratch All action button */}
      {!allRevealed && (
        <button
          onClick={revealAllCards}
          className="mt-4 text-xs font-medium text-[#881337] underline underline-offset-4 hover:text-[#5e0a24] transition-colors cursor-pointer"
        >
          Quick Reveal All ✨
        </button>
      )}

      {/* Love Quote */}
      <div className="mt-7 text-center max-w-xs">
        <p className="font-script text-2xl text-[#881337] italic">
          "A lifetime of togetherness begins with one sacred promise."
        </p>
      </div>

      {/* Live Countdown Box */}
      <div className="w-full max-w-sm mt-6 p-4 rounded-2xl bg-[#f8f3ec] border border-[#e2d5c3] shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-3 text-[#79152b]">
          <Clock className="w-4 h-4 text-[#d97706]" />
          <span className="font-cinzel text-xs uppercase tracking-widest font-semibold">
            The Wedding Countdown
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { val: timeLeft.days, label: 'DAYS' },
            { val: timeLeft.hours, label: 'HOURS' },
            { val: timeLeft.mins, label: 'MINS' },
            { val: timeLeft.secs, label: 'SECS' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/90 rounded-xl p-2 border border-[#e8ded1] shadow-xs">
              <span className="font-cormorant text-2xl sm:text-3xl font-bold text-[#741026] leading-none block">
                {String(item.val).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-sans tracking-wider text-[#8e604f] uppercase font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
