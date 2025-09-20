import React, { useState } from 'react';
import type { FAQItem } from '../types';
import SplitText from './SplitText';

const faqData: FAQItem[] = [
  { question: 'Who can participate in Hacktopia?', answer: 'The hackathon is open to all polytechnic students from any university. You don\'t have to be from PEC to participate.' },
  { question: 'Do I need a team to register?', answer: 'You can register as an individual or as a team of up to 2 or 3 members.' },
  { question: 'What is the cost to participate?', answer: 'Participation fee for a team is Rs. 300, and includes transportation, meals, bonefire experience, snacks, and swag.' },
  { question: 'What should I bring to the event?', answer: 'You should bring atleast 1 laptop. Also include chargers, any necessary hardware for your project, and a valid student ID. Since this is an overnight event, you might also want to bring essentials like water or medicines.' },
  { question: 'What are the judging criteria?', answer: 'Projects will be judged based on technical complexity, creativity, design, impact on the student community, and the quality of the final presentation.' },
];

const FAQAccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void; index: number }> = ({ item, isOpen, onClick, index }) => {
    return (
        <div className="border-b border-slate-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-slate-800"
                onClick={onClick}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
            >
                <span className="pr-4">{item.question}</span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-slate-500">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <div className="mb-4">
                <SplitText 
                    tag="h2" 
                    text="Frequently Asked Questions" 
                    className="text-5xl font-bold text-slate-900" 
                    splitType="words" 
                />
            </div>
            <div className="text-lg text-slate-600">
                <SplitText 
                    text="Got questions? We've got answers." 
                    splitType="words" 
                    delay={20}
                />
            </div>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQAccordionItem 
                key={index}
                index={index}
                item={item} 
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;