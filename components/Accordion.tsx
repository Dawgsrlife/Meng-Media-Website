'use client';
import { useState } from 'react';
import Image from 'next/image';

const tabs = [
  {
    name: 'Support',
    title: 'Turn support into a revenue driver',
    problem: 'High support volumes overwhelm teams, causing slow responses and lost revenue.',
    solution: 'Train your AI Support Agent to resolve enquiries, updates bookings and surface hidden revenue automatically.',
    image: '/website.png' // Placeholder
  },
  {
    name: 'Sales',
    title: 'Never miss a high-intent lead again',
    problem: 'Manual sales processes slow responses and let high-intent leads slip away.',
    solution: 'Your AI Sales Agent responds instantly, drafts proposals and drives conversions end-to-end.',
    image: '/booking-sales.png' // Placeholder
  }
];

export default function EasolAccordion() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section--accordian bg-black py-32 bodyfont">
      <div className="content max-w-7xl mx-auto px-8">
        <div className="accordian-holder max-w-6xl mx-auto">
          <div className="media-tabs grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Tabs */}
            <ul className="tabs space-y-8">
              {tabs.map((tab, i) => (
                <li 
                  key={i} 
                  className={`tab cursor-pointer transition-all duration-500 ${activeTab === i ? 'scale-105 opacity-100' : 'opacity-70 hover:opacity-90'}`}
                  onClick={() => setActiveTab(i)}
                >
                  <span className="tab-name text-3xl font-bold text-white block mb-2">{tab.name}</span>
                  <div className={`tab-description overflow-hidden transition-all duration-500 ${activeTab === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <h3 className="text-2xl font-bold text-white mb-4">{tab.title}</h3>
                    <div className="wysiwyg mb-6">
                      <div className="flex items-start gap-3 mb-2">
                        <svg className="w-6 h-6 flex-shrink-0 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <circle cx="12" cy="12" r="10" />
                           <path d="M15 9l-6 6M9 9l6 6" />
                        </svg>
                        <p className="text-gray-300">{tab.problem}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mb-4">
                        <svg className="w-6 h-6 flex-shrink-0 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <circle cx="12" cy="12" r="10" />
                           <path d="M9 12l2 2 4-4" />
                        </svg>
                        <p className="text-white font-semibold">{tab.solution}</p>
                    </div>
                  </div>
                  <div className="progress-holder w-full h-1 bg-white/20 mt-6 rounded-full overflow-hidden">
                    <span className={`progress-bar block h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ${activeTab === i ? 'w-full' : 'w-0'}`} />
                  </div>
                </li>
              ))}
            </ul>

            {/* Images */}
            <div className="tab-media relative h-[500px]">
              {tabs.map((tab, i) => (
                 <div 
                    key={i}
                    className={`media-holder absolute inset-0 transition-opacity duration-500 ${activeTab === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                 >
                    <figure className="image portrait w-full h-full rounded-3xl overflow-hidden relative">
                      <Image 
                        src={tab.image}
                        alt={tab.name}
                        fill 
                        className="object-cover"
                      />
                    </figure>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
