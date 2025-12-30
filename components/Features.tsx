'use client';
import Image from 'next/image';

export default function Features() {
  return (
    <section id="features" className="bg-[#020103] pt-64 pb-32 px-8 text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(circle_at_top,rgba(216,170,69,0.22),transparent_65%)] opacity-100" />
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold/20 via-gold/5 to-transparent blur-md" />

        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
         {/* Repositioned Book Call Badge: Back to Right, barely up, no overlap with headline */}
         <div className="absolute -top-32 right-[2%] md:right-[4%] lg:right-[6%] transform rotate-12 z-20 hover:rotate-6 hover:scale-105 transition-all duration-500 hidden xl:block">
            <a href="https://calendly.com/alexandermenginquiries/30min" target="_blank" rel="noopener noreferrer" className="block cursor-pointer group">
                <div className="relative w-40 h-40 border border-gold/40 rounded-full overflow-hidden bg-black shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.2)] group-hover:border-gold/80 transition-all duration-500">
                  <Image src="/all-in-one/pexels-obi-onyeador-1787470-13566767.jpg" alt="Book Call" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-gold font-serif italic text-xl tracking-wider">Book Call</span>
                  </div>
                  {/* Slow spinner border effect */}
                  <div className="absolute inset-0 border-2 border-transparent border-t-gold/30 rounded-full animate-[spin_10s_linear_infinite]" />
                </div>
            </a>
          </div>

         <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-32 items-start">
            
            <div className="space-y-16">
               <div className="space-y-6 relative">
                  <h2 className="text-4xl md:text-7xl font-serif italic text-white tracking-tight leading-[0.9] drop-shadow-sm">
                    We&apos;ve Got Your Back
                  </h2>
                  <p className="text-xl md:text-2xl text-gold-gradient font-serif italic tracking-wide opacity-90 max-w-[560px] leading-relaxed">
                    From offer to follow‑up, Meng Media runs the engine so you can run the experience.
                  </p>
               </div>

               <div className="space-y-12">
                  <h3 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">
                    Create a memorable <br/>
                    <span className="font-oswald font-normal text-3xl md:text-4xl block mt-2 text-gold opacity-80 uppercase tracking-widest">experience for your facility</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6 items-end">
                    <div className="relative h-[28rem] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl hover:translate-y-[-4px] hover:scale-[1.01] group">
                       <Image src="/all-in-one/pexels-dantemunozphoto-15481505.jpg" alt="Facility 1" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-125 group-hover:scale-110" />
                    </div>
                    <div className="relative h-80 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl hover:translate-y-[-4px] hover:scale-[1.01] group">
                       <Image src="/cta/pexels-ivan-s-7213609.jpg" alt="Facility 2" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                    </div>
                  </div>
               </div>
            </div>

            <div className="flex flex-col items-center lg:items-end lg:pt-32 space-y-16">
               <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-4 w-full">
                  <h4 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight uppercase whitespace-nowrap">love what you do</h4>
                  <svg className="w-full max-w-[280px] h-10 text-gold/20 overflow-visible" viewBox="0 0 200 30" preserveAspectRatio="none">
                    <path d="M0,15 Q50,25 100,15 T200,8" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path d="M0,20 Q50,30 100,20 T200,13" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
               </div>

               <div className="relative w-64 h-64 md:w-80 md:h-80 border border-white/10 rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(212,175,55,0.15)] transition-all duration-700 hover:scale-[1.02] group">
                  <Image src="/features/feature-large-final.jpg" alt="Love what you do" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               </div>
               
               <p className="text-lg text-gray-400 font-sans italic leading-relaxed text-center lg:text-right max-w-[500px]">
                 We handle the lead generation and technical orchestration so you can focus on the heart of your business.
               </p>
            </div>

         </div>
      </div>
    </section>
  );
}
