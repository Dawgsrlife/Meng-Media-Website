'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

interface HeroItemProps {
  item: {
    id: number;
    label: string;
    image: string;
    xOffset: number;
  };
  index: number;
  smoothMouseX: MotionValue<number>;
  smoothIsWithin: MotionValue<number>;
  isActive: boolean;
  isDimmed: boolean;
}

function HeroCard({ item, index, smoothMouseX, smoothIsWithin, isActive, isDimmed }: HeroItemProps) {
  // Advanced Repulsion: Horizontal push away from cursor
  const pushX = useTransform(
    [smoothMouseX, smoothIsWithin],
    ([mx, sw]) => {
      if (Number(sw) === 0) return 0;
      const dist = Number(mx) - item.xOffset;
      // Repel: push away
      const push = -dist * 200; 
      return Math.max(-80, Math.min(80, push)); 
    }
  );

  // Sideways Facing Tilt: Pivot towards cursor
  const rotateY = useTransform(
    [smoothMouseX, smoothIsWithin],
    ([mx, sw]) => {
      if (Number(sw) === 0) return 0;
      const dist = Number(mx) - item.xOffset;
      // Facing: pivot Y based on distance from mouse
      // If cursor is right (dist > 0), rotateY positive in CSS looks left? 
      // Actually, positive rotateY rotates around Y axis (top to bottom).
      // Screen space: positive Y is down. Positive rotation (right-hand rule): 
      // Thumb down Y, fingers curl. Looking from top: clockwise. 
      // That moves Right side away and Left side towards. Correct for facing RIGHT.
      // Wait, let's re-verify:
      // Positive rotateY = looking right. 
      // If mx > xOffset, dist > 0, we want to look RIGHT. So positive value.
      const angle = dist * 24; 
      return Math.max(-12, Math.min(12, angle));
    }
  );

  let staticTranslate = '';
  if (index === 0) staticTranslate = 'translateX(-12%) translateY(4%)';
  if (index === 1) staticTranslate = 'translateX(-6%) translateY(0)';
  if (index === 2) staticTranslate = 'translateY(-2%) scale(1.02)';
  if (index === 3) staticTranslate = 'translateX(6%) translateY(0)';
  if (index === 4) staticTranslate = 'translateX(12%) translateY(4%)';

  return (
    <motion.div 
      className={`hero-card relative w-44 md:w-52 lg:w-60 flex-shrink-0 flex flex-col gap-4 cursor-default transition-opacity duration-500 ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
      style={{
        transform: staticTranslate,
        zIndex: index === 2 ? 20 : 10,
        x: pushX,
        rotateY: rotateY,
        perspective: 1000
      }}
    >
      <motion.div 
        className={`relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-900 border transition-all duration-300 shadow-[0_28px_60px_rgba(0,0,0,0.75)] ${isActive ? 'border-gold/50 brightness-110 scale-[1.02] shadow-[0_32px_70px_rgba(0,0,0,0.85),inset_0_0_20px_rgba(216,170,69,0.2)]' : 'border-white/10 brightness-100 scale-100'}`}
      >
        <Image 
          src={item.image} 
          alt={item.label} 
          fill 
          className={`object-cover transition-all duration-500 ${isActive ? 'grayscale-0 scale-110' : 'grayscale scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-black/40 pointer-events-none mix-blend-overlay" />
      </motion.div>
      
      <p className={`text-[12px] font-sans font-bold uppercase tracking-[0.24em] transition-colors duration-300 text-center select-none ${
        isActive 
          ? 'text-white' 
          : isDimmed 
            ? 'text-white/20' 
            : 'text-white/60'
      }`}>
        {item.label}
      </p>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [closestCardId, setClosestCardId] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const isWithinHero = useMotionValue(0);

  // Soft springs for clean transition back to default
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothIsWithin = useSpring(isWithinHero, springConfig);

  const heroItems = [
    { id: 1, label: 'WEBSITE', image: '/new-hero/hero-website.jpg', xOffset: -0.25 },
    { id: 2, label: 'BOOKING & SALES', image: '/new-hero/hero-booking.jpg', xOffset: -0.12 },
    { id: 3, label: 'PAYMENTS & POS', image: '/new-hero/hero-payments.jpg', xOffset: 0 },
    { id: 4, label: 'MARKETING & CRM', image: '/new-hero/hero-marketing.jpg', xOffset: 0.12 },
    { id: 5, label: 'DATA & OPERATIONS', image: '/new-hero/hero-data.jpg', xOffset: 0.25 },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardsContainerRef.current?.getBoundingClientRect();
    if (rect) {
      // ONLY trigger when within the vertical bounds of the cards container
      const inY = e.clientY >= rect.top && e.clientY <= rect.bottom;
      
      if (!inY) {
        if (isWithinHero.get() !== 0) {
          isWithinHero.set(0);
          mouseX.set(0);
          setClosestCardId(null);
        }
        return;
      }

      isWithinHero.set(1);
      const width = rect.width;
      const mouseXPos = e.clientX - rect.left;
      const xPct = (mouseXPos / width) - 0.5;
      mouseX.set(xPct);

      let minOrderDist = Infinity;
      let closestId = null;

      heroItems.forEach(item => {
        const dist = Math.abs(xPct - item.xOffset);
        if (dist < minOrderDist) {
          minOrderDist = dist;
          closestId = item.id;
        }
      });
      setClosestCardId(closestId);
    }
  };

  const handleMouseLeave = () => {
    isWithinHero.set(0);
    mouseX.set(0);
    setClosestCardId(null);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-black text-white pt-48 pb-32 px-4 relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent h-[50vh]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,170,69,0.18),transparent_65%)]" />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-gold/5 rounded-full opacity-30" />
      </div>

      <div className="max-w-[90rem] mx-auto w-full relative z-10 text-center">
        <h1 className="text-5xl md:text-8xl font-serif italic text-center mb-20 leading-[0.9] tracking-tight text-white drop-shadow-2xl">
          Architecting <br/> 
          <span className="text-gold-gradient not-italic font-sans font-black tracking-tighter uppercase inline-block px-4">Digital Legacies</span>
        </h1>

        <div 
          ref={cardsContainerRef}
          className="flex flex-nowrap justify-center gap-4 md:gap-8 mb-24 overflow-visible px-4 pb-12 md:pb-0 perspective-1000"
        >
           {heroItems.map((item, i) => (
             <HeroCard 
               key={item.id} 
               item={item} 
               index={i} 
               smoothMouseX={smoothMouseX}
               smoothIsWithin={smoothIsWithin}
               isActive={closestCardId === item.id}
               isDimmed={closestCardId !== null && closestCardId !== item.id}
             />
           ))}
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-8">
           <p className="text-xl md:text-2xl text-gray-400 font-serif italic leading-relaxed tracking-wide">
              Meng Media is a performance‑driven marketing partner that designs, runs, and optimizes paid lead‑generation systems for local and service‑based businesses.
           </p>
           
           <a 
             href="https://calendly.com/alexandermenginquiries/30min" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-block bg-white text-black border border-white px-12 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-gold hover:border-gold hover:text-white transition-all hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]"
           >
              Book a Call
           </a>
        </div>
      </div>
    </section>
  );
}
