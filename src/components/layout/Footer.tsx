import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { navItems } from '../../data/navigation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Retrovis Industry" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-primary font-display font-bold text-xl leading-tight">Retrovis</span>
                <span className="text-white font-display font-medium text-lg leading-tight">Industry</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Where Fabric Meets Identity
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Custom Apparel
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Embroidery & Printing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Cut & Sew
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Custom Branding
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Wholesale Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <a href="tel:+923068423522" className="text-gray-300 hover:text-primary transition-colors">
                  +92 306 8423522
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:contact@retrovisindustry.com" className="text-gray-300 hover:text-primary transition-colors">
                  contact@retrovisindustry.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Korpur, Airport Road, Sialkot, Punjab 51310
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Retrovis Industry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
