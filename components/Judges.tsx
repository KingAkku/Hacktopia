import React, { useState } from 'react';
import type { Coordinator } from '../types';
import SplitText from './SplitText';

const coordinatorsData: Coordinator[] = [
  { name: 'Aswin C S', title: 'Volunteer Coordinator', imageUrl: '/aswin.svg' },
  { name: 'Devika M R', title: 'Volunteer Coordinator', imageUrl: '/devika.svg' },
  { name: 'Akhil Kumar S', title: 'Volunteer Coordinator', imageUrl: '/akhil.svg' },
  { name: 'Joel T', title: 'Volunteer Coordinator', imageUrl: '/joel.svg' },
];

const getInitials = (name: string): string => {
  const names = name.split(' ');
  if (names.length === 1) return names[0].substring(0, 2).toUpperCase();
  return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
};

const CoordinatorCard: React.FC<{ coordinator: Coordinator }> = ({ coordinator }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 border border-slate-200">
      <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-500 overflow-hidden bg-green-100 flex items-center justify-center">
        {imgError ? (
          <span className="text-3xl font-bold text-green-600">{getInitials(coordinator.name)}</span>
        ) : (
          <img 
            src={coordinator.imageUrl} 
            alt={coordinator.name} 
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <h3 className="text-2xl font-bold text-slate-800">{coordinator.name}</h3>
      <p className="text-green-500">{coordinator.title}</p>
    </div>
  );
};

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