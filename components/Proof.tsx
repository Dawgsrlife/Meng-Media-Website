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
              <div className="relative h-64 border border-white/20 rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 <Image src="/hero-1.png" alt="Proof 1" fill className="object-cover" />
              </div>
           </div>

           {/* Row 2: Box left, Wavy line right */}
           <div className="md:col-span-5 mt-12">
              <div className="relative h-80 border border-white/20 rounded-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                 <Image src="/hero-2.png" alt="Proof 2" fill className="object-cover" />
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
                 <Image src="/hero-3.png" alt="Proof 3" fill className="object-cover" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
