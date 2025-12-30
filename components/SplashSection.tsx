'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplashSectionProps {
  imageSrc: string;
  alt: string;
  title?: string;
}

export default function SplashSection({ imageSrc, alt, title }: SplashSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[80vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image 
          ref={imgRef}
          src={imageSrc} 
          alt={alt} 
          fill 
          className="object-cover opacity-80"
        />
      </div>
      {title && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h2 className="text-6xl md:text-9xl font-serif italic text-gold-gradient uppercase tracking-tighter drop-shadow-2xl">
            {title}
          </h2>
        </div>
      )}
    </section>
  );
}
