import React from 'react';
import SplitText from './SplitText';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SplitText
            tag="h2"
            text="About CodeFest 2024"
            className="text-5xl font-extrabold text-gray-800"
            splitType="words"
            triggerOnScroll
          />
        </div>
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-600 space-y-6">
          <p>
            CodeFest 2024 is a premier 48-hour hackathon designed to bring together the brightest minds in technology. Developers, designers, and innovators from around the globe will converge to tackle real-world challenges, build groundbreaking projects, and push the boundaries of what's possible with code.
          </p>
          <p>
            Whether you're a seasoned professional or a student just starting your journey, CodeFest offers an unparalleled opportunity to learn, network with industry leaders, and showcase your skills. Join us for a weekend of intense coding, creative problem-solving, and unforgettable experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;