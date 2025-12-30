import React, { useState, useEffect } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: 'privacy' | 'terms' | 'cookies';
}

export default function LegalModal({ isOpen, onClose, activeTab = 'privacy' }: LegalModalProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    if (isOpen) {
      setCurrentTab(activeTab);
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated December 29, 2025',
      blocks: [
        {
          head: 'Information we collect',
          body: 'We collect personal information that you provide when you use our services, such as your name, contact details, and any details you choose to share when booking a call.'
        },
        {
          head: 'How we use your information',
          body: 'We use your information to provide and improve our services, respond to your inquiries, and keep your data secure.'
        },
        {
          head: 'Your choices',
          body: 'You can request access, updates, or deletion of your information at any time by contacting support.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      updated: 'Last updated December 29, 2025',
      blocks: [
        {
          head: 'Acceptance of Terms',
          body: 'By accessing and using our website, you agree to comply with these terms. If you do not agree, please do not use our services.'
        },
        {
          head: 'Intellectual Property',
          body: 'All content on this site, including text, graphics, logos, and code, is the property of Meng Media and is protected by copyright laws.'
        },
        {
          head: 'Limitation of Liability',
          body: 'Meng Media shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our services.'
        }
      ]
    },
    cookies: {
      title: 'Cookie Policy',
      updated: 'Last updated December 29, 2025',
      blocks: [
        {
          head: 'What are cookies?',
          body: 'Cookies are small text files stored on your device that help us understand how you use our site and improve your experience.'
        },
        {
          head: 'How we use cookies',
          body: 'We use cookies for analytics, performance measurement, and to remember your preferences.'
        },
        {
          head: 'Managing cookies',
          body: 'You can control or delete cookies through your browser settings. However, disabling cookies may affect some site functionality.'
        }
      ]
    }
  };

  const currentContent = content[currentTab as keyof typeof content];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Shell */}
      <div className="relative w-[95%] max-w-5xl h-[80vh] md:h-[600px] bg-[#08080c]/95 border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-slide-up bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:hidden z-20 text-gray-500 hover:text-white"
        >
          ✕
        </button>

        {/* Left Nav */}
        <aside className="w-full md:w-64 bg-black/40 border-b md:border-b-0 md:border-r border-white/10 p-6 flex-shrink-0 flex flex-col gap-6 overflow-x-auto md:overflow-visible">
          <div className="hidden md:block">
            <h2 className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-2">Meng Media</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Here’s how we handle your data in plain language.
            </p>
          </div>

          <nav className="flex md:flex-col gap-2">
            {(['privacy', 'terms', 'cookies'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`text-left text-xs uppercase tracking-wider py-2 px-3 rounded-lg transition-all whitespace-nowrap ${
                  currentTab === tab 
                    ? 'bg-gold/10 text-gold font-bold' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'privacy' ? 'Privacy Policy' : tab === 'terms' ? 'Terms of Service' : 'Cookie Policy'}
              </button>
            ))}
          </nav>
        </aside>

        {/* Listen for keyboard ESC */}
        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">
          <header className="p-8 border-b border-white/10 flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-serif italic tracking-wide text-white mb-2">{currentContent.title}</h1>
              <p className="text-xs text-gray-500">{currentContent.updated}</p>
            </div>
            
            {/* Desktop Close */}
            <button 
              onClick={onClose}
              className="hidden md:block text-gray-500 hover:text-white transition-colors text-xl leading-none cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
          </header>

          <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
            {currentContent.blocks.map((block, i) => (
              <section key={i} className="mb-8 last:mb-0">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{block.head}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                  {block.body}
                </p>
              </section>
            ))}
          </div>

          <footer className="p-6 border-t border-white/10 flex justify-between items-center bg-black/20">
            <div className="text-xs text-gray-500">
              Questions? <a href="#contact" onClick={onClose} className="text-gold hover:underline cursor-pointer">Contact Support</a>
            </div>
            <button 
              onClick={onClose}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
            >
              Dismiss
            </button>
          </footer>
        </main>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { bg: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  );
}
