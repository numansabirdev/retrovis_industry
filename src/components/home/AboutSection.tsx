import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="About Us" 
              centered={false}
            />
            
            <p className="text-gray-600 mb-6 text-lg">
              Retrovis Industry is a certified Sialkot-based manufacturer specializing in high-quality apparel production for brands and teams worldwide. Founded on principles of craftsmanship and innovation, we've built a reputation for excellence in the textile industry.
            </p>
            
            <p className="text-gray-600 mb-6 text-lg">
              Our comprehensive services include custom embroidery, sublimation, and printing, allowing brands to create distinctive identity through their apparel. We take pride in delivering premium finishing even for low quantity orders.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg">
              From pattern design to packaging, our complete cut & sew service ensures every detail meets your specifications. As a certified Alibaba supplier, we maintain global quality standards while serving clients around the world.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary"
                onClick={() => window.location.href = '/about'}
              >
                Learn More
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Why Choose Us?</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-medium text-lg text-gray-800">Premium Quality</h4>
                  <p className="text-gray-600">High-quality materials and craftsmanship in every product</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-medium text-lg text-gray-800">Custom Design Solutions</h4>
                  <p className="text-gray-600">Tailored designs to match your brand's unique identity</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-medium text-lg text-gray-800">Global Shipping</h4>
                  <p className="text-gray-600">Reliable worldwide shipping to clients across the globe</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-medium text-lg text-gray-800">Flexible Order Quantities</h4>
                  <p className="text-gray-600">Accommodating small and large orders with equal attention</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-medium text-lg text-gray-800">Full-Service Manufacturing</h4>
                  <p className="text-gray-600">End-to-end production from concept to delivery</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-gray-200 rounded-lg text-center">
              <p className="font-medium text-gray-700">
                Based at: Korpur, Airport Road, Sialkot, Punjab 51310
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
