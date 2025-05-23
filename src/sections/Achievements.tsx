import React from 'react';
import { ParallaxSection } from '../components/ParallaxSection';
import { Trophy, Users, Briefcase, Award } from 'lucide-react';
import { AchievementItem } from '../types';

const Achievements: React.FC = () => {
  const achievements: AchievementItem[] = [
    {
      title: 'Clients Served',
      value: '10+',
      description: 'Businesses from various industries that trust us'
    },
    {
      title: 'Projects Completed',
      value: '10+',
      description: 'Successful projects delivered on time'
    },
    {
      title: 'Team Members',
      value: '20+',
      description: 'Skilled professionals working together'
    },
    {
      title: 'Awards Won',
      value: '5+',
      description: 'Recognition for excellence and innovation'
    }
  ];

  const renderIcon = (title: string) => {
    switch(title) {
      case 'Clients Served':
        return <Users className="h-8 w-8 text-primary-500 dark:text-primary-400" />;
      case 'Projects Completed':
        return <Briefcase className="h-8 w-8 text-primary-500 dark:text-primary-400" />;
      case 'Team Members':
        return <Users className="h-8 w-8 text-primary-500 dark:text-primary-400" />;
      case 'Awards Won':
        return <Trophy className="h-8 w-8 text-primary-500 dark:text-primary-400" />;
      default:
        return <Award className="h-8 w-8 text-primary-500 dark:text-primary-400" />;
    }
  };

  return (
    <ParallaxSection 
      id="achievements"
      backgroundImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      overlay
      speed={0.2}
      className="flex items-center justify-center text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center mb-4">
            <div className="w-12 h-1 bg-white mr-4"></div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Our Achievements</h2>
            <div className="w-12 h-1 bg-white ml-4"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our Success By The Numbers
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Over the years, we've achieved significant milestones that showcase our commitment to excellence and client satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {renderIcon(item.title)}
              </div>
              <h4 className="text-4xl font-bold mb-2 text-white">{item.value}</h4>
              <p className="text-xl font-semibold mb-2 text-white">{item.title}</p>
              <p className="text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Achievements;