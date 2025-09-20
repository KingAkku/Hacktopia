import React from 'react';
import type { Judge } from '../types';
import SplitText from './SplitText';

const judgesData: Judge[] = [
  { name: 'Dr. Evelyn Reed', title: 'Professor, Computer Science', imageUrl: 'https://placehold.co/200x200/334155/e2e8f0?text=Judge' },
  { name: 'Marcus Chen', title: 'Founder & CEO, InnovateX', imageUrl: 'https://placehold.co/200x200/334155/e2e8f0?text=Judge' },
  { name: 'Priya Sharma', title: 'Lead UX Designer, Google', imageUrl: 'https://placehold.co/200x200/334155/e2e8f0?text=Judge' },
  { name: 'Ben Carter', title: 'Venture Capitalist, Future Labs', imageUrl: 'https://placehold.co/200x200/334155/e2e8f0?text=Judge' },
];

const JudgeCard: React.FC<{ judge: Judge }> = ({ judge }) => (
  <div className="text-center p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 border border-gray-800">
    <img src={judge.imageUrl} alt={judge.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-violet-700" />
    <h3 className="text-2xl font-bold text-gray-100">{judge.name}</h3>
    <p className="text-violet-400">{judge.title}</p>
  </div>
);

const Judges: React.FC = () => {
  return (
    <section id="judges" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="mb-4">
              <SplitText 
                  tag="h2" 
                  text="Meet the Judges" 
                  className="text-5xl font-bold text-gray-100" 
                  splitType="words" 
              />
          </div>
          <div className="text-lg text-gray-300">
              <SplitText 
                  text="Our panel of esteemed industry experts and academics." 
                  splitType="words" 
                  delay={20} 
              />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {judgesData.map(judge => (
            <JudgeCard key={judge.name} judge={judge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;