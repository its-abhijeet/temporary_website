import React from 'react';
import { ParallaxSection } from '../components/ParallaxSection';
import { Code, Laptop, BarChart, Share2, Palette, LineChart } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies to meet your business needs.',
      icon: 'code'
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications designed to provide a seamless user experience across all devices.',
      icon: 'laptop'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing services to increase your online presence and drive targeted traffic.',
      icon: 'barChart'
    },
    {
      title: 'Social Media Management',
      description: 'Comprehensive social media management to engage with your audience and build brand loyalty.',
      icon: 'share2'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that focuses on creating intuitive, engaging user experiences for your products.',
      icon: 'palette'
    },
    {
      title: 'Data Analytics',
      description: 'In-depth data analysis to help you make informed decisions and optimize your business strategies.',
      icon: 'lineChart'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'code':
        return <Code className="h-8 w-8" />;
      case 'laptop':
        return <Laptop className="h-8 w-8" />;
      case 'barChart':
        return <BarChart className="h-8 w-8" />;
      case 'share2':
        return <Share2 className="h-8 w-8" />;
      case 'palette':
        return <Palette className="h-8 w-8" />;
      case 'lineChart':
        return <LineChart className="h-8 w-8" />;
      default:
        return <Code className="h-8 w-8" />;
    }
  };

  return (
    <ParallaxSection 
      id="services"
      className="bg-secondary-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center mb-4">
            <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500 mr-4"></div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Our Services</h2>
            <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500 ml-4"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            What We Offer
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We provide a wide range of services to help your business grow and succeed in today's competitive market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                {renderIcon(service.icon)}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Services;