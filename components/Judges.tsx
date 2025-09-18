
import React from 'react';
import type { Judge } from '../types';

const judgesData: Judge[] = [
  { name: 'Dr. Evelyn Reed', title: 'Professor, Computer Science', imageUrl: 'https://picsum.photos/seed/judge1/200' },
  { name: 'Marcus Chen', title: 'Founder & CEO, InnovateX', imageUrl: 'https://picsum.photos/seed/judge2/200' },
  { name: 'Priya Sharma', title: 'Lead UX Designer, Google', imageUrl: 'https://picsum.photos/seed/judge3/200' },
  { name: 'Ben Carter', title: 'Venture Capitalist, Future Labs', imageUrl: 'https://picsum.photos/seed/judge4/200' },
];

const JudgeCard: React.FC<{ judge: Judge }> = ({ judge }) => (
  <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <img src={judge.imageUrl} alt={judge.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-200" />
    <h3 className="text-xl font-bold">{judge.name}</h3>
    <p className="text-purple-600">{judge.title}</p>
  </div>
);

const Judges: React.FC = () => {
  return (
    <section id="judges" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet the Judges</h2>
          <p className="text-lg text-gray-600">Our panel of esteemed industry experts and academics.</p>
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
