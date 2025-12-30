'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function AllInOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
       const cards = cardsRef.current.filter(Boolean);
       
       // Shuffle animation loop
       const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
       
       cards.forEach((card, i) => {
          // Random movement - gentler for elegance
          tl.to(card, {
             x: () => Math.random() * 20 - 10,
             y: () => Math.random() * 20 - 10,
             rotation: () => Math.random() * 4 - 2,
             duration: 1.5,
             ease: 'sine.inOut'
          }, i * 0.2);
       });
       
       // Return to center
       tl.to(cards, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: 'power2.out'
       });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="py-32 px-4 overflow-hidden relative bg-black"
    >
      <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
         <h2 className="text-6xl md:text-8xl font-serif italic text-white mb-8">Your All-in-One <br/> Platform</h2>
         <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
            Everything you need to scale your experience business.
         </p>
      </div>

      <div className="relative h-[600px] max-w-5xl mx-auto flex items-center justify-center">
         {/* Central Hub */}
         <div className="absolute z-20 w-64 h-64 bg-black border border-gold/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.2)]">
            <span className="text-3xl font-serif italic font-bold text-white tracking-widest text-center">MENG<br/>MEDIA</span>
         </div>

         {/* Floating Cards */}
         {[1, 2, 3, 4, 5].map((num, i) => {
            // Initial positions in a circle
            const angle = (i / 5) * Math.PI * 2;
            const radius = 250;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
               <div 
                  key={i}
                  ref={el => { cardsRef.current[i] = el }}
                  className="absolute w-40 h-24 md:w-48 md:h-32 bg-dark-card border border-white/10 rounded-xl overflow-hidden shadow-2xl hover:border-gold/40 transition-colors duration-500"
                  style={{ 
                     transform: `translate(${x}px, ${y}px)`,
                     zIndex: 10
                  }}
               >
                  <Image src={`/hero-${num}.png`} alt="Feature" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
               </div>
            );
         })}
      </div>
      
      <div className="text-center mt-12 relative z-10">
         <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 inline-block bg-white text-black border border-white px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-gold hover:border-gold hover:text-white transition-all hover:scale-105 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.1)]"
         >
            Start Scaling Today
         </a>
      </div>
    </section>
  );
}
