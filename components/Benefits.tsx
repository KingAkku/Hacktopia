import React from 'react';
import SplitText from './SplitText';
import ShinyText from './ShinyText';
import CertificateIcon from './icons/CertificateIcon';
import StarIcon from './icons/StarIcon';
import ActivityPointIcon from './icons/ActivityPointIcon';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <CertificateIcon className="w-10 h-10 text-green-500" />,
      title: 'Participation Certificate',
      text: 'For all registered participants.',
    },
    {
      icon: <StarIcon className="w-10 h-10 text-yellow-500" />,
      title: 'Merit Certificates',
      text: 'For outstanding performers.',
    },
    {
      icon: <ActivityPointIcon className="w-10 h-10 text-teal-500" />,
      title: 'Activity Points',
      text: 'Up to 30 points as per SBTE Kerala regulations.',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <SplitText
              tag="h2"
              text="Benefits of Participation"
              className="text-5xl font-bold text-slate-900"
              splitType="words"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border-t-4 border-green-400 transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-green-500/20">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            <ShinyText>
              A great opportunity to showcase your talent, earn recognition, and boost your academic profile!!
            </ShinyText>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;