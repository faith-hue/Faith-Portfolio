import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

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

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useScrollReveal();

  const projectData: ProjectItem[] = [
    {
      id: 1,
      title: 'Institute of Arts and Design Website',
      category: 'Website',
      description: 'Designed and developed a website to showcase the creative works and academic offerings of the Institute of Arts and Design, providing an engaging platform for students, faculty, and visitors to explore the vibrant world of art and design education.',
      imageUrl: 'images/iad.png',
      carouselImages: [ 'videos/iad_preview.mp4' ],
      status: 'Under Maintenance',
    },
    {
      id: 2,
      title: 'UMak Educational Foundation Website',
      category: 'Website',
      description: 'Designed and developed a website to showcase the educational initiatives and community outreach programs of the UMak Educational Foundation, providing a platform for stakeholders to engage with the organization\'s mission and impact.',
      imageUrl: 'images/umedfi.png',
      status: 'Deployed', 
      liveUrl: 'https://umedfi.org/', 
    },
    {
      id: 3,
      title: 'HeronWellnest',
      category: 'Web-Application',
      description: 'A student mental well-being web-application designed to provide a supportive and accessible platform for students to manage their mental health, offering resources, self-assessment tools, and connections to counseling services in a user-friendly interface.',
      imageUrl: 'images/heronwellnest.png',
      carouselImages: [ 'images/loginheron.png', 'images/herondashboard.png', 'images/boey.png', 'images/flipandfeel.png', 'images/flipandfeelq.png', 'images/mindmirror.png' ], 
      status: 'Completed',
    },
    {
      id: 4,
      title: 'JotterPal',
      category: 'Android Application',
      description: 'Designed and developed a task and note management application to help users capture and organize their tasks, thoughts, and ideas in a simple and intuitive way.',
      imageUrl: 'images/jotterpal.png',
      carouselImages: [ 'images/Slide 1.png', 'images/Slide 2.png', 'images/Slide 3.png', 'images/Create Account Screen 1.png','images/Login Screen.png', 'images/Home.png', 'images/Tasks Screen(On-going).png', 'images/Create Task Screen.png', 'images/Folder List (Create Folder).png', 'images/Add Image.png', 'images/Profile (1).png', 'images/Notification.png'],
      status: 'Completed',
    },
    {
      id: 5,
      title: 'Bookify',
      category: 'Desktop Application',
      description: 'Designed and developed a desktop application to help users manage their book collections, track reading progress, and discover new books based on their interests.',
      imageUrl: 'images/Bookify.png',
      carouselImages: [ 'images/Log in.png', 'images/Dashboard.png', 'images/Books.png', 'images/Student Borrowers.png', 'images/Teacher Borrowers.png', 'images/Issue Book.png' ],
      status: 'Completed',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#1F1235] text-white px-6 sm:px-12 lg:px-20 py-24 flex items-center relative">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-1 reveal-element">
          <h2 className="text-5xl sm:text-6xl font-cs_gordon font-black uppercase tracking-tight text-[#E20098]">
            Projects
          </h2>
          <p className="text-[#FCE4EC] text-xs sm:text-sm font-medium tracking-widest uppercase opacity-80">
            Where Ideas Are Made To Life
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-4 reveal-element delay-150">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 ease-out select-none group border min-h-[440px] bg-[#22152B]/40 border-white/5 hover:border-[#A855F7]/60 hover:shadow-[0_12px_30px_rgba(168,85,247,0.2)] hover:-translate-y-1.5"
            >
              {/* Card Image Container */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-purple-950/20 relative border border-white/5 mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent z-0" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              {/* Card Footer Content */}
              <div className="space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold tracking-wide text-[#F5E1E6] group-hover:text-[#A855F7] transition-colors duration-200">
                      {project.title}
                    </h3>
                    
              <div className="flex items-center gap-2">
                {project.status && (
                  <span className={`px-2.5 py-0.5 rounded-xl text-xs font-bold tracking-wide border ${
                    project.status === 'Deployed' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : project.status === 'Under Maintenance'
                      ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' // Sleek Blue for maintenance
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20' // Amber/Yellow for In Progress
                  }`}>
                    {project.status}
                  </span>
                )}

                <span className="px-3 py-0.5 rounded-xl text-xs font-semibold tracking-wide border bg-white/5 border-white/10 text-purple-300">
                  {project.category}
                </span>
              </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed font-normal line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Card Button Section */}
                <div className="pt-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 text-xs font-semibold tracking-wide text-center block transition-all duration-200 ease-out hover:bg-transparent hover:border-[#A855F7] hover:text-[#A855F7] hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                    >
                      Live Preview →
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 text-xs font-semibold tracking-wide text-center block transition-all duration-200 ease-out cursor-pointer hover:bg-transparent hover:border-[#A855F7] hover:text-[#A855F7] hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                    >
                      Project Preview →
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Conditionally mount the separate component */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};