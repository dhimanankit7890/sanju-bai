import React from 'react';
import { employeeData } from '../../data/profileData';
import { Award, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#0A2463] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail size={20} className="text-[#0A2463] mt-1 mr-4" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <a 
                    href={`mailto:${employeeData.email}`} 
                    className="text-gray-800 hover:text-[#0A2463] transition-colors duration-300"
                  >
                    {employeeData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone size={20} className="text-[#0A2463] mt-1 mr-4" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                  <a 
                    href={`tel:${employeeData.phone}`} 
                    className="text-gray-800 hover:text-[#0A2463] transition-colors duration-300"
                  >
                    {employeeData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin size={20} className="text-[#0A2463] mt-1 mr-4" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Location</h4>
                  <p className="text-gray-800">{employeeData.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Linkedin size={20} className="text-[#0A2463] mt-1 mr-4" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500">LinkedIn</h4>
                  <a 
                    href={`https://${employeeData.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-[#0A2463] transition-colors duration-300"
                  >
                    {employeeData.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Overview</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              {employeeData.bio}
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              At Atlantic Trust Bank, I've pioneered innovative investment strategies that combine traditional banking principles with cutting-edge market analysis. My client-centered approach focuses on long-term wealth preservation while capitalizing on strategic growth opportunities in evolving markets.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I believe in maintaining transparent client relationships built on trust and consistent communication. My philosophy centers on aligning investment strategies with each client's unique financial goals, risk tolerance, and time horizons.
            </p>

            {/* Achievements */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Performance Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {employeeData.achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-center group"
                  >
                    <Award size={28} className="text-[#D4AF37] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-lg font-medium text-gray-900 mb-1">{achievement.value}</h4>
                    <p className="text-sm text-gray-600">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;