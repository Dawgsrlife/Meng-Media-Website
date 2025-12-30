import React from 'react';

type Variant = 'primary' | 'nav' | 'icon';

interface MengLogoProps {
  variant?: Variant;
  className?: string;
}

export default function MengLogo({ variant = 'primary', className = '' }: MengLogoProps) {
  // Design System: Space Grotesk for geometric precision, Instrument Serif for elegance.
  
  if (variant === 'icon') {
     return (
        <a href="/" className={`inline-flex items-center justify-center ${className}`}>
           <div className="relative w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.16),#020306)] shadow-[0_0_20px_rgba(0,0,0,0.9),0_0_60px_rgba(216,170,69,0.45)] flex items-center justify-center overflow-hidden">
              <div className="relative w-[72%] h-[72%] rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.22),#050509)] shadow-[0_0_16px_rgba(0,0,0,0.85)] flex items-center justify-center animate-pulse-slow">
                 <span className="text-xl font-bold text-white tracking-widest font-space">M</span>
              </div>
           </div>
        </a>
     );
  }

  if (variant === 'nav') {
     return (
        <a href="/" className={`inline-flex items-center gap-4 text-white no-underline group ${className}`}>
            <div className="relative w-10 h-10 rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.16),#020306)] shadow-[0_0_10px_rgba(0,0,0,0.9),0_0_20px_rgba(216,170,69,0.3)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="relative w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.22),#050509)] shadow-[0_0_8px_rgba(0,0,0,0.85)] flex items-center justify-center">
                 <span className="text-[12px] font-bold text-white tracking-wider font-space">M</span>
              </div>
           </div>
           <div className="flex flex-col justify-center">
              <span className="text-[16px] font-bold tracking-[0.2em] uppercase whitespace-nowrap hidden sm:inline-block text-white transition-opacity group-hover:opacity-80 font-space">
                  MENG MEDIA
              </span>
           </div>
        </a>
     );
  }

  // Primary variant (Growth Hub Section Badge) - Refined "Dark/Gold" minimal branding
  return (
     <div className={`flex flex-col items-center justify-center ${className}`}>
          <div className="relative w-[180px] h-[180px] flex items-center justify-center group pointer-events-none">
            {/* Ambient orbiting rings - More subtle and closer */}
            <div className="absolute inset-[-15px] border border-gold/5 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-[-15px] border-t border-gold/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
            
            {/* Minimal Gold Monogram Orb */}
            <div className="relative w-full h-full rounded-full bg-[#050508] border border-gold/40 shadow-[0_0_50px_rgba(216,170,69,0.2),inset_0_0_20px_rgba(216,170,69,0.05)] flex flex-col items-center justify-center pointer-events-auto transition-all duration-700 group-hover:border-gold/60 group-hover:shadow-[0_0_70px_rgba(216,170,69,0.3)]">
               
               {/* Monogram 'M' - Space Grotesk Bold */}
               <span className="text-[48px] font-bold text-white tracking-[0.02em] font-sans leading-none select-none mb-1">
                  M
               </span>
               
               {/* Label - Space Grotesk SemiBold */}
               <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-gold/60 font-sans">
                  GROWTH HUB
               </span>

               {/* Breathing internal glow */}
               <div className="absolute inset-0 rounded-full bg-gold/[0.02] animate-pulse-slow pointer-events-none" />
            </div>
          </div>
     </div>
  );
}
