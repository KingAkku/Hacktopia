import React from 'react';
import SplitText from './SplitText';

const sponsorsData = [
  { name: 'InnovateX', logoUrl: 'https://placehold.co/200x100/e2e8f0/cbd5e1?text=InnovateX' },
  { name: 'Future Labs', logoUrl: 'https://placehold.co/200x100/e2e8f0/cbd5e1?text=Future+Labs' },
  { name: 'Tech Solutions', logoUrl: 'https://placehold.co/200x100/e2e8f0/cbd5e1?text=Tech+Solutions' },
  { name: 'Code Academy', logoUrl: 'https://placehold.co/200x100/e2e8f0/cbd5e1?text=Code+Academy' },
  { name: 'Digital Ocean', logoUrl: 'https://placehold.co/200x100/e2e8f0/cbd5e1?text=Digital+Ocean' },
  { name: 'GitHub', logoUrl: 'https://placehold.co/200x100/e2e8f0/cbd5e1?text=GitHub' },
];

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="mb-4">
              <SplitText 
                  tag="h2" 
                  text="Our Sponsors" 
                  className="text-5xl font-bold" 
                  splitType="words" 
              />
          </div>
          <div className="text-lg text-gray-600">
              <SplitText 
                  text="A huge thank you to our partners for making this event possible." 
                  splitType="words" 
                  delay={20} 
              />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsorsData.map(sponsor => (
            <div key={sponsor.name} className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src={sponsor.logoUrl} alt={sponsor.name} className="h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;