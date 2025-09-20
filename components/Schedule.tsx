import React from 'react';
import type { ScheduleItem } from '../types';
import SplitText from './SplitText';

const scheduleData: ScheduleItem[] = [
  { time: 'Sept 25, 03:00 PM', title: 'Registration & Welcome', description: 'Doors open! Grab your badge, some coffee, and meet fellow hackers.' },
  { time: 'Sept 25, 04:00 PM', title: 'Kick-off & Hacking Begins', description: 'Opening remarks, theme reveal, and the official start of the hackathon.' },
  { time: 'Sept 25, 08:30 PM', title: 'Dinner', description: 'Refuel with a delicious dinner on us, served at the hacking stations.' },
  { time: 'Sept 26, 01:00 AM', title: 'Midnight Refreshments', description: 'Recharge with some late-night refreshments to keep the ideas flowing.' },
  { time: 'Sept 26, 06:00 AM', title: 'Hacking Ends & Submissions', description: 'Pencils down! Finalize your projects and submit them for judging.' },
  { time: 'Sept 26, 06:30 AM', title: 'Demos & Award Ceremony', description: 'Showcase your work and celebrate the winners of Hacktopia!' },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
              <SplitText 
                  tag="h2" 
                  text="Event Timeline" 
                  className="text-5xl font-bold text-gray-100" 
                  splitType="words" 
              />
          </div>
          <div className="text-lg text-gray-300">
              <SplitText 
                  text="A 15-hour marathon of innovation and fun." 
                  splitType="words" 
                  delay={20} 
              />
          </div>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 w-1 bg-gradient-to-b from-violet-900 to-purple-900 h-full transform -translate-x-1/2"></div>
          {scheduleData.map((item, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              {/* Time on one side */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                <p className="text-lg font-bold text-violet-400">{item.time}</p>
              </div>

              {/* Dot in the middle */}
              <div className="z-10 order-2 flex items-center">
                <div className="w-6 h-6 rounded-full bg-gray-900 border-4 border-violet-500 shadow-md"></div>
              </div>

              {/* Card on the other side */}
              <div className={`w-5/12 p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                <h3 className="text-xl font-bold text-gray-100 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;