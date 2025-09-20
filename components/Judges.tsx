import React from 'react';
import type { Coordinator } from '../types';
import SplitText from './SplitText';

const coordinatorsData: Coordinator[] = [
  { name: 'Aswin C S', title: 'Volunteer Coordinator', imageUrl: 'https://placehold.co/200x200/e2e8f0/334155?text=Coordinator' },
  { name: 'Devika', title: 'Volunteer Coordinator', imageUrl: 'https://placehold.co/200x200/e2e8f0/334155?text=Coordinator' },
  { name: 'Akhil Kumar S', title: 'Volunteer Coordinator', imageUrl: 'https://placehold.co/200x200/e2e8f0/334155?text=Coordinator' },
  { name: 'Joel', title: 'Volunteer Coordinator', imageUrl: 'https://placehold.co/200x200/e2e8f0/334155?text=Coordinator' },
];

const CoordinatorCard: React.FC<{ coordinator: Coordinator }> = ({ coordinator }) => (
  <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 border border-slate-200">
    <img src={coordinator.imageUrl} alt={coordinator.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-500" />
    <h3 className="text-2xl font-bold text-slate-800">{coordinator.name}</h3>
    <p className="text-green-500">{coordinator.title}</p>
  </div>
);

const Coordinators: React.FC = () => {
  return (
    <section id="coordinators" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="mb-4">
              <SplitText 
                  tag="h2" 
                  text="Meet the Coordinators" 
                  className="text-5xl font-bold text-slate-900" 
                  splitType="words" 
              />
          </div>
          <div className="text-lg text-slate-600">
              <SplitText 
                  text="The team bringing Hacktopia to life." 
                  splitType="words" 
                  delay={20} 
              />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {coordinatorsData.map(coordinator => (
            <CoordinatorCard key={coordinator.name} coordinator={coordinator} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;