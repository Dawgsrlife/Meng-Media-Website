'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does Meng Media actually get me more customers?",
    answer: "Meng Media designs, runs, and optimizes paid lead-generation systems that convert attention into qualified leads. We combine strategy, creative, and data to drive predictable revenue for local businesses."
  },
  {
    question: "Can you plug into the way my team already sells?",
    answer: "Yes. We don't just generate leads; we advise on the entire sales flow, integrating with CRM tools and providing coaching on follow-up speed and scripts to maximize closed deals."
  },
  {
    question: "Is this suitable for my service business?",
    answer: "We specialize in service-based businesses like home services, health & wellness, and contractors whose growth depends on inbound inquiries and booked appointments."
  },
  {
    question: "What makes your offers different?",
    answer: "We engineer time-bound, low-friction offers aligned to urgent customer needs. Instead of generic ads, we create specific reasons to act now, increasing conversion rates."
  },
  {
    question: "How do you handle ad creative?",
    answer: "We design and test scroll-stopping visuals and headlines. We continuously rotate creatives to combat fatigue and improve click-through rates, ensuring your brand stays fresh."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-visible shadow-sm">
       {/* Background Grid & Noise */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none" />
       
       {/* Top Soft Gradient */}
       <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

       {/* Orbital Glyphs */}
       <div className="absolute top-1/4 right-0 w-96 h-96 border border-gold/10 rounded-full translate-x-1/2 pointer-events-none" />
       <div className="absolute bottom-0 left-20 w-64 h-64 border border-gold/5 rounded-full border-dashed pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-12">
           {/* Left Column: Heading */}
          <div className="md:sticky md:top-32 self-start">
            <h2 className="text-4xl md:text-7xl font-serif italic text-black mb-8 leading-[0.9]">
              Common <br />
              <span className="text-gold font-oswald font-bold tracking-tighter uppercase text-6xl md:text-9xl block">Questions</span>
            </h2>
            <p className="text-gray-500 max-w-sm mb-12 font-serif italic text-lg">
               Everything you need to know about how we scale your legacy.
            </p>
            <a 
              href="https://calendly.com/alexandermenginquiries/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-oswald font-bold uppercase tracking-widest text-sm hover:bg-gold transition-colors"
            >
               Ask us anything
            </a>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          {/* Right Column: FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Active Highlight Bar */}
                {activeIndex === index && (
                   <motion.div 
                     layoutId="activeHighlight"
                     className="absolute -inset-x-6 inset-y-0 bg-gold/5 rounded-2xl -z-10"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                   />
                )}
                
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-6 text-left border-b border-gray-100 group-last:border-none cursor-pointer hover:bg-gray-50/50 transition-colors px-2 -mx-2 rounded-lg"
                >
                  <span className={`text-xl md:text-2xl font-space transition-colors duration-300 ${activeIndex === index ? 'font-bold text-black' : 'font-medium text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <span className={`ml-4 transform transition-transform duration-300 text-gold ${activeIndex === index ? 'rotate-180' : ''}`}>
                    {activeIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 text-gray-600 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
