"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import CaseTicker from "./CaseTicker";

const projects = [
  { name: "Hourglass", category: "DTC Skincare", result: "+150% ROAS" },
  { name: "Relief Co.", category: "Wellness", result: "Scaled to $50k/mo" },
  { name: "Vitruvia", category: "Fitness App", result: "30% Lower CAC" },
  { name: "Arcadia", category: "SaaS", result: "2x Lead Volume" },
  { name: "PIF Labs", category: "Web3", result: "Sold Out Launch" },
  { name: "Edvo", category: "Productivity", result: "Series A Growth" },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4">Selected Work</h2>
            <p className="text-white/60 max-w-md">Brands we&apos;ve helped scale through meticulous strategy and creative execution.</p>
          </div>
        </div>
        
        {/* Ticker Banner */}
        <div className="mb-12">
           <CaseTicker />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card group relative h-[300px] border border-white/10 bg-dark-card rounded-2xl p-8 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-gold/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <span className="text-xs font-mono text-gold mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">{project.name}</h3>
              </div>

              <div className="relative z-10 border-t border-white/10 pt-4 mt-auto">
                <p className="text-white/50 text-sm uppercase tracking-wider">Result</p>
                <p className="text-xl font-medium text-white group-hover:text-gold transition-colors">{project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
