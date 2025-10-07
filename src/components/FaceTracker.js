'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FaceTracker() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
 // const [particles, setParticles] = useState([]);
  const faceRef = useRef(null);

  useEffect(() => {
    // Generate particles only on client side
   {/* const generateParticles = () => {
      return Array.from({ length: 6 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDelay: i * 0.2,
        animationDuration: 2 + Math.random() * 2,
      }));
    };*/}
    
   {/* setParticles(generateParticles());*/}

    const handleMouseMove = (e) => {
      if (faceRef.current) {
        const rect = faceRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate mouse position relative to face center
        const x = (e.clientX - centerX) / rect.width;
        const y = (e.clientY - centerY) / rect.height;
        
        setMousePos({ x, y });
        
        // Eye tracking calculations
        const eyeX = Math.max(-1, Math.min(1, x * 2));
        const eyeY = Math.max(-1, Math.min(1, y * 2));
        setEyePos({ x: eyeX, y: eyeY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Animated Background Rings */}
      {/* <div className="absolute inset-0 animate-pulse">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-[28rem] border-2 border-blue-400 rounded-2xl animate-ping opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[30rem] border border-purple-400 rounded-2xl animate-pulse opacity-30"></div>
      </div>

      */}

      {/* Main Face Container */}
      <div 
        ref={faceRef}
        className="relative w-80 h-96 transform-gpu transition-transform duration-150 ease-out hover:scale-105"
        style={{
          transform: `
            perspective(1000px) 
            rotateX(${mousePos.y * -10}deg) 
            rotateY(${mousePos.x * 10}deg) 
            scale(${1 + Math.abs(mousePos.x) * 0.1})
          `,
        }}
      >
        {/* Glowing Background */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div> */}
        
        {/* Your Photo */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden  shadow-16xl">
          <Image
            src="/port_2.png" // Using your existing photo
            alt="Your Name"
            fill
            className="object-contain"
            priority
          />

{/* Eye Tracking Overlay */}
<div className="absolute inset-0">
  {/* Left Eye - Realistic with Shine/Tears */}
  <div 
    className="relative"
    style={{
      position: 'absolute',
      top: '46%',
      left: '35%',
      transform: `translate(${eyePos.x * 6}px, ${eyePos.y * 4}px)`,
      transition: 'transform 0.1s ease-out'
    }}
  >
    {/* Main Pupil */}
    <div 
      className="w-3 h-3 bg-black rounded-full shadow-lg"
      style={{
        background: `
          radial-gradient(
            circle at 30% 30%,
            rgba(40, 40, 40, 1) 0%,
            rgba(20, 20, 20, 1) 60%,
            rgba(0, 0, 0, 1) 100%
          )
        `,
        boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.3)'
      }}
    />
    
    {/* Teary Shine Effect */}
    <div 
      className="absolute top-0 left-0 w-3 h-3 rounded-full pointer-events-none"
      style={{
        background: `
          radial-gradient(
            ellipse at 25% 25%,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.1) 40%,
            transparent 60%
          )
        `,
        animation: 'eyeShine 3s ease-in-out infinite'
      }}
    />
    
    {/* Wet Reflection */}
    <div 
      className="absolute -top-0.5 -left-0.5 w-4 h-4 rounded-full pointer-events-none opacity-15"
      style={{
        background: `
          conic-gradient(
            from 45deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 20%,
            rgba(200, 240, 255, 0.15) 40%,
            rgba(255, 255, 255, 0.1) 60%,
            transparent 10%
          )
        `,
        animation: 'wetShine 4s ease-in-out infinite reverse'
      }}
    />
  </div>
  
  {/* Right Eye - Realistic with Shine/Tears */}
  <div 
    className="relative"
    style={{
      position: 'absolute',
      top: '46.5%',
      right: '40.5%',
      transform: `translate(${eyePos.x * 6}px, ${eyePos.y * 4}px)`,
      transition: 'transform 0.1s ease-out'
    }}
  >
    {/* Main Pupil */}
    <div 
      className="w-3 h-3 bg-black rounded-full shadow-lg"
      style={{
        background: `
          radial-gradient(
            circle at 30% 30%,
            rgba(40, 40, 40, 1) 0%,
            rgba(20, 20, 20, 1) 60%,
            rgba(0, 0, 0, 1) 100%
          )
        `,
        boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.3)'
      }}
    />
    
    {/* Teary Shine Effect */}
    <div 
      className="absolute top-0 left-0 w-3 h-3 rounded-full pointer-events-none"
      style={{
        background: `
          radial-gradient(
            ellipse at 25% 25%,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.1) 40%,
            transparent 60%
          )
        `,
        animation: 'eyeShine 3s ease-in-out infinite 0.2s'
      }}
    />
    
    {/* Wet Reflection */}
    <div 
      className="absolute -top-0.5 -left-0.5 w-4 h-4 rounded-full pointer-events-none opacity-40"
      style={{
        background: `
          conic-gradient(
            from 45deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 20%,
            rgba(200, 240, 255, 0.15) 40%,
            rgba(255, 255, 255, 0.1) 60%,
            transparent 80%
          )
        `,
        animation: 'wetShine 4s ease-in-out infinite reverse 0.2s'
      }}
    />
  </div>
</div>
        </div>

        {/* Floating Particles 
        <div className="absolute -inset-4">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"
              style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`
              }}
            />
          ))}
        </div>*/}
      </div>
    </div>
  );
}