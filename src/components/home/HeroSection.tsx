import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { HERO_BG } from '../../assets/images';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Retrovis</span> <span className="text-white">Industry</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Where Craftsmanship Meets Custom Design</p>
          
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-300">
            Premium apparel manufacturing from Sialkot, Pakistan. 
            Specializing in custom designs, embroidery, and quality craftsmanship for brands worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get a Quote
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/services'}
            >
              Our Services
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="#about" 
            className="text-white opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
          >
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M7 13l5 5 5-5"/>
              <path d="M7 7l5 5 5-5"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;