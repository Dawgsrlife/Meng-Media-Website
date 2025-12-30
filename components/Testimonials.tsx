'use client';
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Matt - Swingers',
    quote: "Since we've moved over to Meng Media it's been night and day! We can be much more spontaneous...",
    image: '/swingers.png',
  },
  {
    name: 'Sean - Wanderlust',
    quote: "We partnered with Meng Media to take Wanderlust to the next level. They are the holy trinity...",
    image: '/wanderlust.png',
  },
  {
    name: 'Mantas - Surf Yoga Beer',
    quote: "Using Meng Media was the best decision we made for our business! The expertise and enthusiasm...",
    image: '/payment-pos.png'
  }
];

export default function EasolTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section--testimonials bg-black py-32 border-t border-white/10">
      <div className="content max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-6">Creator Love</h2>
        </div>
        
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className={`testimonial-card p-12 rounded-3xl bg-dark-card border transition-all cursor-pointer group ${i === activeIndex ? 'scale-105 shadow-[0_0_30px_rgba(212,175,55,0.1)] border-gold/50' : 'border-white/10 hover:border-gold/30'}`}
              onClick={() => setActiveIndex(i)}
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative border border-white/10 group-hover:border-gold/50 transition-colors">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 font-serif italic tracking-wide group-hover:text-gold transition-colors">{testimonial.name}</h4>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
