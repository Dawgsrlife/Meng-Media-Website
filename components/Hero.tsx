'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for rotation to prevent snappiness
  const springConfig = { damping: 25, stiffness: 150 }; // Smooth, not too bouncy
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig); // Reduced amplitude for elegance
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig); // Reduced amplitude for elegance

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXPos = e.clientX - rect.left;
      const mouseYPos = e.clientY - rect.top;
      
      // Normalize mouse position from -0.5 to 0.5
      const xPct = (mouseXPos / width) - 0.5;
      const yPct = (mouseYPos / height) - 0.5;

      mouseX.set(xPct);
      mouseY.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const heroItems = [
    { id: 1, label: 'WEBSITE', image: '/new-hero/hero-website.jpg' },
    { id: 2, label: 'BOOKING & SALES', image: '/new-hero/hero-booking.jpg' },
    { id: 3, label: 'PAYMENTS & POS', image: '/new-hero/hero-payments.jpg' },
    { id: 4, label: 'MARKETING & CRM', image: '/new-hero/hero-marketing.jpg' },
    { id: 5, label: 'DATA & OPERATIONS', image: '/new-hero/hero-data.jpg' },
  ];

  return (
    <section className="bg-black text-white pt-48 pb-32 px-4 relative min-h-screen flex flex-col justify-center overflow-visible">
      
      {/* Gold Glow Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0) 70%)',
        }}
      />

      <div className="max-w-[90rem] mx-auto w-full relative z-10 text-center">
        {/* Updated Headline: Empowering Slogan */}
        <h1 className="text-5xl md:text-8xl font-serif italic text-center mb-12 leading-[0.9] tracking-tight text-white drop-shadow-2xl">
          Architecting <br/> 
          <span className="text-gold-gradient not-italic font-sans font-black tracking-tighter uppercase">Digital Legacies</span>
        </h1>

        {/* Hero Tiles Container - Global Tracking Region */}
        <div 
           ref={containerRef}
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
           className="flex flex-nowrap justify-center gap-4 md:gap-8 mb-24 perspective-1200 overflow-visible px-4 pb-12 md:pb-0"
        >
           {heroItems.map((item, i) => {
              // Calculate static transform based on index for the "spread" effect
              let staticTransform = '';
              if (i === 0) staticTransform = 'translateX(-12%) translateY(4%)';
              if (i === 1) staticTransform = 'translateX(-6%) translateY(0)';
              if (i === 2) staticTransform = 'translateY(-2%) scale(1.02)';
              if (i === 3) staticTransform = 'translateX(6%) translateY(0)';
              if (i === 4) staticTransform = 'translateX(12%) translateY(4%)';

              return (
                 <motion.div 
                   key={item.id}
                   className="relative w-48 md:w-56 lg:w-64 flex-shrink-0 flex flex-col gap-4 cursor-pointer group"
                   style={{
                      transform: staticTransform,
                      transformStyle: 'preserve-3d',
                      zIndex: i === 2 ? 20 : 10 // Center item on top
                   }}
                 >
                    {/* Image Container with Smooth 3D Tilt */}
                    <motion.div 
                       className="hero-tile-image relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-900 border border-white/10 group-hover:border-gold/50 transition-colors duration-500"
                       style={{
                          transformStyle: 'preserve-3d',
                          rotateX: rotateX,
                          rotateY: rotateY,
                          boxShadow: '0 28px 60px rgba(0, 0, 0, 0.75)'
                       }}
                    >
                       <Image 
                         src={item.image} 
                         alt={item.label} 
                         fill 
                         className="object-cover transition-transform duration-700 group-hover:scale-110"
                         style={{ transform: 'translateZ(0)' }}
                       />
                       {/* Gold overlay */}
                       <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-black/60 pointer-events-none mix-blend-overlay" />
                    </motion.div>
                    
                    {/* Label */}
                    <p className="text-lg font-serif italic font-bold tracking-wide text-gray-500 group-hover:text-gold transition-colors text-center">
                       {item.label}
                    </p>
                 </motion.div>
              );
           })}
        </div>

        {/* Bottom Text & CTA */}
        <div className="text-center max-w-3xl mx-auto space-y-8">
           <p className="text-xl md:text-2xl text-gray-400 font-serif italic leading-relaxed tracking-wide">
              Meng Media powers brands to scale through performance-driven creative strategies and data-backed media buying.
           </p>
           
           <a 
             href="https://calendly.com" 
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
