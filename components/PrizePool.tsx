import React from "react";
import TrophyIcon from './icons/TrophyIcon';
import MedalIcon from './icons/MedalIcon';
import AwardIcon from './icons/AwardIcon';
import SparklesIcon from './icons/SparklesIcon';

// Data for the prize cards to keep the JSX clean and scalable
const prizeData = [
  {
    icon: TrophyIcon,
    rank: "Winner",
    amount: "₹3,000",
    place: "1st Place",
    description: "First Place Champion",
    styles: {
      bgColor: "bg-amber-50",
      badgeColor: "bg-amber-100 text-amber-800",
      borderColor: "border-amber-300",
      textColor: "text-amber-600",
      shadow: "shadow-amber-500/30",
      iconBg: "bg-amber-100",
    },
  },
  {
    icon: MedalIcon,
    rank: "Runner-up",
    amount: "₹1,500",
    place: "2nd Place",
    description: "Second Place Finalist",
    styles: {
      bgColor: "bg-slate-50",
      badgeColor: "bg-slate-200 text-slate-800",
      borderColor: "border-slate-300",
      textColor: "text-slate-600",
      shadow: "shadow-slate-500/20",
      iconBg: "bg-slate-200",
    },
  },
  {
    icon: AwardIcon,
    rank: "Third Place",
    amount: "₹500",
    place: "3rd Place",
    description: "Bronze Medal Winner",
    styles: {
      bgColor: "bg-orange-50",
      badgeColor: "bg-orange-200 text-orange-800",
      borderColor: "border-orange-300",
      textColor: "text-orange-700",
      shadow: "shadow-orange-500/20",
      iconBg: "bg-orange-200",
    },
  },
];

const PrizePool = () => {
  return (
    <section id="prizepool" className="py-20 sm:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 mb-4">
            <SparklesIcon className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              Competition Rewards
            </span>
            <SparklesIcon className="h-4 w-4 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Prize Pool
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Compete for amazing cash prizes and recognition. Total prize pool of
            ₹5,000 awaits the top performers.
          </p>
        </div>

        {/* Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {prizeData.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div
                key={prize.place}
                className={`relative p-8 text-center rounded-3xl border transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2
                  ${prize.styles.bgColor}
                  ${prize.styles.borderColor}
                  ${
                    index === 0 ? "md:scale-110 md:z-10 shadow-xl" : "shadow-lg"
                  }
                  hover:${prize.styles.shadow}
                `}
              >
                {/* Faded icon in the background */}
                <Icon
                  className={`absolute top-4 right-4 h-10 w-10 ${prize.styles.textColor} opacity-10`}
                />

                {/* Main Icon */}
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${prize.styles.iconBg} mb-6`}
                >
                  <Icon className={`h-10 w-10 ${prize.styles.textColor}`} />
                </div>

                {/* Rank Badge */}
                <span
                  className={`inline-block px-4 py-1 text-sm font-semibold rounded-full mb-4 ${prize.styles.badgeColor}`}
                >
                  {prize.rank}
                </span>

                {/* Prize Amount */}
                <h3
                  className={`text-5xl font-bold mb-2 ${prize.styles.textColor}`}
                >
                  {prize.amount}
                </h3>

                {/* Place */}
                <p className="text-xl font-semibold text-slate-800">
                  {prize.place}
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  {prize.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Total Prize Pool Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-green-50 border border-green-200 px-6 py-3 shadow-md">
            <TrophyIcon className="h-6 w-6 text-green-500" />
            <p className="text-base font-medium text-slate-600">
              Total Prize Pool:
              <span className="ml-2 text-2xl font-bold text-green-600">
                ₹5,000
              </span>
            </p>
            <TrophyIcon className="h-6 w-6 text-green-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;