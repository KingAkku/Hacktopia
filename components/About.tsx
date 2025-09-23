import React from 'react';
import SplitText from './SplitText';
import LightbulbIcon from './icons/LightbulbIcon';
import UsersIcon from './icons/UsersIcon';
import ClockIcon from './icons/ClockIcon';
import StarIcon from './icons/StarIcon';

const About: React.FC = () => {
  const features = [
    {
      icon: <LightbulbIcon className="w-8 h-8 text-green-500" />,
      title: 'Unleash Your Ideas',
      description: 'With no thematic boundaries, you have the freedom to tackle real-world challenges that matter to you.',
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-green-500" />,
      title: 'Collaborate & Conquer',
      description: 'Form teams of 2-3 passionate polytechnic students and build powerful prototypes together.',
    },
    {
      icon: <ClockIcon className="w-8 h-8 text-green-500" />,
      title: '15-Hour Innovation Sprint',
      description: 'An overnight marathon to transform your concepts into tangible solutions and showcase your skills.',
    },
    {
      icon: <StarIcon className="w-8 h-8 text-green-500" />,
      title: 'Build for Impact',
      description: 'Compete for recognition and prizes in a dynamic environment built for innovators.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <div className="mb-4">
                <SplitText 
                    tag="h2"
                    text="What is Hacktopia?" 
                    className="text-5xl font-bold text-slate-900"
                    splitType="words"
                />
            </div>
            <div className="text-lg text-slate-600 max-w-3xl mx-auto">
                <SplitText 
                    text="A launchpad for student innovators to tackle the challenges that matter most to them."
                    splitType="words"
                    delay={20}
                />
            </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="p-8 md:p-12 bg-white rounded-2xl shadow-xl border border-slate-200 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="mb-6 text-center md:text-left">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent inline-block">
                    About Hacktopia
                </h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-10 text-center md:text-left max-w-3xl">
                Hosted by the Department of Computer Science and Engineering at the College of Engineering Pathanapuram, Hacktopia is a premier 15-hour overnight hackathon designed to ignite student innovation. It's more than just a competition; it's a collaborative marathon of creativity, coding, and problem-solving.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1 h-12 w-12 rounded-full bg-green-100/70 flex items-center justify-center border border-green-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">{feature.title}</h4>
                    <p className="text-slate-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
