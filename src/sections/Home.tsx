import React from 'react';
import { ParallaxSection } from '../components/ParallaxSection';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ParallaxSection 
      id="home"
      backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
      overlay
      speed={0.3}
      className="flex items-center justify-center text-center text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img 
            src="src\sections\bgimage.jpeg" 
            alt="CODEINCUBATE Logo" 
            className="h-24 md:h-32"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome To Codeincubate!
        </h1>
        <p className="text-xl md:text-4xl font-bold mb-12 opacity-90 animate-fade-in animation-delay-300">
          Awesome Codes, Great Tech!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-500">
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-all duration-300 font-medium"
          >
            Our Services
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/20 text-white rounded-md transition-all duration-300 font-medium"
          >
            Contact Us
          </a>
        </div>
        <button 
          onClick={handleScroll}
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </ParallaxSection>
  );
};

export default Home