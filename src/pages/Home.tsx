import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import GallerySection from '../components/home/GallerySection';
import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Retrovis Industry - Premium Apparel Manufacturing';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <ContactSection />
    </>
  );
};

export default Home;