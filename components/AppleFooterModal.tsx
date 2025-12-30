'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

interface AppleFooterModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: string;
}

export default function AppleFooterModal({ isOpen, onClose, activeTab = 'terms' }: AppleFooterModalProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTab, setCurrentTab] = useState(activeTab);
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (!mounted || !modalRef.current) return;

    if (isOpen) {
      // Apple-style subtle slide-up - more defined
      gsap.set(modalRef.current, { y: 40, opacity: 0 });
      gsap.to(modalRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power4.out'
      });
    } else {
      gsap.to(modalRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in'
      });
    }
  }, [isOpen, mounted]);

  const handleClose = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  }, [onClose]);

  const content: Record<string, { title: string; date: string; sections: { h2: string; p: string }[] }> = {
    terms: {
      title: "Terms of Service",
      date: "Last updated December 29, 2025",
      sections: [
        { h2: "Acceptance of Terms", p: "By accessing and using our platform, you agree to be bound by these terms of service and our Privacy Policy." },
        { h2: "User Responsibilities", p: "You are responsible for maintaining the confidentiality of your account and password." },
        { h2: "Termination", p: "We may terminate or suspend access to our service immediately, without prior notice or liability." }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      date: "Last updated December 29, 2025",
      sections: [
        { h2: "Information We Collect", p: "We collect personal information that you provide to us when you use our services." },
        { h2: "How We Use Your Information", p: "We use your information to provide, improve, and protect our services." }
      ]
    },
    cookies: {
      title: "Cookie Policy",
      date: "Last updated December 29, 2025",
      sections: [
        { h2: "What Are Cookies?", p: "Cookies are small text files that are stored on your device when you visit a website." },
        { h2: "Cookie Management", p: "You can manage cookies through your browser settings at any time." }
      ]
    }
  };

  const currentContent = content[currentTab] || content.terms;

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal Container */}
      <div 
        ref={modalRef}
        className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className={`bg-dark-card border border-gold/30 rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.1)] overflow-hidden w-full max-w-3xl lg:max-w-4xl max-h-[85vh] mx-4 pointer-events-auto transform transition-transform duration-300 relative ${
           isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
        }`}>
          {/* Gold Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-white/10 flex gap-2 overflow-x-auto justify-center relative z-10">
            {Object.keys(content).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full text-sm font-serif italic transition-all whitespace-nowrap cursor-pointer ${
                  currentTab === tab
                    ? 'bg-gold text-black font-bold shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setCurrentTab(tab)}
              >
                {content[tab].title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 max-h-[60vh] overflow-y-auto relative z-10 custom-scrollbar">
            <header className="mb-8 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-serif italic mb-2">
                {currentContent.title}
              </h1>
              <p className="text-xs text-gold/70 uppercase tracking-widest">
                {currentContent.date}
              </p>
            </header>

            <div className="space-y-8">
              {currentContent.sections.map((section, i) => (
                <section key={i} className="space-y-3">
                  <h2 className="text-xl lg:text-2xl font-bold text-white font-serif">
                    {section.h2}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-400 font-light">
                    {section.p}
                  </p>
                </section>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6 pt-4 border-t border-white/10 bg-black/20 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <p className="text-sm text-gray-500">
              Questions? <a href="mailto:alexandermenginquiries@gmail.com" className="text-gold hover:underline font-medium">Contact support</a>
            </p>
            
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button 
                className="px-6 py-2.5 text-sm font-bold text-black bg-white hover:bg-gold hover:text-white rounded-full transition-all duration-300 cursor-pointer shadow-lg"
                onClick={handleClose}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
