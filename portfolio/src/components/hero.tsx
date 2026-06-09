import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal'; // 1. Import your custom hook

export const Hero: React.FC = () => {
  useScrollReveal(); // 2. Initialize the scroll observer engine coordinates

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    window.open('/Del Rosario, Faith Ysabelle_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full min-h-screen text-white px-6 sm:px-12 lg:px-20 py-24 flex items-center relative">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 md:space-y-8 select-none z-10">
          
          {/* Main Name Headers (Slides down immediately) */}
          <div className="space-y-0.5 md:space-y-1 reveal-element">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cs_gordon font-black tracking-tight uppercase text-[#E20098] leading-none">
              Faith
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cs_gordon font-black tracking-tight uppercase text-[#F5E1E6] leading-none">
              Del Rosario
            </h2>
          </div>

          {/* Roles Tagline (Slides down with a 75ms stagger delay) */}
          <div className="text-sm sm:text-base md:text-lg font-montserrat font-medium tracking-wide text-white/80 flex flex-wrap items-center gap-x-3 gap-y-1.5 reveal-element delay-75">
            <span>UI/UX Designer</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span>Front End Developer</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span>Software QA</span>
          </div>

          {/* Action Buttons & Socials Row (Slides down with a 150ms stagger delay) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2 reveal-element delay-150">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleViewProjects}
                className="px-7 py-2.5 rounded-xl border border-white/20 bg-purple-950/20 text-xs sm:text-sm font-montserrat font-medium tracking-wide text-[#B8C4D9] select-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#A855F7] hover:border-[#A855F7] hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:-translate-y-0.5"
              >
                View Projects
              </button>
              <button
                onClick={handleDownloadResume}
                className="px-7 py-2.5 rounded-xl border border-white/20 bg-purple-950/20 text-xs sm:text-sm font-montserrat font-medium tracking-wide text-[#B8C4D9] select-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#A855F7] hover:border-[#A855F7] hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:-translate-y-0.5"
              >
                Download Resume
              </button>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-8 w-px bg-white/10" />

            {/* Social Links Row */}
            <div className="flex items-center space-x-5">
              <a
                href="https://github.com/faith-hue" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#A855F7] transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608.265.432.432 1.084.946 1.23 1.085 1.157 2.074.822 2.58.629.092-.66.357-1.11.65-1.365-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/faith-ysabelle-del-rosario/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#A855F7] transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="mailto:faithysabelleee@gmail.com" 
                className="text-white/60 hover:text-[#A855F7] transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Send Email"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image (Slides down with a 300ms stagger delay) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative h-full min-h-[350px] lg:min-h-[450px] reveal-element delay-300">
          <div className="relative w-64 sm:w-80 md:w-96 lg:w-full max-w-md aspect-[4/5] flex items-end justify-center">
            
            {/* The Border & Backing Frame Layer */}
            <div className="absolute bottom-0 w-full h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.15)] pointer-events-none z-0" />
            
            <img
              src="Faith.png" 
              alt="Faith Del Rosario"
              className="w-[90%] max-h-[105%] h-auto object-contain object-bottom block drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] select-none pointer-events-none z-10 relative bottom-0"
            />
          </div>
        </div>

      </div>
    </div>
  );
};