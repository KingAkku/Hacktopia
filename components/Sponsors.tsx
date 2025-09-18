import React from 'react';
import { Sponsor } from '../types';
import SplitText from './SplitText';

const sponsorsData: Sponsor[] = [
  { name: 'Platinum Sponsor 1', logoUrl: 'https://via.placeholder.com/300x150/FFD700/000000?text=Platinum+1', tier: 'platinum' },
  { name: 'Platinum Sponsor 2', logoUrl: 'https://via.placeholder.com/300x150/FFD700/000000?text=Platinum+2', tier: 'platinum' },
  { name: 'Gold Sponsor 1', logoUrl: 'https://via.placeholder.com/250x125/C0C0C0/000000?text=Gold+1', tier: 'gold' },
  { name: 'Gold Sponsor 2', logoUrl: 'https://via.placeholder.com/250x125/C0C0C0/000000?text=Gold+2', tier: 'gold' },
  { name: 'Gold Sponsor 3', logoUrl: 'https://via.placeholder.com/250x125/C0C0C0/000000?text=Gold+3', tier: 'gold' },
  { name: 'Silver Sponsor 1', logoUrl: 'https://via.placeholder.com/200x100/CD7F32/000000?text=Silver+1', tier: 'silver' },
  { name: 'Silver Sponsor 2', logoUrl: 'https://via.placeholder.com/200x100/CD7F32/000000?text=Silver+2', tier: 'silver' },
  { name: 'Silver Sponsor 3', logoUrl: 'https://via.placeholder.com/200x100/CD7F32/000000?text=Silver+3', tier: 'silver' },
  { name: 'Silver Sponsor 4', logoUrl: 'https://via.placeholder.com/200x100/CD7F32/000000?text=Silver+4', tier: 'silver' },
];

const Sponsors: React.FC = () => {
  const tiers = ['platinum', 'gold', 'silver'];

  const getTierClass = (tier: string) => {
    switch(tier) {
      case 'platinum': return 'max-h-24';
      case 'gold': return 'max-h-20';
      case 'silver': return 'max-h-16';
      default: return 'max-h-16';
    }
  }

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SplitText
            tag="h2"
            text="Our Sponsors"
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
            splitType="words"
            triggerOnScroll
          />
        </div>
        {tiers.map(tier => (
          <div key={tier} className="mb-12">
            <h3 className="text-2xl font-bold text-center text-green-600 capitalize mb-8">{tier}</h3>
            <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12">
              {sponsorsData
                .filter(sponsor => sponsor.tier === tier)
                .map((sponsor, index) => (
                  <a href="#" key={index} className="block hover:opacity-75 transition-opacity">
                    <img
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                      className={`object-contain ${getTierClass(tier)}`}
                    />
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
