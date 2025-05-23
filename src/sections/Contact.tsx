import React from 'react';
import { ParallaxSection } from '../components/ParallaxSection';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <ParallaxSection 
      id="contact"
      className="bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center mb-4">
            <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500 mr-4"></div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">Get In Touch</h2>
            <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500 ml-4"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Contact Us
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Have a question or want to work with us? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-right">
            <div className="bg-secondary-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Start A Conversation
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible. Your inquiry is our priority.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white">Our Location</h5>
                    <p className="text-gray-700 dark:text-gray-300">Setting Up Soon, Stay Tuned!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white">Email</h5>
                    <p className="text-gray-700 dark:text-gray-300">Shriyanshu.sinha.aub@gmail.com</p>
                    <p className="text-gray-700 dark:text-gray-300">Gauravchanchal2003@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Contact;