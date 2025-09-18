
export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

export interface Judge {
  name: string;
  title: string;
  imageUrl: string;
}

export interface Sponsor {
  name: string;
  logoUrl: string;
  tier: 'platinum' | 'gold' | 'silver';
}

export interface FAQItem {
  question: string;
  answer: string;
}
