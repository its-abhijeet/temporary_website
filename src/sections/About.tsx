import React from 'react';
import { ParallaxSection } from '../components/ParallaxSection';

const About: React.FC = () => {
  return (
    <ParallaxSection 
      id="about"
      className="bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 animate-slide-right">
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-600 rounded-lg hidden md:block"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary-100 dark:bg-secondary-800 rounded-lg hidden md:block"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-slide-left">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-primary-600 mr-4"></div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">About Us</h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Delivering Excellence Since Ages
            </h3>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We are a dedicated team of professionals committed to providing innovative solutions for businesses of all sizes. With over a decade of experience in the industry, we have helped countless organizations achieve their goals and thrive in an ever-changing market.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Our mission is to empower businesses through technology and strategic partnerships. We believe in building lasting relationships with our clients by understanding their unique needs and delivering tailored solutions that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Our Mission</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  To empower businesses with innovative solutions that drive growth and success.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Our Vision</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  To become the leading provider of comprehensive business solutions globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default About;