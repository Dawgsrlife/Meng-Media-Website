'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big Splash Animation
      gsap.fromTo(splashRef.current, 
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="bg-gradient-to-b from-[#020204] to-black py-32 px-8 text-white overflow-hidden relative">
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spotlight on CTA topography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold/5 blur-[120px] rounded-full" />
        
        {/* super faint grid echoing Features/Hero */}
        <div className="absolute inset-x-0 top-0 bottom-[100px] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Companion glow bar - connector beam */}
        <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />
        
        <h2 className="text-6xl md:text-9xl font-serif italic mb-12 text-white/90 drop-shadow-2xl">get started today</h2>
        
        <div ref={splashRef} className="relative mb-16 group">
           {/* Micro-orbital elements around the card */}
           <div className="absolute -top-12 -left-12 w-24 h-24 border border-gold/10 rounded-full animate-pulse-slow" />
           <div className="absolute -bottom-12 -right-12 w-32 h-32 border border-white/5 rounded-full" />
           <div className="absolute top-1/2 -right-8 w-1 h-1 bg-gold/40 rounded-full" />

           <div className="relative h-96 w-full border border-white/10 rounded-3xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <Image src="/cta/cta-final.jpg" alt="Get Started" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              
              {/* Overlay Text */}
              <a href="https://calendly.com/alexandermenginquiries/30min" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors cursor-pointer z-10">
                 <span className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white drop-shadow-lg font-sans">
                    Book Your Call
                 </span>
              </a>
           </div>
        </div>

        <div className="relative inline-block group">
           <a href="https://calendly.com/alexandermenginquiries/30min" target="_blank" rel="noopener noreferrer" className="relative inline-block bg-white text-black px-16 py-6 text-2xl font-bold rounded-full overflow-hidden transition-all transform group-hover:scale-105 border border-white hover:border-gold group-hover:bg-gold group-hover:text-white">
             <span className="relative z-10 uppercase tracking-widest">Book a Call</span>
           </a>
           <p className="mt-6 text-gold/80 text-sm uppercase tracking-widest font-serif italic">
              Spaces for Q1 2026 are strictly limited
           </p>
        </div>
      </div>
    </section>
  );
}
