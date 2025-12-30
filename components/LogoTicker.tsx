'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export default function LogoTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(tickerRef.current, {
        xPercent: -50,
        duration: 30,
        ease: 'none',
        repeat: -1
      });
    }, tickerRef);
    return () => ctx.revert();
  }, []);

  // Ticker of CTA text
  // Removed placeholder clients

  return (
    <section className="bg-black py-12 border-y border-white/10 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap" ref={tickerRef}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center mx-8 group cursor-pointer">
             <span className="text-3xl md:text-4xl font-serif italic font-bold tracking-wide text-white/30 group-hover:text-gold transition-colors duration-300">
                BECOME OUR NEXT CASE STUDY
             </span>
             <span className="text-gold/30 ml-8 text-2xl group-hover:text-gold transition-colors duration-300">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
