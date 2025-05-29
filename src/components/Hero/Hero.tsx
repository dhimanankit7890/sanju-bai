import React from 'react';
import { employeeData } from '../../data/profileData';
import { ChevronDown } from 'lucide-react';
import profileImg from '../../data/sanju.png'; // Import your image here

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-floatIn">
              <span className="block">{employeeData.name}</span>
              <span className="block text-gray-400 mt-2">{employeeData.title}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl animate-fadeIn delay-300">
              {employeeData.bio}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-white hover:bg-gray-200 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-300 animate-scaleIn relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer bg-[length:1000px_100%]"></span>
                <span className="relative">Schedule a Consultation</span>
              </a>
              <a
                href="#about"
                className="border border-white hover:border-gray-300 text-white hover:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors duration-300 animate-scaleIn delay-100"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 lg:w-[350px] lg:h-[430px] md:w-80 md:h-80 animate-floatIn">
              <div className="absolute inset-0 rounded-fullborder-4 border-white animate-borderPulse"></div>
              <img
                src={profileImg} // Use imported image here
                alt={employeeData.name}
                className="object-cover w-full h-full rounded-xl shadow-2xl border-4 "
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white hover:text-gray-300 transition-colors duration-300">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
