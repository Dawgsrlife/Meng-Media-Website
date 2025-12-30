'use client';
import { useFooterModal } from '../hooks/useFooterModal';
import LegalModal from './LegalModal';
import MengLogo from './MengLogo';
import { motion } from 'framer-motion';

export default function Footer() {
  const { isOpen, activeTab, openModal, closeModal } = useFooterModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <footer className="relative bg-[#020204] pt-24 pb-12 text-white font-sans overflow-hidden border-t border-white/5">
      {/* 1. Subtle grainy gradient "floor" */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at top left, rgba(216,170,69,0.12), transparent 50%),
              linear-gradient(to bottom, #040308, #010103 70%, #000 100%)
            `
          }}
        />
        
        {/* CSS Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* 2. Faint orbital arcs with "Breathing" Pulse */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 left-[10%] w-[600px] h-[600px] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="gold" strokeWidth="0.05" />
        </svg>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <motion.div variants={itemVariants} className="space-y-6">
            <MengLogo variant="nav" />
            <p className="text-[10px] text-gray-400 font-bold tracking-[0.4em] uppercase opacity-80">
              Performance, Refined.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col md:items-end justify-end space-y-4">
             <div className="w-12 h-[1px] bg-gold/30 mb-2 md:block hidden" />
             <p className="text-gray-500 font-sans text-xs tracking-[0.2em] uppercase">
                © 2026 Meng Media <span className="text-gold opacity-50 ml-1">●</span> Architecting Legacies
             </p>
          </motion.div>
        </div>
        
        {/* 3. Soft glass strip for the legal links */}
        <motion.div variants={itemVariants} className="flex justify-center md:justify-start border-t border-white/5 pt-12">
            <div className="inline-flex items-center gap-8 px-8 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl hover:border-gold/20 transition-all duration-500 group">
                {[
                 { id: 'terms', label: 'Terms' },
                 { id: 'privacy', label: 'Privacy' },
                 { id: 'cookies', label: 'Cookies' }
               ].map((link, i) => (
                 <div key={link.id} className="flex items-center gap-8">
                    <motion.button 
                      onClick={() => openModal(link.id as "terms" | "privacy" | "cookies")} 
                      whileHover={{ color: '#D4AF37', opacity: 1 }}
                      className="text-[10px] md:text-xs text-gray-400/80 uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer"
                    >
                      {link.label}
                    </motion.button>
                    {i < 2 && <div className="w-1 h-1 rounded-full bg-white/10" />}
                 </div>
               ))}
            </div>
        </motion.div>
      </motion.div>

      <LegalModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        activeTab={activeTab as "privacy" | "terms" | "cookies"} 
      />
    </footer>
  );
}
