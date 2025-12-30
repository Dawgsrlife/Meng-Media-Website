'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Placeholder for Lottie since we don't have the JSONs
const LottiePlaceholder = () => (
  <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center animate-pulse border border-white/10">
    <span className="text-gold/50 font-bold font-serif italic">Loading...</span>
  </div>
);

const bentoData = [
  { title: 'Website', text: 'Build your dream site...', stat: '30% site conversions', lottie: '/Bento-01opt-1.json' },
  { title: 'Booking & Sales', text: 'Sell tickets, packages...', stat: '20% basket spend', lottie: '/Bento-2opt-1.json' },
  { title: 'Payments & POS', text: 'Power every transaction...', stat: 'Faster settlement', lottie: '/Bento-3opt-1.json' },
  { title: 'Marketing & CRM', text: 'Grow your audience...', stat: '2x repeat bookings', lottie: '/Bento-4opt-1.json' },
  { title: 'Data & Operations', text: 'Streamline ops...', stat: '50% time saved', lottie: '/Bento-5opt-1.json' },
  { title: 'Support', text: '24/7 Expert help...', stat: '5min response time', lottie: '/Bento-6opt-1.json' },
];

export default function EasolBento() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.js-bento-card', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section--bento bg-black py-20 relative overflow-hidden">
      {/* Subtle Gold Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="content max-w-7xl mx-auto px-8 relative z-10">
        <div className="copy text-center mb-20">
          <h2 className="bodyfont text-4xl md:text-6xl font-serif italic text-white mb-6">Your All-in-One Platform</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">The best in class platform for your experience business end to end...</p>
        </div>

        <div className="section--bento-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bentoData.slice(0, 6).map((card, i) => (
            <article 
              key={i} 
              className={`section--bentocard js-bento-card relative group ${i === activeTab ? 'scale-[1.02]' : ''} transition-all duration-500`}
              onClick={() => setActiveTab(i)}
            >
              <div className={`section--bentocard-content p-8 md:p-12 h-full bg-dark-card rounded-2xl border transition-all cursor-pointer flex flex-col ${i === activeTab ? 'border-gold/60 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-white/10 hover:border-gold/30'}`}>
                <div className="section--bentocard-media mb-6">
                  <div className="section--bentocard-lottie h-48 w-full bg-black/50 rounded-lg flex items-center justify-center border border-white/5 group-hover:border-gold/20 transition-colors">
                     {/* Use icon or image here instead of placeholder */}
                     <span className="text-gold font-serif italic text-2xl opacity-50 group-hover:opacity-100 transition-opacity">{card.title}</span>
                  </div>
                </div>
                <div className="section--bentocard-main flex-grow">
                  <h3 className="section--bentocard-title text-2xl md:text-3xl font-serif italic text-white mb-4 group-hover:text-gold transition-colors">{card.title}</h3>
                  <p className="section--bentocard-text text-gray-400 mb-8 leading-relaxed font-light">{card.text}</p>
                  <div className="section--bentocard-stats flex gap-4 mb-8">
                    <div className="section--bentocard-stat flex items-center">
                      <span className="section--bentocard-stat-number text-2xl font-bold text-white font-serif">{card.stat}</span>
                    </div>
                  </div>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="primary inline-flex items-center text-gold font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform cursor-pointer">
                    <span>Explore platform</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom tabs */}
        <ul className="section--bentotabs flex flex-wrap justify-center gap-4 mt-16">
          {bentoData.slice(0, 6).map((card, i) => (
            <li 
              key={i}
              className={`section--bentotab px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs cursor-pointer transition-all border ${i === activeTab ? 'bg-gold text-black border-gold scale-105' : 'bg-transparent text-gray-500 border-transparent hover:border-white/20 hover:text-white'}`}
              onClick={() => setActiveTab(i)}
            >
              {card.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
