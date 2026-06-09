import React from 'react';

export const Footer: React.FC = () => {

  const handleNavClick = (link: string) => {
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1A102F] border-t border-white/5 py-15 px-6 sm:px-12 lg:px-20 text-white select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Name Branding & Copyright */}
        <div className="flex flex-col items-center sm:items-start space-y-1 text-center sm:text-left">
          <div 
            className="text-lg font-black tracking-tight cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <span>Faith</span>
            <span className="text-[#E20098]">Portfolio</span>
          </div>
          
      
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/faith-hue"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[#A855F7] transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608.265.432.432 1.084.946 1.23 1.085 1.157 2.074.822 2.58.629.092-.66.357-1.11.65-1.365-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/faith-ysabelle-del-rosario/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[#A855F7] transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:faithysabelleee@gmail.com"
            className="text-white/50 hover:text-[#A855F7] transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Send Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};