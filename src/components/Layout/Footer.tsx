import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2463] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sanju Dhiman</h3>
            <p className="text-gray-300 mb-4">Senior Investment Advisor with a focus on high-net-worth client portfolio management and wealth preservation.</p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-300" />
                <a 
                  href="mailto:s.dhiman@financialfirm.com" 
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  s.dhiman@financialfirm.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-300" />
                <a 
                  href="tel:+15551234567" 
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-gray-300" />
                <span className="text-gray-300">New York, NY</span>
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
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Sanju Dhiman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;