import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -15% 0px', // Triggers slightly before element enters view
      threshold: 0.05,
    };

    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-element');
    
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};