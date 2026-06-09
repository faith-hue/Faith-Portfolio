import { Navbar } from './components/navbar';
import { Hero } from './components/hero';  
import { About } from './components/about';  
import { Projects } from './components/projects';
import { Footer } from './components/Footer'; // 1. Import your new Footer component
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#1A102F] text-white selection:bg-[#E20098] selection:text-white">
      {/* Global Sticky Navbar */}
      <Navbar />

      {/* Home/Hero Section */}
      <section 
        id="home" 
        className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#332554] via-[#4A2840] to-[#2A182F] flex items-center"
      >
        {/* Background Glow Overlay to match your palette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(139,92,246,0.18),transparent_55%)] pointer-events-none" />
        
        {/* Cleaned up double paddings to let Hero component handle layouts cleanly */}
        <div className="container mx-auto relative z-10 w-full flex items-center h-full">
          <Hero />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* 2. Mount your clean, matching Footer section right here */}
      <Footer />
    </div>
  );
}

export default App;