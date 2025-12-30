'use client';
import { useRef, useMemo } from 'react';
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
  const radius = 364; // 280 * 1.3
  
  // Ambient drift duration
  const ambientDuration = useMemo(() => 8 + Math.random() * 4, []);

  return (
    <motion.div 
      initial={{ 
        opacity: 0, 
        rotate: baseAngle + 90,
        scale: 0.4 
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
        width: radius * 2,
        height: radius * 2,
        zIndex: 10 
      }}
    >
      {/* Continuous Orbiting Container */}
      <motion.div
        animate={isInView ? {
          rotate: [0, 360]
        } : {}}
        transition={{
          duration: 40, // Slow, cinematic orbit
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-full h-full relative"
      >
        {/* The Actual Card - Positioned at the top of the rotating diameter */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-28 md:w-52 md:h-36 bg-dark-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl group cursor-default pointer-events-auto"
          // Counter-rotate the card AND the baseAngle so it stays at exactly 0 degrees globally
          animate={isInView ? {
            rotate: [-baseAngle, -360 - baseAngle]
          } : {}}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Ambient Drifting Inner */}
          <motion.div 
            animate={{
              y: [0, -8, 0],
              x: [0, 4, 0]
            }}
            transition={{
              duration: ambientDuration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full relative"
          >
            <Image src={`/all-in-one/${imgName}`} alt="Feature" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function AllInOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

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
      className="py-32 px-4 overflow-hidden relative bg-black"
      id="growth-hub"
    >
      {/* Cinematic Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
         <h2 className="text-6xl md:text-8xl font-serif italic text-white mb-8">Your All-in-One <br/> Platform</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need in one place. No fluff, just performance.
          </p>
          <a href="https://calendly.com/alexandermenginquiries/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gold hover:text-white transition-colors cursor-pointer">
            Access The Hub
          </a>
      </div>

      <div className="relative h-[850px] max-w-5xl mx-auto flex items-center justify-center overflow-visible">
         {/* Central Hub Core */}
         <div className="absolute z-20 w-80 h-80 rounded-full flex items-center justify-center">
            <MengLogo variant="primary" />
            
            {/* Ambient Pulse Ring */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { 
                scale: [1, 1.4, 1.8],
                opacity: [0, 0.3, 0] 
              } : {}}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeOut"
              }}
              className="absolute inset-x-0 inset-y-0 border border-gold/30 rounded-full pointer-events-none"
            />
         </div>

         {/* Circular Orbit Satellite Cards */}
         {satelliteImages.map((imgName, i) => (
            <SatelliteCard 
              key={imgName}
              imgName={imgName}
              index={i}
              isInView={isInView}
            />
         ))}
      </div>
      
      <div className="text-center mt-32 relative z-10">
         <a 
            href="https://calendly.com/alexandermenginquiries/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 inline-block bg-white text-black border border-white px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-gold hover:border-gold hover:text-white transition-all hover:scale-105 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.1)]"
         >
            Start Scaling Today
         </a>
      </div>
    </section>
  );
}
