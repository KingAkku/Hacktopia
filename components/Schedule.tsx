
import React from 'react';
import type { ScheduleItem } from '../types';

const scheduleData: ScheduleItem[] = [
  { time: '09:00 AM', title: 'Registration & Breakfast', description: 'Doors open! Grab your badge, some coffee, and meet fellow hackers.' },
  { time: '10:00 AM', title: 'Opening Ceremony', description: 'Kick-off talks, keynote address, and official start of the hackathon.' },
  { time: '10:30 AM', title: 'Hacking Begins!', description: 'Time to start building. Mentors will be available to help.' },
  { time: '01:00 PM', title: 'Lunch Break', description: 'Refuel with a delicious lunch on us.' },
  { time: '04:00 PM', title: 'Workshop Session', description: 'Optional workshop on "Pitching Your Idea Effectively".' },
  { time: '06:00 PM', title: 'Hacking Ends & Submissions Due', description: 'Pencils down! Finalize your projects and submit them for judging.' },
  { time: '06:30 PM', title: 'Dinner & Project Expo', description: 'Enjoy dinner while judges review the submissions.' },
  { time: '08:00 PM', title: 'Finalist Pitches', description: 'The top 5 teams present their projects on stage.' },
  { time: '09:00 PM', title: 'Awards & Closing Ceremony', description: 'Announcement of winners and closing remarks.' },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Event Timeline</h2>
          <p className="text-lg text-gray-600">A full day packed with innovation and fun.</p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 w-1 bg-gradient-to-b from-purple-200 to-blue-200 h-full transform -translate-x-1/2"></div>
          {scheduleData.map((item, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-3 text-right'}`}>
              </div>
              <div className="z-10 order-2 flex items-center">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-purple-500 shadow-md"></div>
              </div>
              <div className={`w-5/12 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                <p className="text-sm font-semibold text-purple-600 mb-1">{item.time}</p>
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
