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

  // Placeholder logos (using text for now as requested, or generic shapes)
  // In a real scenario, these would be actual client logo images.
  const logos = Array(10).fill(null).map((_, i) => ({
     id: i,
     name: `Client ${i + 1}`
  }));

  return (
    <section className="bg-black py-12 border-y border-white/10 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap" ref={tickerRef}>
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center mx-6 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
             {/* Replace with actual Image component when assets are available */}
             <span className="text-2xl font-bold font-serif italic tracking-widest text-gray-400">
                {logo.name}
             </span>
          </div>
        ))}
      </div>
    </section>
  );
}
