import React, { useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  carouselImages?: string[];
  status?: 'Deployed' | 'In Progress' | 'Completed' | 'Under Maintenance';
  liveUrl?: string;
}

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = project.carouselImages || [project.imageUrl];
  const activeMediaUrl = slides[currentSlide];
  
  // Dynamic string check to detect video formats (.mp4) inside the slideshow track array
  const isVideo = activeMediaUrl.endsWith('.mp4');

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="bg-[#22152B] border border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-2 relative max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 text-white/50 hover:text-[#E20098] bg-[#1F1235]/60 rounded-full border border-white/5 hover:border-[#E20098]/30 transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Left Side: Carousel Slider Frame */}
        <div className="w-full aspect-[4/3] md:h-full bg-black/60 relative flex items-center justify-center group/slider border-b md:border-b-0 md:border-r border-white/5 p-4 min-h-[300px] md:min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent z-0" />
          
          {/* Render video container layout conditionally, otherwise fall back to image element rendering */}
          {isVideo ? (
            <video
              key={activeMediaUrl} // Re-mounts node properly on track slides shift change triggers
              src={activeMediaUrl}
              className="max-w-full max-h-full object-contain select-none z-10 rounded-xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              autoPlay
              loop
              muted
              controls
              playsInline
            />
          ) : (
            <img 
              src={activeMediaUrl} 
              alt={`${project.title} slide view`}
              className="max-w-full max-h-full object-contain select-none transition-all duration-300 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10"
            />
          )}

          {slides.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-3 p-2 rounded-full bg-[#1A102F]/80 text-white border border-white/10 hover:text-[#A855F7] transition-all cursor-pointer opacity-80 md:opacity-0 md:group-hover/slider:opacity-100 z-20 shadow-md"
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-3 p-2 rounded-full bg-[#1A102F]/80 text-white border border-white/10 hover:text-[#A855F7] transition-all cursor-pointer opacity-80 md:opacity-0 md:group-hover/slider:opacity-100 z-20 shadow-md"
              >
                →
              </button>

              {/* Dots Indicators */}
              <div className="absolute bottom-4 flex gap-1.5 z-20 bg-[#1A102F]/40 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/5">
                {slides.map((_, index) => (
                  <span 
                    key={index} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-5 bg-[#E20098]' : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="p-8 flex flex-col justify-between space-y-6 md:max-h-[500px] overflow-y-auto">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-xl text-xs font-semibold tracking-wide border border-purple-500/30 bg-purple-500/10 text-purple-300">
                {project.category}
              </span>
              {project.status && (
                <span className={`px-2.5 py-0.5 rounded-xl text-xs font-bold tracking-wide border ${
                  project.status === 'Deployed'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                }`}>
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-cs_gordon">
              {project.title}
            </h3>

            <div className="h-px bg-white/5 w-full" />

            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          <div className="text-[11px] text-white/40 italic font-light pt-4 border-t border-white/5">
            * Gallery contains interactive layout presentation views of the {project.category}.
          </div>
        </div>

      </div>
    </div>
  );
};