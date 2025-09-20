import React from 'react';
import SplitText from './SplitText';

interface Sponsor {
  name: string;
  subtext: string;
  logoUrl: string;
}

const sponsorsData: Sponsor[] = [
  { name: 'F1 SOLUTIONS', subtext: 'IT SUB-DISTRIBUTION', logoUrl: '/Sponsor1.svg' },
];

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="mb-4">
              <SplitText 
                  tag="h2" 
                  text="Our Sponsor" 
                  className="text-5xl font-bold text-gray-100" 
                  splitType="words" 
              />
          </div>
          <div className="text-lg text-gray-300">
              <SplitText 
                  text="A huge thank you to our partner for making this event possible." 
                  splitType="words" 
                  delay={20} 
              />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsorsData.map(sponsor => (
            <div key={sponsor.name} className="text-center p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-800 w-full max-w-sm">
              <img src={sponsor.logoUrl} alt={sponsor.name} className="h-32 object-contain mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-100">{sponsor.name}</h3>
              <p className="text-violet-400 mt-1">{sponsor.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;