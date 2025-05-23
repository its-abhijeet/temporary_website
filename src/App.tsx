import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { NavItem } from './types';
import Home from './sections/Home';
import About from './sections/About';
import Achievements from './sections/Achievements';
import Services from './sections/Services';
import Team from './sections/Team';
import Contact from './sections/Contact';

const App: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <ThemeProvider>
      <div className="font-sans antialiased min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar navItems={navItems} />
        
        <main>
          <Home />
          <About />
          <Achievements />
          <Services />
          <Team />
          <Contact />
        </main>
        
        <Footer navItems={navItems} />
      </div>
    </ThemeProvider>
  );
};

export default App