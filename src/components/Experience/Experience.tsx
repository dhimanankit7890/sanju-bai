import React from 'react';
import { experiences } from '../../data/profileData';
import { Briefcase, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-[#0A2463] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A proven track record of success in investment management and financial advisory services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 mb-6 border-l-2 border-gray-200 last:mb-0 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0">
                <div className="w-4 h-4 rounded-full bg-[#0A2463] border-4 border-white"></div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ml-6">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <Briefcase size={20} className="text-[#0A2463] mr-2" />
                    {exp.position}
                  </h3>
                  <span className="text-[#D4AF37] font-medium mt-2 sm:mt-0">{exp.duration}</span>
                </div>

                <h4 className="text-lg font-medium text-gray-700 mb-4">{exp.company}</h4>


                <div>
                  <h5 className="text-sm font-semibold text-gray-800 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={18} className="text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
