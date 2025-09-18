
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What is Hacktopia?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A launchpad for student innovators to tackle the challenges that matter most to them.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">The Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Students face unique challenges every day, from academic hurdles to campus life complexities. Hacktopia is a one-day intensive hackathon where you, the students, identify a pressing problem within your community and build a tangible solution from scratch.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it's an app to streamline study groups, a platform for mental wellness, or a tool to reduce campus waste, we want to see your brilliant ideas come to life. Bring your creativity, coding skills, and collaborative spirit!
            </p>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/hackathon/600/400" 
              alt="Students collaborating" 
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
