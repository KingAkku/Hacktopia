import React from 'react';
import SplitText from './SplitText';

const sponsorsData = [
  { name: 'InnovateX', logoUrl: 'https://picsum.photos/seed/sponsor1/200/100' },
  { name: 'Future Labs', logoUrl: 'https://picsum.photos/seed/sponsor2/200/100' },
  { name: 'Tech Solutions', logoUrl: 'https://picsum.photos/seed/sponsor3/200/100' },
  { name: 'Code Academy', logoUrl: 'https://picsum.photos/seed/sponsor4/200/100' },
  { name: 'Digital Ocean', logoUrl: 'https://picsum.photos/seed/sponsor5/200/100' },
  { name: 'GitHub', logoUrl: 'https://picsum.photos/seed/sponsor6/200/100' },
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
                  className="text-4xl font-bold" 
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