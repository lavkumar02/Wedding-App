export interface WeddingEvent {
  id: string;
  title: string;
  hindiTitle: string;
  dateStr: string;
  timeStr: string;
  dateObj: string; // ISO date for calendar
  endDateObj: string;
  venueName: string;
  venueArea: string;
  description: string;
  dressCode: {
    title: string;
    description: string;
    colors: { name: string; hex: string }[];
  };
  highlights: string[];
  bannerImage: string;
  themeColor: string;
}

export interface PhotoMemory {
  id: string;
  url: string;
  caption: string;
  subtitle: string;
  rotation: number;
}

export interface RsvpSubmission {
  id: string;
  fullName: string;
  phoneNumber: string;
  attending: 'accepted' | 'declined';
  partySize: number;
  events: string[];
  songSuggestion?: string;
  dietaryPreference: string;
  message?: string;
  timestamp: string;
}

export interface WishMessage {
  id: string;
  author: string;
  relation?: string;
  message: string;
  timestamp: string;
}
