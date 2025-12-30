'use client';
import { motion } from 'framer-motion';

export default function CaseTicker() {
  const proofPoints = [
    { text: "CASE STUDIES", highlight: false },
    { text: "LOCAL BRANDS WE'VE SCALED", highlight: false },
    { text: "CALENDARS WE'VE BOOKED OUT", highlight: false },
    { text: "LEADS TURNED INTO REVENUE", highlight: false },
    { text: "BECOME OUR NEXT CASE STUDY", highlight: true },
  ];

  // Create a long enough string to loop smoothly
  const tickerContent = [...proofPoints, ...proofPoints, ...proofPoints];

  return (
    <div className="bg-black py-16 border-y border-white/5 relative overflow-hidden group">
      {/* Anchor Label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold/60 font-sans">
          WHAT MENG MEDIA DOES
        </span>
      </div>

      <div className="flex select-none overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap items-center gap-16 py-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {tickerContent.map((point, i) => (
            <div key={i} className="flex items-center gap-16">
              {point.highlight ? (
                <span className="text-4xl md:text-6xl font-serif italic tracking-tight text-gold opacity-100 hover:text-white transition-all duration-500">
                  {point.text}
                </span>
              ) : (
                <span className="text-4xl md:text-6xl font-serif italic tracking-tight text-white/20 group-hover:text-white/30 transition-all duration-500">
                  {point.text}
                </span>
              )}
              <span className="text-gold/20 text-2xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side Vignettes for cinematic fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
}
