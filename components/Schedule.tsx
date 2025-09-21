import React from 'react';
import type { ScheduleItem } from '../types';
import SplitText from './SplitText';

const scheduleData: ScheduleItem[] = [
  { time: 'Sept 25, 03:00 PM', title: 'Registration & Welcome', description: 'Doors open! Grab your badge, some coffee, and meet fellow hackers.' },
  { time: 'Sept 25, 04:00 PM', title: 'Kick-off & Hacking Begins', description: 'Opening remarks, theme reveal, and the official start of the hackathon.' },
  { time: 'Sept 25, 06:00 PM', title: 'Mentor Check-in #1', description: 'Mentors will be around to help you refine your ideas and solve technical roadblocks.' },
  { time: 'Sept 25, 08:30 PM', title: 'Dinner & Campfire', description: 'Refuel with a delicious dinner on us, and gather around the campfire to share ideas and relax.' },
  { time: 'Sept 25, 10:30 PM', title: 'Tech Workshop', description: 'An optional workshop on "API Integration & Modern Web Frameworks".' },
  { time: 'Sept 26, 01:00 AM', title: 'Midnight Refreshments', description: 'Recharge with some late-night refreshments to keep the ideas flowing.' },
  { time: 'Sept 26, 03:00 AM', title: 'Mentor Check-in #2', description: 'Final check-in with mentors before the final push.' },
  { time: 'Sept 26, 07:00 AM', title: 'Hacking Ends & Submissions', description: 'Pencils down! Finalize your projects and submit them for judging.' },
  { time: 'Sept 26, 07:15 AM', title: 'Breakfast & Project Expo Setup', description: 'Grab some breakfast while the judges begin their review.' },
  { time: 'Sept 26, 08:00 AM', title: 'Demos & Judging', description: 'Showcase your work to the judges and fellow participants in a science fair format.' },
  { time: 'Sept 26, 09:30 AM', title: 'Finalist Presentations', description: 'Top teams present their projects on stage.' },
  { time: 'Sept 26, 10:00 AM', title: 'Award Ceremony & Closing', description: 'Celebrate the winners and the amazing work done by everyone at Hacktopia!' },
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