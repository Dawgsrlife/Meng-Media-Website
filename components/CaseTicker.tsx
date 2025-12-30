'use client';

export default function CaseTicker() {
  const content = (
    <>
       <span className="text-white/40 font-bold mx-8 tracking-widest text-lg font-oswald uppercase">Become our next case study</span>
       <span className="text-gold/60 mx-4">✦</span>
       <span className="text-white/40 font-bold mx-8 tracking-widest text-lg font-oswald uppercase">Become our next case study</span>
       <span className="text-gold/60 mx-4">✦</span>
       {/* Center Highlight */}
       <span className="text-gold font-bold mx-8 tracking-widest text-xl font-oswald uppercase drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">Become our next case study</span>
       <span className="text-gold/60 mx-4">✦</span>
       <span className="text-white/40 font-bold mx-8 tracking-widest text-lg font-oswald uppercase">Become our next case study</span>
       <span className="text-gold/60 mx-4">✦</span>
    </>
  );

  return (
    <div className="relative w-full overflow-hidden bg-black py-8 border-y border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.05)]">
      {/* Radial Glow Top/Bottom */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Marquee Container */}
      <div className="flex w-full overflow-hidden relative">
         <div className="flex animate-marquee whitespace-nowrap items-center">
            {content}
            {content}
            {content}
            {content}
         </div>
         <div className="flex animate-marquee whitespace-nowrap items-center absolute top-0 left-full">
            {content}
            {content}
            {content}
            {content}
         </div>
      </div>

       {/* Central CTA Overlay */}
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <a 
            href="https://calendly.com/alexandermenginquiries/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pointer-events-auto bg-black/80 backdrop-blur-sm border border-gold/50 text-gold px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transform hover:scale-105"
          >
             Become our next case study
          </a>
       </div>
    </div>
  );
}
