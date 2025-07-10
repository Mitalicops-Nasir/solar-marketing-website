// ScrollHandler.tsx
import React, { useEffect } from 'react';

const ScrollHandler: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      const gradient = document.querySelector('.gradient') as HTMLElement | null;

      if (!nav || !gradient) return;

      const isScrolled = window.scrollY > 60;

      nav.classList.toggle('sticky', isScrolled);
      gradient.style.zIndex = isScrolled ? '1' : '0';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollHandler;
