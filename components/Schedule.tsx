import React from 'react';
import type { ScheduleItem } from '../types';
import SplitText from './SplitText';

const scheduleData: ScheduleItem[] = [
  { time: '09:00 AM', title: 'Registration & Welcome', description: 'Doors open! Grab your badge, some coffee, and meet fellow hackers.' },
  { time: '09:30 AM', title: 'Kick-off & Hacking Begins', description: 'Opening remarks, theme reveal, and the official start of the hackathon.' },
  { time: '12:30 PM', title: 'Working Lunch', description: 'Refuel with a delicious lunch on us, served at the hacking stations.' },
  { time: '03:00 PM', title: 'Hacking Ends & Submissions', description: 'Pencils down! Finalize your projects and submit them for judging.' },
  { time: '03:15 PM', title: 'Project Expo & Judging', description: 'Showcase your work to the judges and fellow participants.' },
  { time: '04:00 PM', title: 'Awards & Closing Ceremony', description: 'Celebrating the amazing projects and announcing the winners of Hacktopia!' },
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
                  className="text-5xl font-bold" 
                  splitType="words" 
              />
          </div>
          <div className="text-lg text-gray-600">
              <SplitText 
                  text="An action-packed day of innovation and fun." 
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
                <p className="text-lg font-bold text-green-700">{item.time}</p>
              </div>

              {/* Dot in the middle */}
              <div className="z-10 order-2 flex items-center">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-green-500 shadow-md"></div>
              </div>

              {/* Card on the other side */}
              <div className={`w-5/12 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;