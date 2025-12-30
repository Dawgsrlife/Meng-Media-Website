'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Clients() {
  const clients = [
    'HILTON', 'MARRIOTT', 'FOUR SEASONS', 'HYATT', 
    'SHANGRI-LA', 'MANDARIN ORIENTAL', 'ROSEWOOD', 'AMAN'
  ];

  return (
    <section className="bg-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <h3 className="text-3xl font-serif italic text-white">the past clients</h3>
      </div>
      
      <div className="border-y border-white/20 py-12 bg-white/5">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          loop={true}
          slidesPerView="auto"
          spaceBetween={80}
          className="client-swiper"
        >
          {clients.map((client, i) => (
            <SwiperSlide key={i} className="w-auto">
              <span className="text-4xl md:text-6xl font-bold text-white/40 hover:text-white transition-colors cursor-default font-serif">
                {client}
              </span>
            </SwiperSlide>
          ))}
          {/* Duplicate for loop safety if needed */}
          {clients.map((client, i) => (
            <SwiperSlide key={`dup-${i}`} className="w-auto">
              <span className="text-4xl md:text-6xl font-bold text-white/40 hover:text-white transition-colors cursor-default font-serif">
                {client}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
