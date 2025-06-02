import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2463] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Sanjeev Dhiman</h3>
            <p className="text-sm text-gray-400 mb-4 italic">Portfolio completed by Rohit Dhiman</p>
            <p className="text-gray-300 mb-4">Hi, I'm a dynamic and results-driven Branch Credit Manager at Muthoot Microfin Ltd, with a strong background in credit analysis, team management, and risk management. I excel at streamlining loan approval processes, enhancing efficiency, and minimizing losses through effective strategies. Let's connect and explore how I can bring value to your organization!</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sanjeev-kumar-7a5536272/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors duration-300"
                title="Sanjeev Dhiman's LinkedIn"
              >
                <Linkedin size={20} />
                <span className="sr-only">Sanjeev Dhiman's LinkedIn</span>
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-2">Portfolio Developer:</p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">Rohit Dhiman</span>
                <a
                  href="https://www.linkedin.com/in/rohitdhiman02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300"
                  title="Rohit Dhiman's LinkedIn"
                >
                  <Linkedin size={16} />
                  <span className="sr-only">Rohit Dhiman's LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-300" />
                <a
                  href="mailto:sanjudhiman141@gmail.com"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  sanjudhiman141@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-300" />
                <a
                  href="tel:+919991850096"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  +91 9991850096
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-gray-300" />
                <span className="text-gray-300">VPO Balu, District Kaithal, India 136117</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sanjeev Dhiman. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Portfolio designed and developed by Rohit Dhiman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
