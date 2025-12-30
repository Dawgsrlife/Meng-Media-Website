"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { IoMenu, IoClose } from "react-icons/io5";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
  { name: "Book a Call", href: "https://calendly.com", primary: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    // Nav Link Hover Animation
    linksRef.current.forEach((link) => {
      if (!link) return;
      
      const hoverTimeline = gsap.timeline({ paused: true });
      hoverTimeline.to(link, { y: -2, color: "#D4AF37", duration: 0.2, ease: "power2.out" });

      link.addEventListener("mouseenter", () => hoverTimeline.play());
      link.addEventListener("mouseleave", () => hoverTimeline.reverse());
    });
  }, { scope: containerRef });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm" ref={containerRef}>
      <Link href="/" className="text-2xl font-serif font-bold tracking-tight hover:text-gold transition-colors duration-300">
        MENG MEDIA
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.href}
            ref={(el) => { linksRef.current[i] = el }}
            className={cn(
              "text-sm uppercase tracking-widest font-medium transition-colors",
              link.primary 
                ? "bg-gold text-black px-6 py-3 rounded-full hover:bg-white hover:text-black font-semibold"
                : "text-white/80"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-2xl text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden">
           {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg uppercase tracking-widest font-medium transition-colors hover:text-gold",
                link.primary && "text-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
