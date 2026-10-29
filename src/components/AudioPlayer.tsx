import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ autoPlayTrigger }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (autoPlayTrigger && !hasStarted && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((e) => {
        console.log('Autoplay deferred until user interaction', e);
      });
    }
  }, [autoPlayTrigger, hasStarted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch(console.error);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding_soundtrack.mp3"
        loop
        preload="auto"
      />

      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Floating audio control pill */}
        <div 
          onClick={togglePlay}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group relative flex items-center gap-2 bg-[#420a16]/90 backdrop-blur-md border border-[#d4af37]/40 px-3.5 py-2 rounded-full shadow-2xl cursor-pointer hover:border-[#d4af37] transition-all duration-300 hover:scale-105"
        >
          {/* Animated sound equalizer bars */}
          <div className="flex items-end gap-[3px] h-4 w-4">
            <span className={`w-[3px] bg-[#f5d77f] rounded-full transition-all duration-300 ${isPlaying && !isMuted ? 'h-4 animate-pulse' : 'h-1.5'}`} />
            <span className={`w-[3px] bg-[#f5d77f] rounded-full transition-all duration-300 ${isPlaying && !isMuted ? 'h-3 animate-bounce' : 'h-2.5'}`} />
            <span className={`w-[3px] bg-[#f5d77f] rounded-full transition-all duration-300 ${isPlaying && !isMuted ? 'h-4 animate-pulse' : 'h-1'}`} />
          </div>

          <span className="text-xs tracking-wider text-[#faeed1] font-medium hidden sm:inline">
            {isPlaying ? 'Wedding Melody' : 'Play Music'}
          </span>

          <button 
            onClick={toggleMute}
            className="text-[#f5d77f] hover:text-white transition-colors p-1"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </>
  );
};
