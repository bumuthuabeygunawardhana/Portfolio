'use client';
import { useState, useEffect } from 'react';

export default function RotatingB() {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    // Initial rotation on page load
    const initialTimeout = setTimeout(() => {
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000); // Reset after 1 second
    }, 500); // Start after 0.5 seconds

    // Rotate every 1 minute (60000ms)
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000); // Reset after 1 second
    }, 60000); // Every 1 minute

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <span 
      className={`inline-block transition-transform duration-1000 ease-in-out ${
        isRotating ? 'rotate-y-360' : 'rotate-y-0'
      }`}
      style={{
        transformOrigin: 'center center'
      }}
    >
      B
    </span>
  );
}