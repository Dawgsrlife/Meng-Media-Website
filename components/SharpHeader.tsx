'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SharpHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif italic font-bold tracking-wide text-white hover:text-gold transition-colors duration-300">
          MENG MEDIA
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8">
          {['About', 'Features', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-serif italic text-gray-400 hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a 
          href="https://calendly.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black border border-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 transform hover:scale-105"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
