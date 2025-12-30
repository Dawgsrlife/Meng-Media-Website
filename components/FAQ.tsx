'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does Meng Media help with marketing?",
    answer: "Meng Media provides data-driven marketing tools that automate campaigns, segment audiences, and personalize outreach to boost engagement and sales."
  },
  {
    question: "Can I manage my CRM within Meng Media services?",
    answer: "Yes, we integrate fully with your CRM to track customer interactions, manage leads, and build lasting relationships."
  },
  {
    question: "Is Meng Media suitable for large-scale events?",
    answer: "Absolutely. Our strategies are built to handle high-volume ticket sales, complex booking flows, and massive data operations with ease."
  },
  {
    question: "Does Meng Media integrate with my stack?",
    answer: "We seamlessly integrate with popular payment gateways, social media platforms, and analytics tools."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white text-black py-32 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Header */}
        <div className="h-fit">
           <h2 className="text-5xl md:text-7xl font-serif italic font-black uppercase leading-none mb-8 tracking-tighter break-words">
              Questions? <br/> We&apos;ve got <br/> you.
           </h2>
           <p className="text-xl text-gray-600 mb-8 font-light max-w-md">
              Ready to revolutionize how you sell experiences? It&apos;s not too good to be true. It&apos;s Meng Media.
           </p>
           <a 
             href="https://calendly.com"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block border border-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors cursor-pointer uppercase tracking-widest text-sm"
           >
              Book a Call
           </a>
        </div>

        {/* Accordion */}
        <div className="space-y-4 pt-8 lg:pt-0">
           <h3 className="text-3xl font-serif italic font-bold mb-8">How does Meng Media work?</h3>
           <p className="text-gray-600 mb-12 leading-relaxed text-lg font-light">
              You&apos;ll first need to create an account. Then activate your dashboard, enable payments, and watch your sales grow. No more dealing with rigid systems.
           </p>

           <div className="border-t border-black/20">
              {faqs.map((faq, index) => (
                 <div key={index} className="border-b border-black/20">
                    <button 
                       onClick={() => setOpenIndex(openIndex === index ? null : index)}
                       className="w-full py-6 flex justify-between items-center text-left transition-all hover:bg-gray-50 px-4 rounded-lg group cursor-pointer relative z-10"
                    >
                       <span className={`text-xl md:text-2xl font-serif italic flex-1 transition-colors duration-300 ${openIndex === index ? 'text-black font-bold' : 'text-gray-500 group-hover:text-black'}`}>
                          {faq.question}
                       </span>
                       <div className={`ml-4 flex-shrink-0 transition-colors duration-300 ${openIndex === index ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                          {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                       </div>
                    </button>
                    <AnimatePresence>
                       {openIndex === index && (
                          <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: 'auto', opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden"
                          >
                             <p className="pb-8 text-gray-600 text-lg leading-relaxed px-4 -mx-4 font-light">
                                {faq.answer}
                             </p>
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
