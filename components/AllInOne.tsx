'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import MengLogo from './MengLogo';
import { motion, useInView } from 'framer-motion';

interface SatelliteCardProps {
  imgName: string;
  index: number;
  isInView: boolean;
}

function SatelliteCard({ imgName, index, isInView }: SatelliteCardProps) {
  const baseAngle = (index / 5) * 360;
  // Ambient drift duration
  const [ambientDuration] = useState(() => 8 + Math.random() * 4);

  return (
    <motion.div 
      initial={{ 
        opacity: 0, 
        rotate: baseAngle + 90,
        scale: 0.8 
      }}
      animate={isInView ? { 
        opacity: 1, 
        rotate: [baseAngle + 90, baseAngle],
        scale: 1,
        transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.1
        }
      } : {}}
      className="absolute flex items-center justify-center pointer-events-none"
      style={{ 
        width: 'calc(var(--orbit-radius) * 2)',
        height: 'calc(var(--orbit-radius) * 2)',
        zIndex: 10 
      }}
    >
      {/* Continuous Orbiting Container */}
      <motion.div
        animate={isInView ? {
          rotate: [0, 360]
        } : {}}
        transition={{
          duration: 45, // Slightly slower for architectural feel
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-full h-full relative"
      >
        {/* The Actual Card - Positioned at the top of the rotating diameter */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-22 h-16 md:w-56 md:h-36 bg-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group cursor-default pointer-events-auto"
          // Counter-rotate to stay upright
          animate={isInView ? {
            rotate: [-baseAngle, -360 - baseAngle]
          } : {}}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Ambient Drifting Inner */}
          <motion.div 
            animate={{
              y: [0, -6, 0],
              x: [0, 3, 0]
            }}
            transition={{
              duration: ambientDuration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full relative"
          >
            <Image 
              src={`/all-in-one/${imgName}`} 
              alt="Feature" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-110" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-colors pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function AllInOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const satelliteImages = [
    'pexels-cottonbro-5083413.jpg', 
    'pexels-dantemunozphoto-15481505.jpg', 
    'pexels-harold-vasquez-853421-2653362.jpg', 
    'pexels-leeloothefirst-5556318.jpg', 
    'pexels-obi-onyeador-1787470-13566767.jpg'
  ];

  return (
    <section 
      ref={containerRef} 
      className="py-40 px-4 overflow-hidden relative bg-black"
      id="growth-hub"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(216,170,69,0.08), transparent 70%), #010103`
          }}
        />
        
        {/* Alignment Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          }}
        />
      </div>
      
      {/* Hierarchy Heading */}
      <div className="max-w-7xl mx-auto text-center mb-32 relative z-10">
         <h2 className="text-5xl md:text-8xl font-serif italic text-white mb-6 drop-shadow-2xl">
            Your<br></br><span className="text-gold-gradient not-italic font-oswald font-bold tracking-tighter uppercase inline-block px-4">Growth Hub</span>
         </h2>
         <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-serif italic leading-relaxed tracking-wide mb-12">
            The Growth Hub is where your website, bookings, payments, and follow-ups run as one system.
         </p>
         
         <div className="flex justify-center gap-6">
            <a href="https://calendly.com/alexandermenginquiries/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-12 py-4 rounded-full font-oswald font-bold uppercase tracking-widest text-sm hover:bg-gold hover:text-white transition-all hover:scale-105 cursor-pointer shadow-xl">
               Enter The System
            </a>
         </div>
      </div>

      {/* Orbit Layout with Increased Radius to prevent overlap */}
      <div 
        className="relative h-[650px] md:h-[950px] max-w-6xl mx-auto flex items-center justify-center overflow-visible [--orbit-radius:95px] md:[--orbit-radius:400px]"
      >
         {/* Central Architectural Hub */}
         <div className="relative z-20 scale-90 md:scale-100">
            <MengLogo variant="primary" />
         </div>

         {/* Circular Satellite Cards */}
         {satelliteImages.map((imgName, i) => (
            <SatelliteCard 
              key={imgName}
              imgName={imgName}
              index={i}
              isInView={isInView}
            />
         ))}

         {/* Connection Visuals */}
         <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div className="absolute inset-0 border border-gold rounded-full scale-[0.98]" />
         </div>
      </div>

      <div className="text-center mt-32 relative z-10">
         <p className="text-gray-500 font-space text-[10px] tracking-[0.4em] uppercase mb-8">System Status: Active</p>
         <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
      </div>
    </section>
  );
}
