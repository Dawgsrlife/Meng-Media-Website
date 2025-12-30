'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = scrollRef.current!.scrollWidth;
      const windowWidth = window.innerWidth;
      
      gsap.to(scrollRef.current, {
        x: () => -(totalWidth - windowWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth / 2}`, // Faster scroll (half the distance)
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const images = [
    '/hero-1.png',
    '/hero-2.png',
    '/hero-3.png',
    '/hero-4.png',
    '/hero-5.png',
  ];

  return (
    <section ref={containerRef} className="bg-black overflow-hidden">
      <div className="h-screen flex items-center">
        <div ref={scrollRef} className="flex gap-12 px-12">
          {images.map((src, i) => (
            <div key={i} className="relative w-[60vw] h-[60vh] md:w-[40vw] md:h-[70vh] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
              <Image 
                src={src} 
                alt={`Gallery ${i + 1}`} 
                fill 
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl uppercase tracking-widest bg-black/50 px-4 py-2 backdrop-blur-sm font-sans">
                Showcase {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
