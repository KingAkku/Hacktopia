import React, { useState } from 'react';
import { FAQItem } from '../types';
import SplitText from './SplitText';

const faqData: FAQItem[] = [
  {
    question: 'Who can participate in CodeFest 2024?',
    answer: 'Anyone with a passion for technology is welcome! This includes students, professionals, designers, and developers. You can participate solo or in a team of up to 4 members.',
  },
  {
    question: 'Is the event free?',
    answer: 'Yes, CodeFest 2024 is completely free for all accepted participants. We provide the venue, food, drinks, and swag thanks to our amazing sponsors.',
  },
  {
    question: 'What should I bring?',
    answer: 'You should bring your laptop, charger, any hardware you might need for your project, and a positive attitude! We recommend comfortable clothes and a sleeping bag if you plan to code through the night.',
  },
  {
    question: "I don't have a team. Can I still participate?",
    answer: "Absolutely! We'll have a team formation event right after the opening ceremony. You can pitch your ideas and meet other participants looking for a team.",
  },
  {
    question: 'What are the judging criteria?',
    answer: 'Projects will be judged based on technical complexity, creativity, design, and real-world applicability. A detailed rubric will be provided at the beginning of the event.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SplitText
            tag="h2"
            text="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
            splitType="words"
            triggerOnScroll
          />
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <p className="pb-6 text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
