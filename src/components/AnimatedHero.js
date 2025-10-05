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
    //"AI/ML Enthusiast",
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

      <div className="container mx-auto px-8 relative z-10 h-full">
        {/* Top-Left Title */}
        <div className={`absolute top-8 left-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi there
          </h1>
          <h2 className="text-5xl md:text-9xl font-bold text-white ml-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            I'm <RotatingB />umuthu
          </h2>
          <div className="h-1 w-45 bg-gradient-to-r from-blue-400 to-purple-500 mt-4 rounded-full"></div>
        </div>

        {/* Center Content Container */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Animated Face - Centered */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <FaceTracker />
          </div>
           <div className="h-8"></div>
          {/* Dynamic Roles - Below Face */}
          <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <DynamicRoles />
          </div>
        </div>
          {/* Animated Buttons - Below Subtitle */}
          
        

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}