import React, { useRef, useEffect, useState } from 'react';

interface ParallaxSectionProps {
  id: string;
  className?: string;
  speed?: number;
  children: React.ReactNode;
  backgroundImage?: string;
  overlay?: boolean;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  id,
  className = '',
  speed = 0.5,
  children,
  backgroundImage,
  overlay = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    if (!backgroundImage) return;
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when the section is in view
        if (top < windowHeight && top > -windowHeight) {
          // Calculate parallax offset based on section's position relative to viewport
          const newOffset = (top * speed);
          setOffset(newOffset);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, backgroundImage]);
  
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: `center ${offset}px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    : {};
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative min-h-screen ${className}`}
      style={backgroundStyle}
    >
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="container mx-auto px-4 py-20 relative z-10">
        {children}
      </div>
    </section>
  );
};