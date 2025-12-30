"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".contact-reveal", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 md:px-12 bg-gradient-to-b from-dark-bg to-black text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <h2 className="contact-reveal text-5xl md:text-7xl font-serif italic text-white leading-tight">
          Ready to <span className="text-gold">Scale?</span>
        </h2>
        
        <p className="contact-reveal text-white/60 text-lg md:text-xl max-w-2xl">
          We only work with brands we know we can help. Book a free strategy call to see if we&apos;re a match.
        </p>

        <a 
          href="https://calendly.com/alexandermenginquiries/30min" 
          target="_blank"
          rel="noopener noreferrer"
          className="contact-reveal group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black transition-all duration-200 bg-gold font-oswald uppercase tracking-widest hover:bg-white hover:scale-105 rounded-full mt-4"
        >
          Book Your Strategy Call
          <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>

        <div className="contact-reveal mt-12 flex flex-col md:flex-row gap-8 text-white/40 text-sm">
          <p>Direct Email: <a href="mailto:alexandermenginquiries@gmail.com" className="hover:text-gold transition-colors">alexandermenginquiries@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}
