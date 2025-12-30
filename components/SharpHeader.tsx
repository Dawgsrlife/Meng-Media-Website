'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import MengLogo from './MengLogo';

export default function SharpHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-[14px] border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:opacity-80 transition-opacity duration-300 transform scale-90 md:scale-100 origin-left"
        >
           <MengLogo variant="nav" />
        </Link>
 
        {/* Nav Links - Space Grotesk Bold, Upright, Uppercase */}
        <nav className="hidden md:flex gap-10 items-center">
          {['About', 'Features', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-[12px] font-space font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
 
        {/* CTA - Hardware style button */}
        <a 
          href="https://calendly.com/alexandermenginquiries/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`px-5 py-2.5 rounded-full font-oswald font-bold uppercase tracking-[0.22em] text-[10px] transition-all duration-300 transform active:scale-95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] ${
            isScrolled 
              ? 'bg-gold text-black hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
              : 'bg-white text-black hover:bg-gold'
          }`}
          style={{ 
            WebkitFontSmoothing: 'antialiased'
          }}
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
