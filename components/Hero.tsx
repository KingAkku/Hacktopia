import React from 'react';
import Countdown from './Countdown';
import CalendarIcon from './icons/CalendarIcon';
import LocationIcon from './icons/LocationIcon';
import ShinyText from './ShinyText';

const Hero: React.FC = () => {
  const eventDate = '2025-09-26T09:00:00';

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
          <ShinyText>Hacktopia</ShinyText> 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Innovate. Collaborate. Solve. A full-day hackathon dedicated to solving real-world student problems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-purple-600" />
            <span className="font-semibold">26 September 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <LocationIcon className="w-6 h-6 text-blue-500" />
            <span className="font-semibold">College of Engineering, Pathanapuram</span>
          </div>
        </div>
        <Countdown targetDate={eventDate} />
        <div id="register" className="mt-12">
            <a href="#" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-xl px-12 py-4 rounded-full hover:scale-105 transform transition-transform duration-300 shadow-2xl inline-block">
                Register Your Team!
            </a>
            <p className="mt-4 text-gray-500 text-sm">Registration opens soon. Stay tuned!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
