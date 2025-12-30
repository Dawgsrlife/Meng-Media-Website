'use client';
import { useFooterModal } from '../hooks/useFooterModal';
import AppleFooterModal from './AppleFooterModal';

export default function Footer() {
  const { isOpen, activeTab, openModal, closeModal } = useFooterModal();

  return (
    <footer className="bg-black border-t border-white/10 py-20 text-white font-sans">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-2 font-serif italic tracking-wide text-white">Meng Media</h2>
            <p className="text-xl text-gray-400 font-light font-sans tracking-widest uppercase text-xs">Performance, Refined.</p>
          </div>
          <div className="flex flex-col md:items-end justify-center">
             <p className="text-gray-500">© 2025 Meng Media</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-8 text-gray-500 text-sm border-t border-white/10 pt-8 uppercase tracking-widest">
           <button onClick={() => openModal('terms')} className="hover:text-white transition-colors cursor-pointer">Terms</button>
           <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy</button>
           <button onClick={() => openModal('cookies')} className="hover:text-white transition-colors cursor-pointer">Cookies</button>
        </div>
      </div>

      <AppleFooterModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        activeTab={activeTab} 
      />
    </footer>
  );
}
