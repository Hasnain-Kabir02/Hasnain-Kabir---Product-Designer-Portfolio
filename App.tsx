
import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import CaseStudyModal from './components/CaseStudyModal';
import Footer from './components/Footer';
import { CASE_STUDIES } from './data/content';
import { CaseStudy } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleProjectClick = useCallback((id: string) => {
    const project = CASE_STUDIES.find(p => p.id === id);
    if (project) {
      setSelectedProject(project);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-600 selection:text-white bg-off-white overflow-x-hidden">
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
      
      <main>
        <Hero onCtaClick={() => handleNavigate('projects')} />
        
        {/* Featured Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
              <div className="max-w-2xl">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Selected Case Studies</h2>
                <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                  Ownership in <br/><span className="text-emerald-600">Complex Domains.</span>
                </h3>
              </div>
              <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-medium italic">
                Focusing on measurable business impact and long-term product scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {CASE_STUDIES.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={handleProjectClick} 
                />
              ))}
            </div>
          </div>
        </section>

        <AboutSection />
        
        <ExperienceSection />
      </main>

      <Footer />

      <CaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;
