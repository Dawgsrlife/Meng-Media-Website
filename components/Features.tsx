'use client';
import Image from 'next/image';

export default function Features() {
  return (
    <section id="features" className="bg-black py-24 px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 relative">
           <h2 className="text-5xl md:text-7xl font-serif italic mb-4 relative z-0 text-white">we&apos;ve got your back</h2>
           <div className="absolute top-0 right-12 transform -translate-y-1/2 rotate-12 z-10 hover:scale-110 transition-transform duration-300">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                 <div className="relative w-32 h-32 border border-gold/50 rounded-full overflow-hidden bg-black shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <Image src="/showcase/1.png" alt="Support" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                       <span className="text-gold font-serif italic text-lg">Book Call</span>
                    </div>
                 </div>
              </a>
              <svg className="absolute -bottom-8 -left-8 w-16 h-16 text-gold pointer-events-none" viewBox="0 0 50 50" fill="none" stroke="currentColor">
                 <path d="M40,10 Q10,40 10,10" strokeWidth="2" />
                 <path d="M10,10 L5,20 M10,10 L20,15" strokeWidth="2" />
              </svg>
           </div>
           <svg className="w-64 h-8 mx-auto text-gold/30" viewBox="0 0 200 20" preserveAspectRatio="none">
             <path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="2" />
             <path d="M0,15 Q50,25 100,15 T200,15" fill="none" stroke="currentColor" strokeWidth="2" />
           </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-serif italic leading-tight text-white">
                Create memorable <br/>
                <span className="font-sans font-normal text-3xl md:text-4xl block mt-2 text-gold">idea of your facility</span>
              </h3>
              <div className="relative h-80 border border-white/20 rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                 <Image src="/features/large.jpg" alt="Facility" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
           </div>
           
           <div className="space-y-12 flex flex-col items-center md:items-start pb-16">
              <div className="relative w-full max-w-sm">
                 <svg className="w-full h-12 text-gold/30 mb-8" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="2" />
                 </svg>
                 <div className="text-right">
                    <h4 className="text-4xl font-serif italic text-white">love what <br/> you do</h4>
                    <svg className="w-32 h-4 ml-auto mt-2 text-gold" viewBox="0 0 100 10" preserveAspectRatio="none">
                       <path d="M0,5 Q25,10 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
                       <path d="M0,8 Q25,13 50,8 T100,8" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                 </div>
              </div>
              
              <div className="relative w-48 h-48 border border-white/20 rounded-full overflow-hidden self-end md:self-center shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-shadow">
                 <Image src="/features/small.jpg" alt="Love what you do" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
