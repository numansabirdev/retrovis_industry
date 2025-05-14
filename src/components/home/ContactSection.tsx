import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Reach out for inquiries, quotes, or to discuss your custom apparel needs."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-full mr-4">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800">Phone</h4>
                  <a href="tel:+923068423522" className="text-gray-600 hover:text-primary transition-colors">
                    +92 306 8423522
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-full mr-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800">Email</h4>
                  <a href="mailto:contact@retrovisindustry.com" className="text-gray-600 hover:text-primary transition-colors">
                    contact@retrovisindustry.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    Korpur, Airport Road, Sialkot, Punjab 51310
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-full mr-4">
                  <MessageSquare size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800">WhatsApp</h4>
                  <a href="https://wa.me/923068423522" className="text-gray-600 hover:text-primary transition-colors">
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://wa.me/923068423522" 
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                variant="primary"
                fullWidth={true}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;