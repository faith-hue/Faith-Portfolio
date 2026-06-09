import React, { useState, useEffect, useRef } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Track if a tab click triggered a scroll to temporarily ignore observer updates
  const isClickScrolling = useRef(false);

  const navLinks = ['Home', 'About', 'Projects'];

  useEffect(() => {
    // 1. Changes navbar background opacity on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Intersection Observer to dynamically track active sections on scroll
    const observerOptions = {
      root: null, 
      rootMargin: '-30% 0px -60% 0px', 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // If the user clicked a link, skip updating state from observer until scroll settles
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const matchingLink = navLinks.find(
            (link) => link.toLowerCase() === sectionId
          );
          if (matchingLink) {
            setActiveTab(matchingLink);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Tell the observer to watch each section element wrapper
    navLinks.forEach((link) => {
      const element = document.getElementById(link.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (link: string) => {
    setActiveTab(link);
    setIsMenuOpen(false); 

    const targetId = link.toLowerCase();
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Temporarily lock observer state updates to prevent flickering mid-scroll
      isClickScrolling.current = true;

      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Unlock observer updates right after smooth scroll animation completes
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-[#1A102F]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Left Side: Branding Logo */}
        <div 
          className="text-xl font-monserrat font-black tracking-tight cursor-pointer select-none z-50" 
          onClick={() => handleNavClick('Home')}
        >
          <span className="text-[#F5E1E6]">Faith</span>
          <span className="text-[#E20098]">Portfolio</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 md:space-x-12">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNavClick(link)}
                className={`text-sm md:text-base font-medium tracking-wide transition-all duration-200 hover:text-[#A855F7] cursor-pointer bg-transparent border-none outline-none ${
                  activeTab === link ? 'text-[#E20098]' : 'text-[#F5E1E6]'
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-[#E20098] p-2 focus:outline-none z-50 cursor-pointer transition-colors duration-200"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              // X Close Icon
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger Icon
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Drawer Overlay Panel */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1A102F]/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-out md:hidden overflow-hidden ${
          isMenuOpen ? 'max-h-[250px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <ul className="px-6 sm:px-12 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <li key={link} className="w-full">
              <button
                onClick={() => handleNavClick(link)}
                className={`w-full text-left py-2 text-base font-medium tracking-wide transition-all duration-200 bg-transparent border-none outline-none ${
                  activeTab === link ? 'text-[#E20098] pl-2 border-l-2 border-[#E20098]' : 'text-white/70'
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};