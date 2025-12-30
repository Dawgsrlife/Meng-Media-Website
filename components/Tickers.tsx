'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Tickers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1: Left
      gsap.to('.ticker-1', {
        xPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top'
        }
      });

      // Row 2: Right
      gsap.fromTo('.ticker-2', 
        { xPercent: -20 },
        {
          xPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: 1,
            start: 'top bottom',
            end: 'bottom top'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const items = [
    { type: 'text', content: 'MARKETING' },
    { type: 'image', src: '/hero-1.png' },
    { type: 'text', content: 'STRATEGY' },
    { type: 'image', src: '/hero-2.png' },
    { type: 'text', content: 'GROWTH' },
    { type: 'image', src: '/hero-3.png' },
     { type: 'text', content: 'SALES' },
    { type: 'image', src: '/hero-4.png' },
  ];

  return (
    <section ref={containerRef} className="bg-black text-white py-24 overflow-hidden border-y border-white/10">
       {/* Row 1 */}
       <div className="ticker-1 flex gap-12 whitespace-nowrap mb-12 w-max">
          {[...items, ...items, ...items, ...items].map((item, i) => (
             <div key={i} className="flex items-center gap-12">
                {item.type === 'text' ? (
                   <span className="text-6xl md:text-8xl font-serif italic text-white/20">{item.content}</span>
                ) : (
                   <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-full overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all">
                      <Image src={item.src!} alt="Ticker" fill className="object-cover" />
                   </div>
                )}
             </div>
          ))}
       </div>

       {/* Row 2 */}
       <div className="ticker-2 flex gap-12 whitespace-nowrap w-max">
          {[...items, ...items, ...items, ...items].reverse().map((item, i) => (
             <div key={i} className="flex items-center gap-12">
                {item.type === 'text' ? (
                   <span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-gold/80">{item.content}</span>
                ) : (
                   <div className="relative w-64 h-32 md:w-80 md:h-48 rounded-lg overflow-hidden border border-gold/20 grayscale hover:grayscale-0 transition-all">
                      <Image src={item.src!} alt="Ticker" fill className="object-cover" />
                   </div>
                )}
             </div>
          ))}
       </div>
    </section>
  );
}
