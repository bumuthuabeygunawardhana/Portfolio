'use client';
import { useState, useEffect } from 'react';

// Professional SVG Icons
const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Hamburger Menu Icon
const HamburgerIcon = ({ isOpen }) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {isOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
);

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'about', label: 'About Me', icon: UserIcon },
    { id: 'education', label: 'Education', icon: AcademicCapIcon },
    { id: 'projects', label: 'Projects', icon: BriefcaseIcon },
    { id: 'contact', label: 'Contact Me', icon: MailIcon }
  ];

  useEffect(() => {
    // Method 1: Intersection Observer (more reliable)
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is 40% visible
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Section in view:', entry.target.id); // Debug log
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Wait for DOM to be ready, then observe
    setTimeout(() => {
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) {
          observer.observe(section);
          console.log('Observing section:', item.id); // Debug log
        } else {
          console.log('Section not found:', item.id); // Debug log
        }
      });
    }, 500);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 transform backdrop-blur-xl border ${
                    activeSection === item.id
                      ? 'bg-gradient-to-br from-blue-500/90 via-purple-600/90 to-pink-500/90 text-white shadow-2xl shadow-purple-500/40 scale-110 border-purple-300/50'
                      : 'bg-slate-900/70 text-gray-400 hover:bg-slate-800/80 hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-slate-900/50 border-slate-700/50 hover:border-purple-500/30'
                  }`}
                  title={item.label}
                >
                  <IconComponent />
                  
                  {/* Active indicator line */}
                  {activeSection === item.id && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
                  )}
                </button>
                
                {/* Enhanced Tooltip */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900/95 backdrop-blur-xl text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl border border-purple-500/30">
                  {item.label}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Clean progress indicator */}
        <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-slate-700/30 rounded-full">
          <div 
            className="w-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-500"
            style={{
              height: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
            }}
          />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed top-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-2xl backdrop-blur-xl border text-white transition-all duration-300 shadow-2xl transform hover:scale-105 ${
            isMobileMenuOpen
              ? 'bg-gradient-to-br from-blue-500/90 via-purple-600/90 to-pink-500/90 border-purple-300/50 shadow-purple-500/40 scale-110'
              : 'bg-slate-900/80 border-purple-500/30 hover:bg-slate-800/90 hover:border-purple-500/50 hover:shadow-purple-500/20'
          }`}
        >
          <HamburgerIcon isOpen={isMobileMenuOpen} />
          
          {/* Active glow effect */}
          {isMobileMenuOpen && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 animate-pulse"></div>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu Panel - Professional Desktop-Style */}
        <div className={`fixed top-1/2 right-6 -translate-y-1/2 transform transition-all duration-500 ease-out z-40 ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-16 opacity-0 scale-95'
        }`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 transform backdrop-blur-xl border shadow-2xl ${
                      activeSection === item.id
                        ? 'bg-gradient-to-br from-blue-500/90 via-purple-600/90 to-pink-500/90 text-white shadow-purple-500/40 scale-110 border-purple-300/50'
                        : 'bg-slate-900/80 text-gray-400 hover:bg-slate-800/90 hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-slate-900/50 border-slate-700/50 hover:border-purple-500/30'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMobileMenuOpen ? 'slideInRight 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    <IconComponent />
                    
                    {/* Active indicator line */}
                    {activeSection === item.id && (
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-lg animate-pulse"></div>
                    )}

                    {/* Glow effect for active item */}
                    {activeSection === item.id && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 animate-pulse"></div>
                    )}
                  </button>
                  
                  {/* Enhanced Mobile Tooltip */}
                  <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-slate-900/95 backdrop-blur-xl text-white px-4 py-3 rounded-xl text-base font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl border border-purple-500/40 group-hover:scale-105">
                    {item.label}
                    <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-6 border-l-slate-900/95 border-t-6 border-t-transparent border-b-6 border-b-transparent"></div>
                  </div>

                  {/* Number indicator  
                  <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-110 shadow-lg'
                      : 'bg-slate-700/80 text-gray-300 group-hover:bg-purple-600/80 group-hover:text-white group-hover:scale-110'
                  }`}>
                    {index + 1}
                  </div> */}
                </div>
              );
            })}
          </div>
          
          {/* Mobile Progress Indicator */}
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-slate-700/40 rounded-full overflow-hidden">
            <div 
              className="w-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out shadow-lg"
              style={{
                height: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
              }}
            />
          </div>

        </div>
      </div>
    </>
  );
}