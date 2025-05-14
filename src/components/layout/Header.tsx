import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Retrovis Industry" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-primary font-display font-bold text-xl leading-tight">Retrovis</span>
            <span className="text-secondary font-display font-medium text-lg leading-tight">Industry</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium text-base hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : scrolled ? 'text-gray-800' : 'text-white'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
          <a
            href="tel:+923068423522"
            className="flex items-center bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors"
          >
            <Phone size={16} className="mr-2" />
            <span>+92 306 8423522</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium text-lg py-2 border-b border-gray-100 ${
                      isActive ? 'text-primary' : 'text-gray-800'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}
              <a
                href="tel:+923068423522"
                className="flex items-center justify-center bg-primary text-white px-4 py-3 rounded-full hover:bg-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} className="mr-2" />
                <span>Call Now</span>
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;