import React from 'react';
import { ScheduleItem } from '../types';
import SplitText from './SplitText';

const scheduleData: ScheduleItem[] = [
  { time: 'Friday, 5:00 PM', title: 'Check-in & Welcome Mixer', description: 'Doors open! Grab your swag, meet fellow hackers, and get settled in.' },
  { time: 'Friday, 7:00 PM', title: 'Opening Ceremony', description: 'Official kickoff, keynote speech, and announcement of the themes.' },
  { time: 'Friday, 8:00 PM', title: 'Hacking Begins!', description: 'Let the coding commence! Find your team and start building.' },
  { time: 'Saturday, 1:00 PM', title: 'Midpoint Check-in & Lunch', description: 'Refuel with some great food and share your progress with mentors.' },
  { time: 'Saturday, 6:00 PM', title: 'Tech Workshop', description: 'Join a workshop on cutting-edge AI technologies to boost your project.' },
  { time: 'Sunday, 8:00 AM', title: 'Hacking Ends', description: 'Pencils down! Finalize your projects and prepare your submissions.' },
  { time: 'Sunday, 10:00 AM', title: 'Project Expo & Judging', description: 'Showcase your creation to the judges and fellow participants.' },
  { time: 'Sunday, 3:00 PM', title: 'Closing Ceremony & Awards', description: 'Celebrate the winners and an amazing weekend of innovation.' },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SplitText
            tag="h2"
            text="Event Schedule"
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
            splitType="words"
            triggerOnScroll
          />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-green-200 transform -translate-x-1/2"></div>
          {scheduleData.map((item, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-10 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'bg-green-50' : 'bg-teal-50'}`}>
                <p className="font-bold text-gray-800 text-sm">{item.time}</p>
                <h3 className="mb-2 font-bold text-green-700 text-lg">{item.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
