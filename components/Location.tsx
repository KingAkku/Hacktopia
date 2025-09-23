import React from 'react';
import SplitText from './SplitText';
import LocationIcon from './icons/LocationIcon';

const Location: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.521876527011!2d76.84107797437721!3d9.091399000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06001a1e7d237b%3A0x1cb43f1559981a8c!2sCollege%20of%20Engineering%20Pathanapuram!5e0!3m2!1sen!2sin!4v1716386548762!5m2!1sen!2sin";
  const googleMapsLink = "https://maps.app.goo.gl/vR7qqWs2wKrhRVQu5";

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="mb-4">
            <SplitText 
              tag="h2" 
              text="Our Venue" 
              className="text-5xl font-bold text-slate-900" 
              splitType="words" 
            />
          </div>
          <div className="text-lg text-slate-600 max-w-3xl mx-auto">
            <SplitText 
              text="Join us at the College of Engineering, Pathanapuram for an unforgettable experience."
              splitType="words" 
              delay={20} 
            />
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="w-full h-64 md:h-96">
             <iframe
                src={mapUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map location of College of Engineering, Pathanapuram"
            ></iframe>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-slate-800">College of Engineering, Pathanapuram</h3>
            <p className="text-slate-500 mt-2">Elikkattoor, Kerala 689695, India</p>
            <a 
              href={googleMapsLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-green-500/30"
            >
              <LocationIcon className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
