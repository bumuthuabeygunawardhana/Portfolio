import AnimatedHero from '../components/AnimatedHero';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation Sidebar */}
      <Navigation />
      
      {/* Home Section - Full Screen */}
      <section id="home" className="min-h-screen">
        <AnimatedHero />
      </section>
      
      {/* About Section - Full Screen */}
      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>
      
      {/* Education Section - Full Screen */}
      <section id="education" className="min-h-screen">
        <EducationSection />
      </section>
      
      {/* Projects Section - Full Screen */}
      <section id="projects" className="min-h-screen">
        <ProjectsSection />
      </section>
      
      {/* Contact Section - Full Screen */}
      <section id="contact" className="min-h-screen">
        <ContactSection />
      </section>
    </main>
  );
}