import { WeddingEvent, PhotoMemory } from '../types';

export const WEDDING_COUPLE = {
  groom: 'Kush',
  groomFull: 'Kush Kumar',
  groomParents: 'Smt. Bebi Devi & Sri Mahesh Kumar',
  bride: 'Komal',
  brideFull: 'Komal Kirti',
  brideParents: 'Smt. Annapurna Kirti & Late Sri Rajesh Kirti',
  weddingDate: 'December 12, 2026',
  weddingYear: '2026',
  weddingMonth: 'DECEMBER',
  weddingDay: '12',
  phone: '8285156992',
  formattedPhone: '+91 8285156992',
  venues: [
    {
      id: 'shyam-sundar',
      name: 'Shyam Sundar Palace',
      city: 'Patna City, Bihar',
      dates: '10 - 11 December 2026',
      eventsHosted: 'Sangeet Night (10 Dec) & Haldi Ceremony (11 Dec)',
      address: 'Shyam Sundar Palace, Patna City, Bihar',
      gmapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shyam+Sundar+Palace+Patna+City+Bihar',
      image: '/images/shyam_sundar_palace.jpg',
      badge: '10 - 11 DEC 2026'
    },
    {
      id: 'secret-meadows',
      name: 'Secret Meadows',
      city: 'Patna City, Bihar',
      dates: '12 December 2026',
      eventsHosted: 'The Royal Wedding & Sacred Phere (12 Dec)',
      address: 'Secret Meadows, Patna City, Bihar',
      gmapsUrl: 'https://www.google.com/maps/search/?api=1&query=Secret+Meadows+Patna+City+Bihar',
      image: '/images/secret_meadows.jpg',
      badge: '12 DEC 2026'
    }
  ],
  shloka: {
    sanskrit: '॥ श्री गणेशाय नमः ॥\nवक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
    translation: 'O Lord with the curved trunk and immense form, whose brilliance matches millions of suns, please make all our endeavors obstacle-free always.'
  },
  warmRegards: [
    'With love and warm regards,',
    'Kumar & Kirti Families',
    'Kush & Komal'
  ]
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'sangeet',
    title: 'Sangeet Night',
    hindiTitle: 'संगीत एवं डांडिया निशा',
    dateStr: 'Thursday, 10th December 2026',
    timeStr: '6:00 PM Onwards',
    dateObj: '2026-12-10T18:00:00',
    endDateObj: '2026-12-10T23:59:00',
    venueName: 'Shyam Sundar Palace',
    venueArea: 'Shyam Sundar Palace, Patna City',
    description: 'An electric evening of music, family dance performances, glowing chandeliers, and Bollywood beats that will light up the dance floor!',
    dressCode: {
      title: 'Bollywood Glam & Jewel Tones',
      description: 'Emerald Green, Royal Blue, Metallic Gold, Sequins & Indo-Western Attire',
      colors: [
        { name: 'Emerald Green', hex: '#047857' },
        { name: 'Royal Peacock', hex: '#0E7490' },
        { name: 'Metallic Gold', hex: '#D97706' },
        { name: 'Midnight Violet', hex: '#6D28D9' }
      ]
    },
    highlights: [
      'Family Dance Performances & Face-offs',
      'Live Bollywood Band & DJ',
      'Cocktail Reception & Global Banquet'
    ],
    bannerImage: '/images/sangeet_celebration.jpg',
    themeColor: '#059669'
  },
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    hindiTitle: 'हल्दी उत्सव',
    dateStr: 'Friday, 11th December 2026',
    timeStr: '10:30 AM Onwards',
    dateObj: '2026-12-11T10:30:00',
    endDateObj: '2026-12-11T14:30:00',
    venueName: 'Shyam Sundar Palace',
    venueArea: 'Shyam Sundar Palace, Patna City',
    description: 'A vibrant morning drenched in the golden glow of fresh turmeric, yellow marigolds, dholak beats, and laughter with our closest ones.',
    dressCode: {
      title: 'Shades of Sunshine',
      description: 'Haldi Yellow, Mustard Gold, Mango & Fresh White linens',
      colors: [
        { name: 'Sunflower Yellow', hex: '#FACC15' },
        { name: 'Mustard Gold', hex: '#CA8A04' },
        { name: 'Warm Cream', hex: '#FEF08A' },
        { name: 'Ivory White', hex: '#FAF5FF' }
      ]
    },
    highlights: [
      'Floral Petal Shower (Phoolon ki Holi)',
      'Traditional Dholak & Folk Songs',
      'Artisanal Turmeric & Chandan Ubtan',
      'Festive Chaat & Thandai Counter'
    ],
    bannerImage: '/images/haldi_ceremony.jpg',
    themeColor: '#eab308'
  },
  {
    id: 'wedding',
    title: 'The Royal Wedding & Phere',
    hindiTitle: 'शुभ विवाह एवं फेरे',
    dateStr: 'Saturday, 12th December 2026',
    timeStr: '6:30 PM Onwards (Phere at 9:30 PM)',
    dateObj: '2026-12-12T18:30:00',
    endDateObj: '2026-12-13T01:30:00',
    venueName: 'Secret Meadows',
    venueArea: 'Secret Meadows, Patna City',
    description: 'The sacred culmination of love as Kush and Komal take the Saat Phere around the sacred fire, bound by holy vows under the starlit winter sky.',
    dressCode: {
      title: 'Royal Indian Traditional',
      description: 'Royal Maroon, Crimson, Gold, Wine, Ivory & Banarasi Silks',
      colors: [
        { name: 'Royal Crimson', hex: '#881337' },
        { name: 'Antique Gold', hex: '#B45309' },
        { name: 'Ruby Wine', hex: '#4C0519' },
        { name: 'Ivory Silk', hex: '#FFFBEB' }
      ]
    },
    highlights: [
      'Grand Royal Baraat Swagat (6:30 PM)',
      'Varmala Extravaganza under the Stars (8:00 PM)',
      'Sacred Vedic Phere (9:30 PM)',
      'Royal Wedding Banquet'
    ],
    bannerImage: '/images/wedding_mandap.jpg',
    themeColor: '#881337'
  }
];

export const PHOTO_MEMORIES: PhotoMemory[] = [
  {
    id: '1',
    url: '/images/wedding_rings.jpg',
    caption: 'Written in the stars',
    subtitle: 'From the first gaze to an eternity together',
    rotation: -2
  },
  {
    id: '2',
    url: '/images/bridal_mehndi.jpg',
    caption: 'Joy and laughter',
    subtitle: 'Intricate henna dreams & blooming love',
    rotation: 2.5
  },
  {
    id: '3',
    url: '/images/flower_shower.jpg',
    caption: 'Phoolon Ki Holi',
    subtitle: 'Celebrating happiness, laughter & togetherness',
    rotation: -1.5
  },
  {
    id: '4',
    url: '/images/diya_rangoli.jpg',
    caption: 'Sacred Blessings',
    subtitle: 'Illuminating our path of lifelong companionship',
    rotation: 2
  }
];
