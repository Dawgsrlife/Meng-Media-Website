'use client';
import Image from 'next/image';

export default function Proof() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-6xl font-serif italic text-white mb-4">Community Love</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
             See what the experience community has to say about Meng Media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           {/* Layout matching sketch: Wavy line left, Box right */}
           <div className="md:col-span-6 flex items-center justify-center">
              <svg className="w-full h-12 text-gray-500" viewBox="0 0 300 20" preserveAspectRatio="none">
                 <path d="M0,10 Q75,0 150,10 T300,10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
           </div>
            <div className="md:col-span-6">
               <div className="relative h-64 border border-white/20 rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-white/5 group bg-[url('/noise.png')]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                     <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-3 text-gold/50 group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                     </div>
                     <span className="font-serif italic text-white/40 text-lg group-hover:text-white transition-colors duration-300">Become our first testimonial</span>
                  </div>
               </div>
            </div>

            {/* Row 2: Box left, Wavy line right */}
            <div className="md:col-span-5 mt-12">
               <div className="relative h-80 border border-white/20 rounded-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500 bg-white/5 group bg-[url('/noise.png')]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                     <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 text-gold/50 group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                     </div>
                     <span className="font-serif italic text-white/40 text-xl group-hover:text-white transition-colors duration-300">Your Success Story Here</span>
                  </div>
               </div>
            </div>
            <div className="md:col-span-7 flex items-center justify-center mt-12">
               <svg className="w-full h-12 text-gray-500" viewBox="0 0 300 20" preserveAspectRatio="none">
                  <path d="M0,10 Q75,20 150,10 T300,10" fill="none" stroke="currentColor" strokeWidth="2" />
               </svg>
            </div>

            {/* Row 3: Wide box */}
            <div className="md:col-span-12 mt-12">
               <div className="relative h-96 border border-white/20 rounded-3xl overflow-hidden">
                  <Image src="/showcase/2.png" alt="Proof 3" fill className="object-cover" />
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
