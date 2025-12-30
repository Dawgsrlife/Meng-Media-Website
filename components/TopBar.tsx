'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function TopBar() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40, // Slower speed
        ease: 'none',
        repeat: -1
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-white py-2 overflow-hidden border-b border-white/20">
      <div className="whitespace-nowrap flex w-max" ref={marqueeRef}>
        {Array(10).fill('CHECK OUT OUR IG').map((text, i) => (
          <span key={i} className="mx-8 font-mono uppercase text-sm tracking-widest">
            {text}
          </span>
        ))}
        {Array(10).fill('CHECK OUT OUR IG').map((text, i) => (
          <span key={`dup-${i}`} className="mx-8 font-mono uppercase text-sm tracking-widest">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
