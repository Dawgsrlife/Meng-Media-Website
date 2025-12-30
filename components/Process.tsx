"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const steps = [
  { title: "Audit & Strategy", desc: "We deep dive into your current funnel, finding the leaks and opportunities." },
  { title: "Creative Production", desc: "We produce high-volume, high-quality creatives designed to stop the scroll." },
  { title: "Media Buying", desc: "We launch, test, and optimize campaigns daily to ensure maximum ROAS." },
  { title: "Scale & Optimize", desc: "We double down on what works and cut what doesn&apos;t. Simple." }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".process-step", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section id="process" ref={containerRef} className="py-24 px-6 md:px-12 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-glow opacity-20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-16 text-center">How We Win</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="process-step relative p-6 border-l border-gold/20 hover:border-gold/60 transition-colors duration-300 bg-white/5 backdrop-blur-sm rounded-r-xl">
              <span className="text-6xl font-serif text-gold/20 absolute -top-4 right-4">{`0${i + 1}`}</span>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
