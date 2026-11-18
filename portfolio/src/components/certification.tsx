import React, { useState } from 'react';
import { CertificationModal } from './CertificationModal';
import type { CertificationItem } from './CertificationModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Certification: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  useScrollReveal();

  const certData: CertificationItem[] = [
    {
      id: 1,
      issuer: 'Pearson',
      title: 'IT Specialist - Database',
      date: 'December 2025',
      imageUrl: 'images/Database Certification_Del Rosario.png',
      description:
        'Demonstrated foundational knowledge of relational database design and querying using SQL-based systems such as MySQL, Microsoft SQL Server, and Oracle.',
      skills: ['Core Database Concepts', 'SQL', 'Database Administration', 'Data Manipulation'],
    },
    {
      id: 2,
      issuer: 'IBM',
      title: 'Project Management Fundamentals',
      date: 'November 2026',
      imageUrl: 'images/Project Management Certification_Del Rosario.png',
      description:
        'Gained understanding of project management principles, including planning, execution, monitoring, and closure of projects.',
      skills: ['Project Management Life Cycle', 'Project Management', 'Stakeholder Management', 'Agile Methodologies'],
    },
    {
      id: 3,
      issuer: 'Microsoft',
      title: 'Software Testing Fundamentals and Methodologies',
      date: 'November 2026',
      imageUrl: 'images/Software Testing Fundamentals and Methodologies.jpg',
      description:
        'Learned the fundamentals of software testing, including test planning, execution, and analysis using various testing methodologies.',
      skills: ['Software Quality Assurance', 'Acceptance Testing', 'Behavior-Driven Development', 'Functional Testing', 'User Acceptance Testing (UAT)', 'Test Planning'],
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#1A102F] text-white px-6 sm:px-12 lg:px-20 py-24 flex items-center relative">
      <div className="max-w-6xl mx-auto w-full space-y-12">

        {/* Section Heading */}
        <div className="space-y-1 reveal-element">
          <h2 className="text-5xl sm:text-6xl font-cs_gordon font-black uppercase tracking-tight text-[#E20098]">
            Certifications
          </h2>
          <p className="text-[#FCE4EC] text-xs sm:text-sm font-medium tracking-widest uppercase opacity-80">
            Industry-recognized credentials that validate my expertise in various technical domains.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4 reveal-element delay-150">
          {certData.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              aria-label={`View certificate: ${cert.title}`}
              className="group flex items-center justify-between gap-4 text-left rounded-3xl px-7 py-7 border bg-[#22152B]/40 border-white/5 cursor-pointer select-none transition-all duration-300 ease-out hover:border-[#A855F7]/60 hover:shadow-[0_12px_30px_rgba(168,85,247,0.2)] hover:-translate-y-1.5 focus-visible:border-[#A855F7]/60 focus-visible:-translate-y-1.5 focus-visible:outline-none"
            >
              <div className="min-w-0 space-y-3">
                <span className="inline-block px-3 py-0.5 rounded-xl text-xs font-semibold tracking-wide border border-purple-500/30 bg-purple-500/10 text-purple-300">
                  {cert.issuer}
                </span>
                <h3 className="text-xl font-bold tracking-wide text-[#F5E1E6] group-hover:text-[#A855F7] group-focus-visible:text-[#A855F7] transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#B8C4D9]">
                  {cert.date}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline text-xs font-semibold tracking-wide text-[#A855F7] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-300 ease-out">
                  View Certificate
                </span>
                <span className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 text-white/70 transition-all duration-200 group-hover:border-[#A855F7] group-hover:text-[#A855F7] group-hover:shadow-[0_0_12px_rgba(168,85,247,0.35)] group-focus-visible:border-[#A855F7] group-focus-visible:text-[#A855F7]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Conditionally mount the modal */}
      {selectedCert && (
        <CertificationModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
};
