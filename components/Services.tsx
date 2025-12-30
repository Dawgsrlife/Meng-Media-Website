"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { IoRocket, IoGlobe, IoVideocam, IoAnalytics } from "react-icons/io5";

const services = [
  {
    title: "Paid Social & Search",
    description: "Data-driven campaigns that convert cold traffic into loyal customers. We manage Facebook, Instagram, TikTok, and Google Ads.",
    icon: <IoRocket className="w-8 h-8 text-gold" />,
    className: "md:col-span-2"
  },
  {
    title: "High-Converting Landing Pages",
    description: "Custom-coded or builder-based pages designed specifically for your offers, maximizing ROAS.",
    icon: <IoGlobe className="w-8 h-8 text-gold" />,
    className: "md:col-span-1"
  },
  {
    title: "Creative Strategy & Production",
    description: "Scroll-stopping UGC and motion graphics that resonate with your target audience.",
    icon: <IoVideocam className="w-8 h-8 text-gold" />,
    className: "md:col-span-1"
  },
  {
    title: "Full-Funnel Analytics",
    description: "Transparent reporting and attribution modeling so you know exactly where your budget is going.",
    icon: <IoAnalytics className="w-8 h-8 text-gold" />,
    className: "md:col-span-2"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="py-24 px-6 md:px-12 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-serif italic text-white mb-4">Our Expertise</h2>
          <div className="w-24 h-1 bg-gold rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={cn(
                "service-card group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300",
                service.className
              )}
            >
              <div className="mb-6 p-4 rounded-2xl bg-black/50 w-fit border border-gold/20 group-hover:border-gold/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
