import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '/hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-lg md:text-xl font-semibold ${isScrolled ? 'text-[#0A2463]' : 'text-white'}`}>
              Sanjeev Dhiman
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-[#D4AF37] ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`${isScrolled ? 'text-[#0A2463]' : 'text-white'}`} size={24} />
            ) : (
              <Menu className={`${isScrolled ? 'text-[#0A2463]' : 'text-white'}`} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-4 rounded-lg mt-2 transition-colors duration-300 ${
          isScrolled ? 'bg-white' : 'bg-black'
        }`}>
          <ul className="flex flex-col space-y-4 px-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block text-sm font-medium transition-colors duration-300 hover:text-[#D4AF37] ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
