import React from 'react';
import SplitText from './SplitText';

const Guidelines: React.FC = () => {
  return (
    <section id="guidelines" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <SplitText 
              tag="h2" 
              text="Guidelines" 
              className="text-5xl font-bold text-gray-100" 
              splitType="words" 
            />
          </div>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 transition-all duration-300 hover:border-violet-700 hover:shadow-2xl hover:shadow-violet-500/10">
            <h3 className="text-2xl font-bold text-violet-400 mb-4">1. Team Formation</h3>
            <blockquote className="border-l-4 border-violet-500/50 pl-4 text-gray-400 space-y-2">
              <p>Each team must consist of a minimum of 2 and a maximum of 3 student members.</p>
              <p>Participants from polytechnic Colleges are eligible.</p>
              <p>No change in team composition is allowed after final registration.</p>
              <p>Intercollege teams are also allowed to participate.</p>
            </blockquote>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 transition-all duration-300 hover:border-violet-700 hover:shadow-2xl hover:shadow-violet-500/10">
            <h3 className="text-2xl font-bold text-violet-400 mb-4">2. Project Scope</h3>
            <blockquote className="border-l-4 border-violet-500/50 pl-4 text-gray-400 space-y-2">
              <p>There is no specific theme for the hackathon, giving teams the freedom to think boldly and creatively.</p>
              <p>Participants are encouraged to develop projects that are innovative, socially relevant, and sustainable. Ideas that aim to solve real-world problems or improve the quality of life will be highly valued. Projects should reflect clear impact, practical scalability, and meaningful usability.</p>
            </blockquote>
          </div>
          
          <div className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 transition-all duration-300 hover:border-violet-700 hover:shadow-2xl hover:shadow-violet-500/10">
            <h3 className="text-2xl font-bold text-violet-400 mb-4">3. What to Carry: Participant Essentials</h3>
            <blockquote className="border-l-4 border-violet-500/50 pl-4 text-gray-400 space-y-2">
              <p>Participants are advised to carry all necessary personal and technical essentials for a smooth experience. This includes chargers, and adapters; laptops, mouse, and USB devices; and personal items such as water bottles and hygiene supplies. All participants must also carry their college ID card, which is mandatory for entry.</p>
            </blockquote>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 transition-all duration-300 hover:border-violet-700 hover:shadow-2xl hover:shadow-violet-500/10">
            <h3 className="text-2xl font-bold text-violet-400 mb-4">4. Judging Criteria</h3>
            <blockquote className="border-l-4 border-violet-500/50 pl-4 text-gray-400 space-y-2">
              <p>Projects will be evaluated based on five key criteria: Innovation and Creativity, Sustainability and Impact, Social Relevance, Functionality and Technical Execution, and Presentation and Communication. Each of these criteria will carry equal weight during the evaluation process to ensure a fair and well-rounded assessment.</p>
            </blockquote>
          </div>

          <div className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 transition-all duration-300 hover:border-violet-700 hover:shadow-2xl hover:shadow-violet-500/10">
            <h3 className="text-2xl font-bold text-violet-400 mb-4">5. Disqualification</h3>
            <blockquote className="border-l-4 border-violet-500/50 pl-4 text-gray-400 space-y-2">
              <p>A team may face disqualification if it violates any of the stated rules, submits plagiarized content, or displays inappropriate behaviour toward fellow participants or organizers.</p>
            </blockquote>
          </div>
        </div>

        <div className="text-center mt-16">
            <a href="#" className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-violet-500/30">
              Download Guideline Guidebook
            </a>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
