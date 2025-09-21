import React from 'react';
import type { ScheduleItem } from '../types';
import SplitText from './SplitText';

const scheduleData: ScheduleItem[] = [
  { time: 'Sept 25, 03:00 PM', title: 'Reporting', description: 'Pickup from Piravanthoor. Check-in and get ready to hack.' },
  { time: 'Sept 25, 04:00 PM', title: 'Hackathon Starts', description: 'Opening remarks and the hacking marathon begins!' },
  { time: 'Sept 25, 08:00 PM', title: 'Dinner', description: 'Refuel for a night of coding and collaboration.' },
  { time: 'Sept 26, 12:00 AM', title: 'Campfire', description: 'Take a break, gather around the campfire, and share ideas.' },
  { time: 'Sept 26, 04:00 AM', title: 'Mentor Evaluation', description: 'Mentors conduct a preliminary evaluation to finalize the top 5 teams.' },
  { time: 'Sept 26, 05:00 AM', title: 'First Round Evaluation', description: 'The first round of judging begins for all participating teams.' },
  { time: 'Sept 26, 07:00 AM', title: 'Finale: Presentations & Winners', description: 'Hacking ends. Finalized teams present, final evaluations take place, and winners are announced with prize distribution.' },
];


const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
              <SplitText 
                  tag="h2" 
                  text="Event Timeline" 
                  className="text-5xl font-bold text-slate-900" 
                  splitType="words" 
              />
          </div>
          <div className="text-lg text-slate-600">
              <SplitText 
                  text="A 15-hour marathon of innovation and fun." 
                  splitType="words" 
                  delay={20} 
              />
          </div>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 w-1 bg-gradient-to-b from-green-200 to-teal-200 h-full transform -translate-x-1/2"></div>
          {scheduleData.map((item, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              {/* Time on one side */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                <p className="text-lg font-bold text-green-500">{item.time}</p>
              </div>

              {/* Dot in the middle */}
              <div className="z-10 order-2 flex items-center">
                <div className="w-6 h-6 rounded-full bg-slate-50 border-4 border-green-500 shadow-md"></div>
              </div>

              {/* Card on the other side */}
              <div className={`w-5/12 p-6 bg-white rounded-2xl shadow-lg border border-slate-200 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;