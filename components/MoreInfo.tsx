import React from 'react';
import SplitText from './SplitText';

const MoreInfo: React.FC = () => {
    return (
        <section id="moreinfo" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="mb-4">
                        <SplitText 
                          tag="h2" 
                          text="More Information" 
                          className="text-5xl font-bold text-slate-900" 
                          splitType="words" 
                        />
                    </div>
                </div>
                
                <div className="space-y-12 max-w-4xl mx-auto">
                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
                        <h3 className="text-2xl font-bold text-green-500 mb-4">1. Registration Procedure</h3>
                        <div className="text-slate-500 space-y-2">
                            <p>All participants must register through the official link provided. Each team must submit their team’s name, member details etc.</p>
                            <p>Each team is required to pay a registration fee of ₹300, which includes access to the hackathon and participation.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
                        <h3 className="text-2xl font-bold text-green-500 mb-4">2. Communication</h3>
                        <div className="text-slate-500 space-y-2">
                            <p>All official announcements will be communicated via whatsapp group to the registered team members.</p>
                            <p>For queries, contact:<br/>
                            Devika : <a href="tel:8138950611" className="hover:text-green-600">8138950611</a><br/>
                            Aswin C S : <a href="tel:7736011978" className="hover:text-green-600">7736011978</a></p>
                        </div>
                    </div>

                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
                        <h3 className="text-2xl font-bold text-green-500 mb-4">3. Transport</h3>
                        <div className="text-slate-500 space-y-2">
                            <p>Local shuttle buses (college buses) will be available for pick-up and drop to the nearby bus stop.</p>
                        </div>
                    </div>

                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
                        <h3 className="text-2xl font-bold text-green-500 mb-4">4. General</h3>
                        <ul className="list-disc list-inside text-slate-500 space-y-2">
                            <li>Safety and security will be ensured throughout the 15 hours.</li>
                            <li>Refreshments will be provided at regular intervals.</li>
                            <li>Cleanliness and respectful use of the venue are expected.</li>
                            <li>Photos and videos may be taken for promotional purposes.</li>
                            <li>Most importantly, have fun and build something impactful!</li>
                        </ul>
                    </div>
                    
                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
                        <h3 className="text-2xl font-bold text-green-500 mb-4">5. Time Limits</h3>
                        <ul className="list-disc list-inside text-slate-500 space-y-2">
                            <li>The hackathon will run for exactly 15 hours.</li>
                            <li>Reporting Time: 3:00 PM, Day 1</li>
                            <li>Start Time: 4:00 PM, Day 1</li>
                            <li>End Time: 7:00 AM, Day 2</li>
                            <li>All teams will be judged during the first round starting at 5:00 AM on Day 2, followed by a second round of evaluation.</li>
                            <li>Final results will be announced around 8:00 AM.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-16 p-6 bg-white/50 rounded-2xl max-w-2xl mx-auto border border-green-500/50">
                    <h3 className="text-2xl font-bold text-green-500">Deadline</h3>
                    <p className="text-slate-600 mt-2 text-lg">Registrations will close by 23rd September 2025.</p>
                </div>
            </div>
        </section>
    );
};

export default MoreInfo;