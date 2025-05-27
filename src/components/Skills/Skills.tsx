import React from 'react';
import { skills } from '../../data/profileData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expertise & Skills</h2>
          <div className="w-20 h-1 bg-[#0A2463] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Specialized financial competencies honed through years of experience in the banking sector.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#0A2463] transition-colors duration-300">{skill.name}</h3>
                  <span className="text-sm font-semibold text-[#D4AF37]">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-[#0A2463] to-[#0A2463]/80 h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:from-[#0A2463] group-hover:to-[#D4AF37]"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Qualifications</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Series 7 & 66 Licensed",
                  description: "FINRA-regulated securities representative"
                },
                {
                  title: "Bloomberg Terminal Certified",
                  description: "Advanced financial data analysis"
                },
                {
                  title: "Fiduciary Responsibility",
                  description: "Client-first investment philosophy"
                },
                {
                  title: "ESG Investment Specialist",
                  description: "Sustainable investing strategies"
                }
              ].map((qual, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300 text-center hover:border-[#D4AF37]"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{qual.title}</h4>
                  <p className="text-gray-600 text-sm">{qual.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;