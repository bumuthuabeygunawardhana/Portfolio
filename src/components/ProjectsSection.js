'use client';
import { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Bayhill Renters-SL",
      description: "Mobile app and Web app which manages vehicles for Bayhill Renters-SL, Includes real-time vehicle availability, secure bookings, and payment integration As the first version.this is individual.",
      image: "/mobile.png",
      //technologies: ["React", "Node.js", "AI/ML", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: " Hybrid Workplace Management System",
      description: " Developed a smart workplace management platform Collaborated with Wiley Global Technology this is the 2year software project (team)",
      image: "/HWMS.png",
      //technologies: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
      category: "frontend",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      id: 3,
      title: "Power Measuring Device System",
      description: "Tackled the common problem of consumers lacking awareness about their electricity consumption.1 st year hardware project (team)",
      image: "/Hardware.jpeg",
      //technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      category: "ai",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "An interactive personal portfolio built with modern animation concepts, smooth transitions, and 3D visuals.",
      image: "/home.png",
      //technologies: ["Vue.js", "Express", "Redis", "Chart.js"],
      //category: "frontend",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      id: 5,
      title: "Travel Website",
      description: "Developed a user-friendly travel website frontend with engaging animations andmodern UI design, aimed at enhancing user experience and visual appeal.",
      image: "/travel.png",
      //technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      //category: "blockchain",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    
  ];

 
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 py-16 sm:py-20 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Section Title */}
          <div className="h-8 sm:h-10"></div>
          <div className={`mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
              My Projects
            </h2>
            <div className="h-3 sm:h-4"></div>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 px-4">(Full description of each project coming soon...)</p>
          </div>
           
          {/* Projects Grid - Centered */}
          <div className="h-4"></div>
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 justify-center place-items-center">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:scale-105 transition-all duration-500 max-w-sm w-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r text-white px-3 py-1 rounded-full text-xs font-bold">
                  Ongoing..
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* Overlay Buttons 
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="bg-slate-900/80 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                      title="View Code"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href={project.live}
                      className="bg-slate-900/80 text-white p-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
                      title="Live Demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div> */}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
            
              </div>
            </div>
          ))}
          </div>
          </div>

          {/* Call to Action */}
          <div className="h-6"></div>
          <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-gray-400 mb-8 text-lg font-medium">
              Have an idea in mind?
            </p>
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1 border border-purple-500/30 hover:border-purple-400/60 backdrop-blur-sm overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Content */}
              <div className="h-4"></div>
              <div className="relative flex items-center space-x-3">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-base tracking-wide">Let's Discuss</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
            
            {/* Additional contact options */}
            <div className="h-2"></div>
            <div className="mt-6 text-sm text-gray-500">
              <p>Or reach out via <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 underline transition-colors">email</a> for a quick chat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}