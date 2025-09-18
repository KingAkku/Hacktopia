import React from 'react';
import { Judge } from '../types';
import SplitText from './SplitText';

const judgesData: Judge[] = [
  { name: 'Alice Johnson', title: 'Principal Engineer, Google', imageUrl: 'https://i.pravatar.cc/300?img=1' },
  { name: 'Bob Williams', title: 'CTO, Innovate Inc.', imageUrl: 'https://i.pravatar.cc/300?img=2' },
  { name: 'Charlie Brown', title: 'Lead UX Designer, Figma', imageUrl: 'https://i.pravatar.cc/300?img=3' },
  { name: 'Diana Miller', title: 'Venture Capitalist, Tech Ventures', imageUrl: 'https://i.pravatar.cc/300?img=4' },
];

const Judges: React.FC = () => {
  return (
    <section id="judges" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SplitText
            tag="h2"
            text="Meet the Judges"
            className="text-5xl font-extrabold text-gray-800"
            splitType="words"
            triggerOnScroll
          />
        </div>
        <div className="grid grid-cols-4 gap-8">
          {judgesData.map((judge, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img src={judge.imageUrl} alt={judge.name} className="rounded-full object-cover w-full h-full shadow-lg" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{judge.name}</h3>
              <p className="text-gray-600">{judge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;