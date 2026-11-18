import React, { useEffect, useRef } from 'react';

export interface CertificationItem {
  id: number;
  issuer: string;
  title: string;
  date: string;
  imageUrl: string;
  description?: string;
  skills?: string[];
}

interface CertificationModalProps {
  cert: CertificationItem;
  onClose: () => void;
}

export const CertificationModal: React.FC<CertificationModalProps> = ({ cert, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, lock page scroll while open, focus the close button
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
        className="bg-[#22152B] border border-white/10 w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-[1.6fr_1fr] relative max-h-[90vh] overflow-y-auto md:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-30 p-2 text-white/50 hover:text-[#E20098] bg-[#1F1235]/60 rounded-full border border-white/5 hover:border-[#E20098]/30 transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side: Certificate Image */}
        <div className="w-full bg-black/60 flex items-center justify-center p-4 min-h-[260px] md:min-h-[420px] border-b md:border-b-0 md:border-r border-white/5">
          <img
            src={cert.imageUrl}
            alt={`${cert.title} certificate`}
            className="max-w-full max-h-[70vh] object-contain select-none rounded-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Right Side: Details */}
        <div className="p-8 flex flex-col justify-between space-y-6 md:max-h-[560px] overflow-y-auto">
          <div className="space-y-4">
            <h3
              id="cert-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-cs_gordon pr-10 pt-6 md:pt-8"
            >
              {cert.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-xl text-xs font-semibold tracking-wide border border-purple-500/30 bg-purple-500/10 text-purple-300">
                {cert.issuer}
              </span>
              <span className="px-3 py-0.5 rounded-xl text-xs font-semibold tracking-wide border border-white/10 bg-white/5 text-[#B8C4D9]">
                {cert.date}
              </span>
            </div>

            {cert.description && (
              <>
                <div className="h-px bg-white/5 w-full" />
                <p className="text-gray-300 text-sm leading-relaxed font-normal">
                  {cert.description}
                </p>
              </>
            )}
          </div>

          {cert.skills && cert.skills.length > 0 && (
            <div className="pt-4 border-t border-white/5">
              <ul className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 rounded-xl border border-white/10 bg-white/5 text-xs font-medium tracking-wide text-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
