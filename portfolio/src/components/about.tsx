import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal'; // Import custom trigger hook

export const About: React.FC = () => {
  useScrollReveal(); // Initialize the intersection listener coordinates

  const tools = [
    'HTML', 'CSS', 'Tailwind CSS', 'React', 'TypeScript', 
    'Next.js', 'WordPress', 'Elementor', 'Canva', 'Figma', 'Adobe XD'
  ];

  const qaSkills = [
    'API Test', 'Functional Testing', 'Regression Testing', 
    'Test Case Design', 'Bug Reporting', 'SDLC', 'Jira', 'Confluence', 'JMeter', 'Postman'
  ];

  const education = [
    {
      role: 'Bachelor of Science in Computer Science',
      institution: 'University of Makati',
      duration: 'Expected Graduation: 2026',
      details: 'Specializing in Application Development. Actively working on academic research, software projects, and automated system optimizations.'
    }
  ];

  const experience = [
    {
      role: 'Software Developer Intern',
      institution: 'ORTADEL Technologies Corporation',
      duration: 'Feb 2026 – May 2026',
      details: 'Designed high-fidelity UI/UX prototypes in Figma and developed responsive React and Tailwind CSS components for HRIS Leave Management and Payroll modules, improving requirement validation, system functionality, and frontend scalability. Conducted functional, regression, and smoke testing while producing comprehensive QA documentation, identifying critical defects and enhancing system stability and deployment readiness.'
    },
    {
      role: 'WordPress Website Developer',
      institution: 'Institute of Arts and Design (IAD)',
      duration: 'Jan 2025 - May 2026',
      details: 'Developed and deployed a WordPress website using Greenshift and Popup Maker, transforming requirements into a functional and user-friendly platform while enhancing accessibility and overall user experience. Designed UI prototypes in Figma and performed website maintenance and optimization, improving design consistency, performance stability, and cross-page user experience.'
    },
    {
      role: 'WordPress Website Developer',
      institution: 'UMak Educational Foundation (UMEDFI)',
      duration: 'Aug 2025 - May 2026',
      details: 'Re-developed and deployed a multi-page WordPress website by translating stakeholder requirements into functional user-facing features, improving accessibility, usability, and overall system reliability. Managed website maintenance, feature enhancements, and technical documentation, enhancing system stability, scalability, and long-term project delivery support.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#1A102F] text-white px-6 sm:px-12 lg:px-20 py-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        
        {/* Section Heading (Slides down immediately) */}
        <div className="space-y-4 reveal-element">
          <h2 className="text-5xl sm:text-6xl font-cs_gordon font-black uppercase tracking-tight text-[#E20098]">
            What I Do
          </h2>
          <p className="text-gray-300 text-base  leading-relaxed max-w-5xl tracking-wide font-montserrat font-normal">
            A Computer Science student specializing in Frontend Development and UI/UX Design, with 
            experience in software quality assurance and technical documentation. Skilled in creating branding 
            assets and high-fidelity prototypes using Figma and Canva, and developing responsive web and 
            mobile applications using React, Tailwind CSS, WordPress, and Kotlin. Experienced in business 
            requirements analysis, software testing, and project documentation throughout the Software 
            Development Lifecycle (SDLC), with a strong focus on delivering user-centered and reliable digital 
            solutions.
          </p>
        </div>

        {/* Timelines Layout Grid (Slides down with a 150ms delay) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 border-t border-white/5 pt-12 reveal-element delay-150">
          
          {/* Work Experience Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-montserrat font-bold tracking-tight text-[#F5E1E6] uppercase">
              Experience
            </h3>
            <div className="relative border-l border-white/10 pl-6 space-y-8 ml-2">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white/20 border border-[#1A102F] group-hover:bg-[#A855F7] group-hover:scale-125 transition-all duration-200 shadow-[0_0_8px_rgba(168,85,247,0)] group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  
                  <div className="space-y-1.5 font-montserrat">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#B8C4D9]">
                      {exp.duration}
                    </span>
                    <h4 className="text-lg font-bold tracking-wide text-[#F5E1E6] group-hover:text-[#A855F7] transition-colors duration-200">
                      {exp.role}
                    </h4>
                    <p className="text-base font-montserrat font-medium text-[#B8C4D9]">
                      {exp.institution}
                    </p>
                    <p className="text-sm sm:text-sm text-gray-300 font-normal leading-relaxed pt-1">
                      {exp.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8 font-montserrat">
            <h3 className="text-xl font-montserrat font-bold tracking-tight text-[#F5E1E6] uppercase">
              Education
            </h3>
            <div className="relative border-l border-white/10 pl-6 space-y-8 ml-2">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white/20 border border-[#1A102F] group-hover:bg-[#A855F7] group-hover:scale-125 transition-all duration-200 shadow-[0_0_8px_rgba(168,85,247,0)] group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  
                  <div className="space-y-1.5">
                    <span className="text-xs font-montserrat font-semibold tracking-wider uppercase text-[#B8C4D9]">
                      {edu.duration}
                    </span>
                    <h4 className="text-lg font-bold tracking-wide text-[#F5E1E6] group-hover:text-[#A855F7] transition-colors duration-200">
                      {edu.role}
                    </h4>
                    <p className="text-sm font-montserrat font-medium text-[#B8C4D9]">
                      {edu.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Skills Lists Layout Grid (Slides down with a 300ms delay) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-t border-white/5 pt-12 reveal-element delay-300">
          
          {/* Left Sub-column: Design and Development Tools */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-montserrat font-bold tracking-tight text-[#F5E1E6] uppercase">
              Design and Development Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-xs sm:text-sm font-medium tracking-wide text-gray-400 select-none cursor-default transition-all duration-200 ease-out hover:bg-transparent hover:border-[#A855F7] hover:text-[#A855F7] hover:shadow-[0_0_12px_rgba(168,85,247,0.35)] hover:-translate-y-0.5"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Right Sub-column: QA Skills */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-montserrat font-bold tracking-tight text-[#F5E1E6] uppercase">
              Quality Assurance Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {qaSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-xs sm:text-sm font-medium tracking-wide text-gray-400 select-none cursor-default transition-all duration-200 ease-out hover:bg-transparent hover:border-[#A855F7] hover:text-[#A855F7] hover:shadow-[0_0_12px_rgba(168,85,247,0.35)] hover:-translate-y-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};