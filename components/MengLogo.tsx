import React from 'react';

type Variant = 'primary' | 'nav' | 'icon';

interface MengLogoProps {
  variant?: Variant;
  className?: string;
}

export default function MengLogo({ variant = 'primary', className = '' }: MengLogoProps) {
  // Refined design: Space Grotesk, heavy "M", breathing animation, orbiting elements.
  
  if (variant === 'icon') {
     return (
        <a href="/" className={`inline-flex items-center justify-center ${className}`}>
           <div className="relative w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.16),#020306)] shadow-[0_0_20px_rgba(0,0,0,0.9),0_0_60px_rgba(216,170,69,0.45)] flex items-center justify-center overflow-hidden">
              {/* Breathing Inner Disc */}
              <div className="relative w-[72%] h-[72%] rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.22),#050509)] shadow-[0_0_16px_rgba(0,0,0,0.85)] flex items-center justify-center animate-pulse-slow">
                 <span className="text-xl font-black text-white tracking-widest font-[family-name:var(--font-space)]">M</span>
              </div>
           </div>
        </a>
     );
  }

  if (variant === 'nav') {
     return (
        <a href="/" className={`inline-flex items-center gap-4 text-white no-underline group ${className}`}>
           {/* Mini Orb */}
            <div className="relative w-10 h-10 rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.16),#020306)] shadow-[0_0_10px_rgba(0,0,0,0.9),0_0_20px_rgba(216,170,69,0.3)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="relative w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.22),#050509)] shadow-[0_0_8px_rgba(0,0,0,0.85)] flex items-center justify-center">
                 <span className="text-[12px] font-black text-white tracking-wider font-[family-name:var(--font-space)]">M</span>
              </div>
           </div>
           {/* Wordmark - Space Grotesk */}
           <div className="flex flex-col justify-center">
              <span className="text-[16px] font-bold tracking-[0.2em] uppercase whitespace-nowrap hidden sm:inline-block text-white transition-opacity group-hover:opacity-80 font-[family-name:var(--font-space)]">
                  MENG MEDIA
              </span>
           </div>
        </a>
     );
  }

  // Primary variant (Hero/Hub - Module Header Style)
  return (
     <div className={`flex flex-col items-center gap-10 ${className}`}>
         <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            {/* Orbiting Elements */}
            <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Main Orb */}
            <div className="relative w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.1),#020306)] shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_150px_rgba(216,170,69,0.35)] flex items-center justify-center">
               
                {/* Breathing Inner Disc - Slightly tighter proportions */}
               <div className="relative w-[68%] h-[68%] rounded-full bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.15),#050509)] shadow-[0_0_40px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center animate-breathing">
                  
                  {/* Mark Ring - More balanced with the M stamp */}
                  <div className="relative w-[96px] h-[96px] rounded-full border-[3px] border-white/90 flex items-center justify-center mb-1">
                    <span className="text-[52px] font-black text-white tracking-normal font-[family-name:var(--font-space)] leading-none select-none">M</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                     {/* Wordmark - Airier and more intentionally spaced */}
                     <span className="text-[13px] font-semibold tracking-[0.24em] uppercase text-white font-[family-name:var(--font-space)] mt-5">
                        MENG MEDIA
                     </span>
                     
                     {/* Module Tag - Tertiary hierarchy with dot separators */}
                     <span className="text-[9px] font-medium tracking-[0.32em] uppercase mt-2 font-[family-name:var(--font-space)] text-gold/70">
                        • GROWTH HUB •
                     </span>
                  </div>
               </div>
            </div>
         </div>
     </div>
  );
}
