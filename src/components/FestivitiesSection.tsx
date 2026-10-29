import React, { useState } from 'react';
import { WEDDING_EVENTS } from '../data/weddingData';
import { Calendar, Clock, MapPin, Sparkles, Shirt, ChevronRight, ChevronLeft } from 'lucide-react';

export const FestivitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const event = WEDDING_EVENTS[activeTab];

  const createGoogleCalendarLink = (ev: typeof event) => {
    const startTime = ev.dateObj.replace(/[-:]/g, '');
    const endTime = ev.endDateObj.replace(/[-:]/g, '');
    const title = encodeURIComponent(`${ev.title} - Kush & Komal Wedding`);
    const details = encodeURIComponent(`${ev.description}\n\nVenue: ${ev.venueName} (${ev.venueArea})\nDress Code: ${ev.dressCode.title}`);
    const location = encodeURIComponent(`${ev.venueName}, Patna City, Bihar`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
  };

  return (
    <section className="py-8 px-4 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-cinzel font-semibold tracking-[0.3em] uppercase text-[#9e2a2b]">
          • The Celebrations Unfold •
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#670c1e] mt-1">
          Festivities
        </h2>
        <p className="text-xs font-sans text-[#7d5045] mt-1">
          Join us for three days of joy, traditions, and lifelong memories
        </p>
      </div>

      {/* Event Selector Pills */}
      <div className="flex bg-[#f5ecdf] p-1 rounded-2xl border border-[#e5d5be] mb-6 max-w-sm w-full">
        {WEDDING_EVENTS.map((ev, index) => (
          <button
            key={ev.id}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-2 px-1 text-center rounded-xl text-xs font-cinzel font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === index
                ? 'bg-[#881337] text-[#fef3c7] shadow-md scale-102'
                : 'text-[#7e4f40] hover:text-[#521321]'
            }`}
          >
            {ev.id === 'sangeet' ? 'Sangeet (10th)' : ev.id === 'haldi' ? 'Haldi (11th)' : 'Wedding (12th)'}
          </button>
        ))}
      </div>

      {/* Active Event Card */}
      <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-white shadow-xl border border-[#ebd8c1] flex flex-col transition-all duration-500">
        
        {/* Event Header Banner */}
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={event.bannerImage}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Date Tag */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-cinzel font-bold text-[#791128] border border-amber-200">
            {event.dateStr.split(',')[0]}
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-xs font-rozha tracking-wider text-[#fcd34d] block">
              {event.hindiTitle}
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-bold leading-tight">
              {event.title}
            </h3>
            <div className="flex items-center gap-3 text-xs text-[#faeed1] mt-1 font-sans">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#f59e0b]" />
                {event.dateStr.split(',')[1]}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
                {event.timeStr}
              </span>
            </div>
          </div>
        </div>

        {/* Event Body */}
        <div className="p-5 flex flex-col gap-4">
          {/* Poetic description */}
          <p className="font-cormorant text-base text-[#612431] italic leading-relaxed">
            "{event.description}"
          </p>

          {/* Location on property */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#faf6f0] border border-[#eee0d0] text-xs text-[#6e392c]">
            <MapPin className="w-4 h-4 text-[#881337] shrink-0" />
            <div className="font-semibold text-[#5a1323]">
              {event.venueName}, Patna City, Bihar
            </div>
          </div>

          {/* Dress Code Box */}
          <div className="p-3 rounded-2xl bg-gradient-to-br from-[#fcf9f5] to-[#f4ebe0] border border-[#e4d4be]">
            <div className="flex items-center gap-1.5 text-xs font-cinzel font-bold text-[#881337] uppercase tracking-wider mb-1.5">
              <Shirt className="w-4 h-4 text-[#d97706]" />
              DRESS CODE: {event.dressCode.title}
            </div>
            <p className="text-xs text-[#6e463a] font-sans mb-2.5 leading-snug">
              {event.dressCode.description}
            </p>
            {/* Color Swatches */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#946c5a] font-medium">Palette:</span>
              <div className="flex items-center gap-2">
                {event.dressCode.colors.map((c, i) => (
                  <div key={i} className="flex items-center gap-1 group relative">
                    <span
                      className="w-5 h-5 rounded-full border border-black/20 shadow-xs inline-block transition-transform hover:scale-125"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-[10px] text-[#71493e] hidden group-hover:inline">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-[#9a4b37]">
              Ceremony Highlights
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] text-[#582c22]">
              {event.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#f59e0b] shrink-0" />
                  <span className="line-clamp-1">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Calendar Button */}
          <a
            href={createGoogleCalendarLink(event)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#7e142b] text-[#fef3c7] font-cinzel text-xs font-semibold tracking-wider hover:bg-[#660f22] transition-colors shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#fcd34d]" />
            ADD TO GOOGLE CALENDAR
          </a>
        </div>

        {/* Carousel arrows */}
        <div className="bg-[#faf5ee] px-4 py-2.5 flex items-center justify-between border-t border-[#f0e4d7]">
          <button
            onClick={() => setActiveTab(prev => (prev === 0 ? WEDDING_EVENTS.length - 1 : prev - 1))}
            className="text-xs font-medium text-[#7a2233] flex items-center gap-1 hover:text-[#520f1e] cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Event
          </button>
          <span className="text-[11px] text-[#9a7566] font-cinzel">
            {activeTab + 1} of {WEDDING_EVENTS.length}
          </span>
          <button
            onClick={() => setActiveTab(prev => (prev === WEDDING_EVENTS.length - 1 ? 0 : prev + 1))}
            className="text-xs font-medium text-[#7a2233] flex items-center gap-1 hover:text-[#520f1e] cursor-pointer"
          >
            Next Event <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
