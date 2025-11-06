'use client';
import { useEffect, useState } from 'react';
import FaceTracker from './FaceTracker';
import RotatingB from './RotatingB';

// Dynamic Roles Component
function DynamicRoles() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const roles = [
    "Software Engineer",
    "Full Stack Developer", 
    "UI/UX Designer",
    "AI/ML Enthusiast",
    "Creative Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 300);
      
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="h-16 flex items-center justify-center">
      <p 
        className={`text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}
      >
        {roles[currentRoleIndex]}
      </p>
    </div>
  );
}

export default function AnimatedHero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    const generateStars = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        animationDelay: Math.random() * 3,
        animationDuration: Math.random() * 3 + 2,
      }));
    };
    
    setStars(generateStars());
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.width}px`,
                height: `${star.height}px`,
                animationDelay: `${star.animationDelay}s`,
                animationDuration: `${star.animationDuration}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 h-full">
        {/* Top-Left Title */}
        <div className={`absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi there
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-9xl font-bold text-white ml-2 sm:ml-3 md:ml-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            I'm <RotatingB />umuthu
          </h2>
          <div className="h-1 w-36 sm:w-40 md:w-45 bg-gradient-to-r from-blue-400 to-purple-500 mt-3 sm:mt-4 rounded-full"></div>
        </div>

        {/* Center Content Container */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-0">
          {/* Animated Face - Centered */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <FaceTracker />
          </div>
          <div className="h-4 sm:h-6 md:h-8"></div>
          {/* Dynamic Roles - Below Face */}
          <div className={`mt-8 sm:mt-12 md:mt-16 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <DynamicRoles />
          </div>
        </div>

        {/* Left Side Button - Contact Me */}
        <div className={`absolute left-4 sm:left-6 md:left-8 bottom-12 sm:bottom-16 md:bottom-20 transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <a 
            href="#contact"
            className="group relative inline-flex items-center px-5 sm:px-6 md:px-6 py-3 sm:py-3.5 overflow-hidden text-base sm:text-base md:text-lg font-medium text-white border-2 border-white/30 rounded-full hover:text-black hover:bg-white transition-all duration-300 ease-out backdrop-blur-sm bg-white/40"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-400 to-white-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Me</span>
            </span>
          </a>
        </div>

        {/* Right Side Button - Download CV */}
        <div className={`absolute right-4 sm:right-6 md:right-8 bottom-12 sm:bottom-16 md:bottom-20 transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <a 
            href="/folder/Bumuthu_Abeygunawardhana_CV.pdf"
            download="Bumuthu_Abeygunawardhana_CV.pdf"
            className="group relative inline-flex items-center px-5 sm:px-6 md:px-6 py-3 sm:py-3.5 overflow-hidden text-base sm:text-base md:text-lg font-medium text-white border-2 border-white/30 rounded-full hover:text-black hover:bg-white transition-all duration-300 ease-out backdrop-blur-sm bg-white/40"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-400 to-white-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}