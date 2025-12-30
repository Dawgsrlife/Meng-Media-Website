import { useState } from 'react';

export function useFooterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('terms');

  const openModal = (tab = 'terms') => {
    setActiveTab(tab);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    activeTab,
    openModal,
    closeModal
  };
}
