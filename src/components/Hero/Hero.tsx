import React, { useState } from 'react';
import { employeeData } from '../../data/profileData';
import { ChevronDown, Download } from 'lucide-react';
import profileImg from '../../data/sanju.png'; // Import your image here

const Hero: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = () => {
    setIsDownloading(true);

    // Simulate download process
    setTimeout(() => {
      // Replace 'path-to-your-resume.pdf' with the actual path to your resume file
      const resumeUrl = 'https://drive.usercontent.google.com/u/0/uc?id=1g0FAaTg-ARYEpZbjb8g7KEdbgeAAmqhI&export=download';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = `${employeeData.name}_Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }, 1500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section - Shows first on mobile, first on desktop */}
          <div className="order-1 md:order-1 md:pr-12">
            <h1 className="text-4xl md:text-2xl lg:text-5xl font-bold mb-6 leading-tight animate-floatIn">
              <span className="block">{employeeData.name}</span>
              <span className="block text-gray-400 mt-2">{employeeData.title}</span>
            </h1>

            <p className="text-lg md:text-lg text-gray-300 mb-8 max-w-xl animate-fadeIn delay-300">
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

              {/* Resume Download Button */}
              <button
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className="border border-blue-500 hover:border-blue-400 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 font-medium py-3 px-6 rounded-lg transition-all duration-300 animate-scaleIn delay-75 flex items-center gap-2 group disabled:opacity-70"
              >
                <Download
                  size={18}
                  className={`transition-transform duration-300 ${
                    isDownloading
                      ? 'animate-bounce'
                      : 'group-hover:translate-y-0.5'
                  }`}
                />
                <span className="relative">
                  {isDownloading ? 'Downloading...' : 'Download Resume'}
                </span>
                {isDownloading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse rounded-lg"></div>
                )}
              </button>

              <a
                href="#about"
                className="border border-white hover:border-gray-300 text-white hover:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors duration-300 animate-scaleIn delay-100"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Section - Shows second on mobile, second on desktop */}
          <div className="order-2 md:order-2 flex justify-center">
            <div className="relative w-64 h-[320px] md:h-[400px] lg:w-[350px] lg:h-[430px] md:w-80 animate-floatIn">
              <div className="absolute inset-0 rounded-full "></div>
              <img
                src={profileImg} // Use imported image here
                alt={employeeData.name}
                className="object-cover w-full h-full rounded-xl shadow-2xl border-4"
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

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes borderPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(59, 130, 246, 0);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-floatIn {
          animation: floatIn 1s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out;
        }

        .animate-borderPulse {
          animation: borderPulse 2s infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
