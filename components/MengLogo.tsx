import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'nav' | 'icon';

interface MengLogoProps {
  variant?: Variant;
  className?: string;
}

const ArchitecturalM = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="inherit">
    <path d="M4 18V6l8 7 8-7v12" />
    <path d="M8 18V9l4 3.5 4-3.5v9" strokeWidth="1" opacity="0.3" />
  </svg>
);

export default function MengLogo({ variant = 'primary', className = '' }: MengLogoProps) {
  if (variant === 'icon') {
     return (
        <Link href="/" className={`inline-flex items-center justify-center ${className}`}>
           <div className="relative w-14 h-14 bg-[#020203] border border-gold/30 shadow-[0_0_15px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden">
              <ArchitecturalM className="w-8 h-8 text-white" />
           </div>
        </Link>
     );
  }

  if (variant === 'nav') {
     return (
        <Link href="/" className={`inline-flex items-center gap-4 text-white no-underline group ${className}`}>
            <div className="relative w-9 h-9 bg-[#020203] border border-gold/30 shadow-[0_0_10px_rgba(0,0,0,0.8)] flex items-center justify-center transition-all duration-300 group-hover:border-gold/60">
               <ArchitecturalM className="w-5 h-5 text-white" />
           </div>
           <div className="flex flex-col justify-center">
              <span className="text-[15px] font-oswald font-bold tracking-[0.25em] uppercase whitespace-nowrap hidden sm:inline-block text-white transition-opacity group-hover:opacity-80">
                  MENG MEDIA
              </span>
           </div>
        </Link>
     );
  }

  // Primary variant (Growth Hub Section Badge) - Architectural Square Hub
  return (
     <div className={`flex flex-col items-center justify-center ${className}`}>
          <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex items-center justify-center group">
            
            {/* Rectilinear Signal Pulse */}
            <motion.div 
               animate={{ 
                  scale: [1, 1.15],
                  opacity: [0.2, 0] 
               }}
               transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
               }}
               className="absolute inset-0 border border-gold/30 pointer-events-none"
            />

            {/* Structured Core Hub - Squircle/Square */}
            <div className="relative w-full h-full bg-[#020203] border-[1.5px] border-gold/60 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center transition-all duration-500 overflow-visible pointer-events-auto group-hover:border-gold/80">
               
               {/* Architectural Monogram with hover lift */}
               <motion.div 
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="mb-2 cursor-default"
               >
                  <ArchitecturalM className="w-16 h-16 md:w-20 md:h-20 text-white" />
               </motion.div>
               
               {/* Label - Space Grotesk Bold */}
               <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold/80 font-space select-none">
                     GROWTH HUB
                  </span>
                  <div className="w-8 h-[1px] bg-gold/30" />
               </div>
            </div>
          </div>
     </div>
  );
}
