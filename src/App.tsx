/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EnvelopeModal } from './components/EnvelopeModal';
import { PetalShower } from './components/PetalShower';
import { AudioPlayer } from './components/AudioPlayer';
import { InvitationHeader } from './components/InvitationHeader';
import { SaveTheDateScratch } from './components/SaveTheDateScratch';
import { OurStoryGallery } from './components/OurStoryGallery';
import { VenueSection } from './components/VenueSection';
import { FestivitiesSection } from './components/FestivitiesSection';
import { InvitationFooter } from './components/InvitationFooter';
import { GuestPassModal } from './components/GuestPassModal';
import { ShareModal } from './components/ShareModal';
import { Smartphone, Monitor, Flower2, Mail, Share2 } from 'lucide-react';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [audioTrigger, setAudioTrigger] = useState(false);
  const [petalsActive, setPetalsActive] = useState(true);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'mobile' | 'responsive'>('mobile');

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    setAudioTrigger(true);
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1c040a] text-[#4a2e2b] flex flex-col items-center justify-start relative selection:bg-[#c99738]/30">
      
      {/* Background ambient pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Falling Flower Petals Canvas */}
      <PetalShower active={petalsActive} />

      {/* Floating Audio Controller */}
      <AudioPlayer autoPlayTrigger={audioTrigger} />

      {/* Top Floating Utility Bar */}
      <header className="sticky top-2 z-40 w-full max-w-md px-3 flex items-center justify-between text-xs">
        {/* View Mode Switcher (Visible on desktop) */}
        <div className="hidden md:flex items-center bg-[#360813]/90 backdrop-blur-md rounded-full border border-[#d4af37]/40 p-1 shadow-lg text-[#faeed1]">
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer ${
              viewMode === 'mobile' ? 'bg-[#881337] text-white shadow-xs font-medium' : 'text-[#e8cfba] hover:text-white'
            }`}
            title="Mobile iPhone view (as seen in video)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Phone Frame</span>
          </button>
          <button
            onClick={() => setViewMode('responsive')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer ${
              viewMode === 'responsive' ? 'bg-[#881337] text-white shadow-xs font-medium' : 'text-[#e8cfba] hover:text-white'
            }`}
            title="Full wide view"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Full View</span>
          </button>
        </div>

        {/* Action icons right */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Petal toggle */}
          <button
            onClick={() => setPetalsActive(!petalsActive)}
            className={`p-2 rounded-full border shadow-md backdrop-blur-md transition-all cursor-pointer ${
              petalsActive
                ? 'bg-[#4a0d1b]/90 border-[#d4af37]/60 text-[#fcd34d]'
                : 'bg-[#29050d]/80 border-stone-700 text-stone-400'
            }`}
            title={petalsActive ? 'Disable falling petals' : 'Enable falling petals'}
          >
            <Flower2 className="w-4 h-4" />
          </button>

          {/* Share button */}
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4a0d1b]/90 border border-[#d4af37]/60 text-[#faeed1] hover:text-[#fcd34d] shadow-md backdrop-blur-md transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#fcd34d]" />
            <span className="font-cinzel text-[11px] font-semibold">Share</span>
          </button>

          {/* Envelope re-open */}
          <button
            onClick={handleReopenEnvelope}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4a0d1b]/90 border border-[#d4af37]/60 text-[#faeed1] hover:text-[#fcd34d] shadow-md backdrop-blur-md transition-all cursor-pointer"
            title="Re-open royal envelope"
          >
            <Mail className="w-3.5 h-3.5 text-[#fcd34d]" />
            <span className="font-cinzel text-[11px] font-semibold">Seal</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full flex justify-center py-4 px-2 sm:px-4">
        {/* Frame Container */}
        <div
          className={`w-full transition-all duration-500 rounded-3xl overflow-hidden shadow-2xl relative ${
            viewMode === 'mobile'
              ? 'max-w-[430px] bg-[#faf6f0] border-4 border-[#2d0711] ring-1 ring-[#d4af37]/40 my-2'
              : 'max-w-2xl bg-[#faf6f0] border-2 border-[#d4af37]/40 my-4'
          }`}
        >
          {/* Subtle floral watermark & royal card background */}
          <div className="absolute inset-0 card-paper-texture pointer-events-none opacity-60" />

          {/* Top Gold Border Accent */}
          <div className="h-2 w-full gold-foil-bg shadow-sm" />

          {/* Inner Content Stack */}
          <div className="relative z-10 flex flex-col">
            {/* 1. Header with Lord Ganesha & Names */}
            <InvitationHeader />

            {/* Ornamental Divider */}
            <div className="w-full flex items-center justify-center my-2 opacity-60 text-[#b45309]">
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="mx-2 text-xs">✦ ❀ ✦</span>
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            {/* 2. Save The Date with 3 Canvas Scratch-off Cards & Countdown */}
            <SaveTheDateScratch />

            {/* Ornamental Divider */}
            <div className="w-full flex items-center justify-center my-2 opacity-60 text-[#b45309]">
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="mx-2 text-xs">✦ ❀ ✦</span>
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            {/* 3. Forever Us / Our Story Polaroid Stack */}
            <OurStoryGallery />

            {/* Ornamental Divider */}
            <div className="w-full flex items-center justify-center my-2 opacity-60 text-[#b45309]">
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="mx-2 text-xs">✦ ❀ ✦</span>
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            {/* 4. Where - The Venue: Secret Meadows, Patna City, Bihar */}
            <VenueSection />

            {/* Ornamental Divider */}
            <div className="w-full flex items-center justify-center my-2 opacity-60 text-[#b45309]">
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="mx-2 text-xs">✦ ❀ ✦</span>
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            {/* 5. The Celebrations Unfold - Sangeet (10 Dec), Haldi (11 Dec), Wedding (12 Dec) */}
            <FestivitiesSection />

            {/* Ornamental Divider */}
            <div className="w-full flex items-center justify-center my-2 opacity-60 text-[#b45309]">
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="mx-2 text-xs">✦ ❀ ✦</span>
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            {/* 6. Footer with Venues, Phone and Warm Regards */}
            <InvitationFooter
              onOpenPass={() => setIsPassModalOpen(true)}
              onOpenShare={() => setIsShareModalOpen(true)}
              onReopenEnvelope={handleReopenEnvelope}
            />

            {/* Bottom Gold Border Accent */}
            <div className="h-2 w-full gold-foil-bg shadow-sm" />
          </div>
        </div>
      </main>

      {/* The Wax-Sealed Opening Envelope Modal */}
      <EnvelopeModal
        isOpen={!isEnvelopeOpen}
        onOpen={handleOpenEnvelope}
      />

      {/* Guest Pass Modal */}
      <GuestPassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
