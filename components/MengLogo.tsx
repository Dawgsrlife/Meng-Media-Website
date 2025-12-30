import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'nav' | 'icon';

interface MengLogoProps {
  variant?: Variant;
  className?: string;
}

export default function MengLogo({ variant = 'primary', className = '' }: MengLogoProps) {
  if (variant === 'icon') {
     return (
        <Link href="/" className={`inline-flex items-center justify-center ${className}`}>
           <div className="relative w-16 h-16 rounded-full bg-[#020203] border border-gold/40 shadow-[0_0_20px_rgba(0,0,0,0.9)] flex items-center justify-center overflow-hidden">
              <span className="text-xl font-bold text-white tracking-widest font-space">M</span>
           </div>
        </Link>
     );
  }

  if (variant === 'nav') {
     return (
        <Link href="/" className={`inline-flex items-center gap-4 text-white no-underline group ${className}`}>
            <div className="relative w-10 h-10 rounded-full bg-[#020203] border border-gold/40 shadow-[0_0_10px_rgba(0,0,0,0.9)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
               <span className="text-[12px] font-bold text-white tracking-wider font-space">M</span>
           </div>
           <div className="flex flex-col justify-center">
              <span className="text-[16px] font-oswald font-bold tracking-[0.2em] uppercase whitespace-nowrap hidden sm:inline-block text-white transition-opacity group-hover:opacity-80">
                  MENG MEDIA
              </span>
           </div>
        </Link>
     );
  }

  // Primary variant (Growth Hub Section Badge) - Sharp, Integrated Design
  return (
     <div className={`flex flex-col items-center justify-center ${className}`}>
          <div className="relative w-[180px] h-[180px] flex items-center justify-center group pointer-events-none">
            
            {/* Minimalist Orbit Line - Low Opacity */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-10px] border border-white/[0.03] rounded-full pointer-events-none"
            >
               {/* Tiny Orbiting Dot */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold/40 rounded-full blur-[1px]" />
            </motion.div>

            {/* Sharp Core Circle */}
            <div className="relative w-full h-full rounded-full bg-[#020203] border-[1.5px] border-gold/80 shadow-[0_0_40px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center pointer-events-auto transition-all duration-700">
               {/* Inner depth stroke */}
               <div className="absolute inset-[1px] border border-gold/10 rounded-full pointer-events-none" />
               
               {/* Monogram 'M' - Space Grotesk Bold */}
               <span className="text-[48px] font-bold text-white tracking-[0.02em] font-space leading-none select-none mb-1">
                  M
               </span>
               
               {/* Label - Space Grotesk SemiBold Small-Caps */}
               <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-gold/90 font-space">
                  GROWTH HUB
               </span>
            </div>
          </div>
     </div>
  );
}
