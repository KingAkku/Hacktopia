import React from 'react';
import SplitText from './SplitText';
import ShinyText from './ShinyText';
import TrophyIcon from './icons/TrophyIcon';

const prizes = [
  {
    place: '1st Place',
    award: '$10,000',
    description: 'Plus the coveted CodeFest trophy and a suite of premium software licenses.',
    color: 'bg-yellow-400',
  },
  {
    place: '2nd Place',
    award: '$5,000',
    description: 'And a collection of high-end hardware for your development setup.',
    color: 'bg-gray-300',
  },
  {
    place: '3rd Place',
    award: '$2,500',
    description: 'And a generous amount of cloud computing credits to power your next project.',
    color: 'bg-yellow-600',
  },
  {
    place: 'Best Theme Hack',
    award: 'Special Prize Pack',
    description: 'Awarded to the team with the most innovative solution for one of our themes.',
    color: 'bg-green-400',
  },
];

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SplitText
            tag="h2"
            text="Prizes & Recognition"
            className="text-5xl font-extrabold text-gray-800"
            splitType="words"
            triggerOnScroll
          />
        </div>
        <div className="grid grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="mb-4">
                <TrophyIcon className={`w-16 h-16 mx-auto ${prize.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{prize.place}</h3>
              <div className="text-4xl font-extrabold mb-4">
                <ShinyText className="bg-gradient-to-r from-green-500 to-teal-500">{prize.award}</ShinyText>
              </div>
              <p className="text-gray-600 flex-grow">{prize.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;