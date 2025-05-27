import React from 'react';
import { education } from '../../data/profileData';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-[#0A2463] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Academic achievements and professional certifications that establish credibility in the financial sector.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#0A2463] group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start">
                  {edu.degree.includes("Certified") || edu.degree.includes("Chartered") ? (
                    <Award size={24} className="text-[#D4AF37] mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <GraduationCap size={24} className="text-[#0A2463] mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700 mt-1">{edu.institution}</p>
                  </div>
                </div>
                <span className="text-[#D4AF37] font-medium">{edu.year}</span>
              </div>
              
              {edu.highlights.length > 0 && (
                <div className="mt-3 pl-10">
                  <ul className="list-disc text-gray-600 space-y-1 pl-5">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-[#0A2463]/5 p-6 rounded-lg border border-[#0A2463]/20">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Award size={22} className="text-[#D4AF37] mr-2" />
              Continuing Education
            </h3>
            <p className="text-gray-700 mb-6">
              Committed to ongoing professional development through regular participation in advanced financial workshops, seminars, and industry conferences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-gray-900">Annual Compliance Training</h4>
                <p className="text-gray-600 text-sm mt-1">Latest completed: January 2023</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-gray-900">Advanced Tax Strategies Workshop</h4>
                <p className="text-gray-600 text-sm mt-1">Completed: November 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;