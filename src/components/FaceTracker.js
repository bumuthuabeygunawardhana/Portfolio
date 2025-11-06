'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FaceTracker() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const faceRef = useRef(null);
  const animationFrame = useRef(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Create Intersection Observer to detect when component is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        // Reset position when component becomes visible
        if (entry.isIntersecting) {
          setMousePos({ x: 0, y: 0 });
          setEyePos({ x: 0, y: 0 });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px' // Only activate when component is clearly visible
      }
    );

    if (faceRef.current) {
      observer.observe(faceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Desktop: Mouse tracking
  useEffect(() => {
    if (isMobile) return; // Skip mouse tracking on mobile

    const handleMouseMove = (e) => {
      // Only track mouse if component is visible
      if (!isVisible || !faceRef.current) return;

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
    };

    // Only add listener when component is visible
    if (isVisible) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible, isMobile]); // Dependency on isVisible and isMobile

  // Mobile: Smooth continuous animation (gyroscope-like effect)
  useEffect(() => {
    if (!isMobile || !isVisible) return;

    let angle = 0;
    const animate = () => {
      angle += 0.01; // Slow rotation speed
      
      // Create smooth circular motion
      const x = Math.sin(angle) * 0.3; // Reduced amplitude for subtle effect
      const y = Math.cos(angle * 1.3) * 0.2; // Different frequency for natural movement
      
      setMousePos({ x, y });
      
      // Eye tracking
      const eyeX = Math.max(-1, Math.min(1, x * 2));
      const eyeY = Math.max(-1, Math.min(1, y * 2));
      setEyePos({ x: eyeX, y: eyeY });
      
      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isMobile, isVisible]);

  // Mobile: Touch interaction for interactive feel
  useEffect(() => {
    if (!isMobile) return;

    const handleTouch = (e) => {
      if (!isVisible || !faceRef.current) return;

      const touch = e.touches[0];
      const rect = faceRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate touch position relative to face center
      const x = (touch.clientX - centerX) / rect.width;
      const y = (touch.clientY - centerY) / rect.height;
      
      // Temporarily follow touch, then return to animation
      setMousePos({ x: x * 0.5, y: y * 0.5 }); // Reduced for subtle effect
      
      const eyeX = Math.max(-1, Math.min(1, x));
      const eyeY = Math.max(-1, Math.min(1, y));
      setEyePos({ x: eyeX, y: eyeY });
    };

    if (isVisible && faceRef.current) {
      faceRef.current.addEventListener('touchmove', handleTouch);
    }

    return () => {
      if (faceRef.current) {
        faceRef.current.removeEventListener('touchmove', handleTouch);
      }
    };
  }, [isMobile, isVisible]);

  return (
    <div className="relative flex items-center justify-center">
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
        {/* Your Photo */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-16xl">
          <Image
            src="/port_2.png"
            alt="Bumuthu Abeygunawardhana"
            fill
            className="object-contain"
            priority
          />

          {/* Eye Tracking Overlay - Only active when visible */}
          <div className="absolute inset-0">
            {/* Left Eye */}
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
            
            {/* Right Eye */}
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
      </div>
    </div>
  );
}