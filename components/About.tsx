import React from 'react';
import SplitText from './SplitText';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <div className="mb-4">
                <SplitText 
                    tag="h2"
                    text="What is Hacktopia?" 
                    className="text-5xl font-bold text-gray-100"
                    splitType="words"
                />
            </div>
            <div className="text-lg text-gray-300 max-w-3xl mx-auto">
                <SplitText 
                    text="A launchpad for student innovators to tackle the challenges that matter most to them."
                    splitType="words"
                    delay={20}
                />
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
            <div className="mb-4">
                <SplitText 
                    tag="h3"
                    text="The Mission"
                    className="text-3xl font-bold text-violet-400"
                    textAlign="left"
                    splitType="words"
                />
            </div>
            <div className="text-gray-400 leading-relaxed mb-4">
                <SplitText
                    text="Students face unique challenges every day, from academic hurdles to campus life complexities. Hacktopia is a 15-hour overnight hackathon where you, the students, identify a pressing problem within your community and build a tangible solution from scratch."
                    textAlign="left"
                    splitType="words"
                    delay={10}
                    tag="p"
                />
            </div>
            <div className="text-gray-400 leading-relaxed">
                 <SplitText
                    text="Whether it's an app to streamline study groups, a platform for mental wellness, or a tool to reduce campus waste, we want to see your brilliant ideas come to life. Bring your creativity, coding skills, and collaborative spirit!"
                    textAlign="left"
                    splitType="words"
                    delay={10}
                    tag="p"
                />
            </div>
          </div>
          <div>
            <img 
              src="https://placehold.co/600x400/334155/e2e8f0?text=Collaboration" 
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