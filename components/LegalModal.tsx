'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: string;
}

export default function LegalModal({ isOpen, onClose, activeTab = 'terms' }: LegalModalProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTab, setCurrentTab] = useState(activeTab);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (!mounted || !modalRef.current) return;

    if (isOpen) {
      // Easol-style modal entrance
      gsap.fromTo(modalRef.current, 
        { 
          scale: 0.8, 
          opacity: 0, 
          y: 50 
        },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          ease: 'back.out(1.7)' 
        }
      );
    }
  }, [isOpen, mounted]);

  const tabs = [
    { id: 'terms', title: 'Terms of Service', content: 'Your full terms content here...' },
    { id: 'privacy', title: 'Privacy Policy', content: 'Your privacy policy content...' },
    { id: 'cookies', title: 'Cookie Policy', content: 'Your cookie policy content...' }
  ];

  const handleClose = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!modalRef.current) return;
    
    gsap.to(modalRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose
    });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-50 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto z-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-dark-card border border-gold/30 rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.1)] p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Gold Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4 relative z-10">
            <div className="flex gap-2 md:gap-4 border-b border-white/10 pb-6 overflow-x-auto w-full md:w-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 md:px-6 py-2 rounded-full font-serif italic text-lg transition-all whitespace-nowrap ${
                    currentTab === tab.id
                      ? 'bg-gold text-black shadow-lg scale-105 font-bold'
                      : 'text-gray-400 hover:text-white hover:scale-105'
                  }`}
                  onClick={() => setCurrentTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="group relative w-10 h-10 rounded-full border border-white/20 hover:border-gold/50 transition-all duration-300 flex items-center justify-center cursor-pointer hover:rotate-90"
              aria-label="Close modal"
            >
              <svg 
                className="w-4 h-4 text-white group-hover:text-gold transition-colors duration-200"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed relative z-10">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif italic">
                {tabs.find(t => t.id === currentTab)?.title}
              </h1>
              <p className="text-sm text-gold/80 mb-8 uppercase tracking-widest">
                Last updated <span className="text-white">December 29, 2025</span>
              </p>
              
              <div className="space-y-6 font-light">
                <div>
                  <h2 className="text-xl font-bold text-white mb-3 font-serif">1. Acceptance of Terms</h2>
                  <p>By accessing and using our platform, you agree to be bound by these terms regarding our freelance marketing services...</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-3 font-serif">2. User Responsibilities</h2>
                  <p>You are responsible for maintaining the confidentiality of your account details and strategy documents...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center relative z-10">
            <p className="text-sm text-gray-500">
              Need clarification? <a href="mailto:support@mengmedia.com" className="text-gold hover:underline">Contact legal</a>
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handleClose}
                className="px-6 py-2 border border-white/20 hover:border-white/40 rounded-full text-white text-sm hover:bg-white/5 transition-all cursor-pointer"
              >
                Close
              </button>
              <button 
                className="px-6 py-2 bg-white text-black hover:bg-gold hover:text-white font-bold rounded-full text-sm shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
