import React, { useState } from 'react';
import { WEDDING_COUPLE } from '../data/weddingData';
import { MapPin, Navigation, Copy, Check, Calendar, Phone } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="py-8 px-4 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-cinzel font-semibold tracking-[0.3em] uppercase text-[#9e2a2b]">
          • Where •
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#670c1e] mt-1">
          Celebration Venues
        </h2>
        <p className="text-xs font-sans text-[#7d5045] mt-1">
          Patna City, Bihar
        </p>
      </div>

      {/* Venues Cards */}
      <div className="w-full max-w-sm space-y-6">
        {WEDDING_COUPLE.venues.map((venue) => (
          <div
            key={venue.id}
            className="rounded-3xl overflow-hidden bg-white shadow-xl border border-[#ebd8c1] flex flex-col group transition-all duration-300 hover:shadow-2xl"
          >
            {/* Venue Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              
              {/* Date Badge */}
              <div className="absolute top-3 right-3 bg-[#881337] text-[#fef3c7] px-3 py-1 rounded-full text-[10px] font-cinzel font-bold tracking-wider border border-[#d4af37]/60 shadow-md">
                {venue.badge}
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#f5d77f] font-semibold flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#fcd34d]" />
                  {venue.dates}
                </span>
                <h3 className="font-cormorant text-2xl font-bold leading-tight mt-0.5">
                  {venue.name}
                </h3>
                <p className="text-[11px] text-[#faeed1] font-sans opacity-90 line-clamp-1">
                  {venue.eventsHosted}
                </p>
              </div>
            </div>

            {/* Venue Details */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#5a1424]">
                    {venue.name}
                  </p>
                  <p className="text-xs text-[#7e5549] mt-0.5 leading-relaxed font-sans">
                    {venue.address}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-1 border-t border-[#f4ece3]">
                <a
                  href={venue.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-[#881337] to-[#9f1239] text-[#fef3c7] font-cinzel text-[11px] tracking-wider font-semibold shadow-xs hover:brightness-110 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#fcd34d]" />
                  GET DIRECTIONS
                </a>

                <button
                  onClick={() => copyAddress(venue.id, `${venue.name}, ${venue.address}`)}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-[#d9c4af] bg-[#faf6f0] text-[#71162b] font-sans text-xs font-medium hover:bg-[#ede3d5] transition-colors cursor-pointer"
                >
                  {copiedId === venue.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Contact help callout */}
        <div className="p-3 rounded-2xl bg-[#faf6f0] border border-[#ebd8c1] flex items-center justify-between text-xs text-[#72463b]">
          <span className="font-sans font-medium">Guest Assistance & Directions:</span>
          <a
            href={`tel:${WEDDING_COUPLE.phone}`}
            className="flex items-center gap-1 font-semibold text-[#881337] hover:underline"
          >
            <Phone className="w-3.5 h-3.5 text-[#881337]" />
            {WEDDING_COUPLE.formattedPhone}
          </a>
        </div>
      </div>
    </section>
  );
};
