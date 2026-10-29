import React, { useState } from 'react';
import { WEDDING_COUPLE } from '../data/weddingData';
import { X, Copy, Check, Share2, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const appUrl = window.location.href;
  const shareText = `🌸 *Wedding Invitation: Kush & Komal* 🌸\n\nWith the blessings of God & our families, you are joyfully invited to celebrate the union of Kush & Komal!\n\n✨ *Sangeet Night:* 10th December 2026 (Shyam Sundar Palace)\n✨ *Haldi Ceremony:* 11th December 2026 (Shyam Sundar Palace)\n✨ *The Royal Wedding & Phere:* 12th December 2026 (Secret Meadows)\n📍 *Patna City, Bihar*\n📞 *Contact:* 8285156992\n\nTap to open the interactive digital card:\n${appUrl}\n\n#KushKomalKiShadi`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(shareText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Kush & Komal | Wedding Invitation',
        text: `You are cordially invited to celebrate the wedding of Kush & Komal! Sangeet Dec 10 & Haldi Dec 11 at Shyam Sundar Palace, Wedding Dec 12 at Secret Meadows, Patna City. Contact: 8285156992`,
        url: appUrl
      }).catch(console.error);
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 select-none">
      <div className="relative w-full max-w-sm bg-gradient-to-b from-[#faf6f0] via-[#f7eee2] to-[#eddcc9] rounded-3xl border-2 border-[#d4af37] shadow-2xl p-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f0e4d4] text-[#712234] flex items-center justify-center hover:bg-[#ebd3bd] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center pb-4 border-b border-[#ebd7be]">
          <span className="text-[10px] uppercase font-cinzel font-bold tracking-[0.3em] text-[#93523f]">
            SPREAD THE JOY
          </span>
          <h3 className="font-cormorant text-2xl font-bold text-[#6a1125] mt-0.5">
            Share Invitation
          </h3>
          <p className="text-xs text-[#7e5345] font-sans mt-1">
            Send this digital card directly to friends and family
          </p>
        </div>

        {/* Message Preview */}
        <div className="mt-4 p-3 bg-white/90 rounded-2xl border border-[#ebd7be] text-xs text-[#633a2d] font-sans space-y-1 leading-relaxed">
          <p className="font-semibold text-[#881337]">🌸 Wedding Invitation: Kush & Komal</p>
          <p>• Sangeet: 10 Dec • Shyam Sundar Palace</p>
          <p>• Haldi: 11 Dec • Shyam Sundar Palace</p>
          <p>• Wedding: 12 Dec • Secret Meadows</p>
          <p className="text-[#881337] font-semibold pt-1">📞 Contact: 8285156992</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2.5">
          <button
            onClick={handleWhatsApp}
            className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-[#20ba5a] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Share via WhatsApp
          </button>

          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full py-2.5 px-4 rounded-xl bg-[#881337] text-[#fff6db] text-xs font-cinzel font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-[#720e2c] transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#fcd34d]" />
              Share to Contacts / Apps
            </button>
          )}

          <button
            onClick={handleCopy}
            className="w-full py-2.5 px-4 rounded-xl border border-[#d8c3ae] bg-[#fdfbf8] text-[#6e3b2e] text-xs font-sans font-medium flex items-center justify-center gap-2 hover:bg-[#ede2d3] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Invitation Message Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#881337]" />
                <span>Copy Invitation Message & Link</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
