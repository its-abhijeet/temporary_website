import React from "react";
import { ParallaxSection } from "../components/ParallaxSection";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Gaurav Chanchal",
      role: "",
      image: "https://iili.io/3toyRAQ.png",
      linkedin: "https://www.linkedin.com/in/gaurav-chanchal/",
    },
    {
      name: "Shriyanshu Kumar",
      role: "",
      image: "https://iili.io/3toyRAQ.png",
      linkedin: "https://www.linkedin.com/in/shriyanshu-kumar-2773451ba/",
    },
    {
      name: "Brajesh",
      role: "",
      image: "https://iili.io/3toyRAQ.png",
      linkedin: "https://linkedin.com/in/brajesh",
    },
    {
      name: "Ajey Chaudhary",
      role: "",
      image: "https://iili.io/3toyRAQ.png",
      linkedin: "https://www.linkedin.com/in/aj-kumar/",
    },
  ];

  return (
    <ParallaxSection
      id="team"
      className="bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center items-center mb-4">
            <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500 mr-4"></div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              Our Team
            </h2>
            <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500 ml-4"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Leading Team Members
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the innovative minds behind CODEINCUBATE's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  {member.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {member.role}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Team;
