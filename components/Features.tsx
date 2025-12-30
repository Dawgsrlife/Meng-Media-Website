'use client';
import Image from 'next/image';

export default function Features() {
  return (
    <section id="features" className="bg-[#050507] pt-48 pb-24 px-8 text-white overflow-visible relative">
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow at top transition */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(circle_at_top,rgba(216,170,69,0.12),transparent_70%)] opacity-80" />
        
        {/* Super faint grid - clipped to middle slice */}
        <div className="absolute inset-x-0 top-[120px] bottom-[160px] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 relative">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-4 relative z-0 text-white">we&apos;ve got your back</h2>
            
            <div className="absolute top-0 right-[2%] md:right-[5%] lg:right-[10%] transform -translate-y-[30%] rotate-12 z-10 hover:scale-110 transition-transform duration-300">
               <a href="https://calendly.com/alexandermenginquiries/30min" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                  <div className="relative w-32 h-32 border border-gold/50 rounded-full overflow-hidden bg-black shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                     <Image src="/all-in-one/pexels-obi-onyeador-1787470-13566767.jpg" alt="Book Call" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-300" />
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
            {/* Increased viewBox height from 20 to 30 and h-8 to h-12 to prevent clipping */}
            <svg className="w-64 h-12 mx-auto text-gold/30 overflow-visible" viewBox="0 0 200 30" preserveAspectRatio="none">
              <path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0,15 Q50,25 100,15 T200,15" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h3 className="text-4xl md:text-5xl font-serif italic leading-tight text-white">
                  Create a memorable <br/>
                  <span className="font-sans font-normal text-3xl md:text-4xl block mt-2 text-gold">experience for your facility</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-80 border border-white/20 rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                     {/* Zoomed in by 25% (scale-125) */}
                     <Image src="/all-in-one/pexels-dantemunozphoto-15481505.jpg" alt="Facility 1" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-125 hover:scale-105" />
                  </div>
                  <div className="relative h-80 border border-white/20 rounded-lg overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                     <Image src="/cta/pexels-ivan-s-7213609.jpg" alt="Facility 2" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
             </div>
             
             <div className="space-y-12 flex flex-col items-center pb-16">
                <div className="relative flex flex-col items-center">
                   <h4 className="text-4xl font-serif italic text-white whitespace-nowrap mb-3 uppercase tracking-tight">love what you do</h4>
                   <svg className="w-full max-w-[280px] h-10 text-gold/20 overflow-visible" viewBox="0 0 200 30" preserveAspectRatio="none">
                      {/* Refined path: thicker strokes, rising toward the right edge to point at image */}
                      <path d="M0,15 Q50,25 100,15 T200,8" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path d="M0,20 Q50,30 100,20 T200,13" fill="none" stroke="currentColor" strokeWidth="3" />
                   </svg>
                </div>
                
                <div className="relative w-48 h-48 border border-white/20 rounded-full overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-shadow">
                   <Image src="/features/feature-large-final.jpg" alt="Love what you do" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
             </div>
        </div>
      </div>
    </section>
  );
}
