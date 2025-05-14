import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { Shirt as Tshirt, Heading as Thread, Scissors, Tag, Award, Package } from 'lucide-react';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services - Retrovis Industry';
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-secondary">Our</span> <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive apparel manufacturing solutions for brands of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Tshirt size={32} className="text-primary mr-3" />
                <h2 className="text-3xl font-bold">Brands & Team Apparel</h2>
              </div>
              <p className="text-gray-600 mb-6">
                We create high-quality custom apparel for brands and teams, meeting your exact specifications for a perfect fit and finish. Our expertise spans across various garment types including hoodies, tracksuits, jeans, jackets, and more.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need uniforms for your sports team, branded merchandise for your company, or a complete clothing line for your brand, our skilled team can bring your vision to life with precision and quality.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Custom design and patterns tailored to your brand identity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Consistent sizing and fit across all garments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>High-quality materials for durability and comfort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Attention to detail in every stitch and seam</span>
                </li>
              </ul>
              <Button 
                variant="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Request a Quote
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/5699163/pexels-photo-5699163.jpeg" 
                alt="Custom apparel manufacturing"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center mb-4">
                <Thread size={32} className="text-primary mr-3" />
                <h2 className="text-3xl font-bold">Embroidery & Printing</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our expert embroidery, sublimation, and printing services allow you to brand your apparel with precision and durability. We use advanced techniques to ensure vibrant, long-lasting results on all types of fabrics.
              </p>
              <p className="text-gray-600 mb-6">
                From simple logo embroidery to complex multi-color designs and all-over prints, we have the equipment and expertise to handle projects of any complexity.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>High-precision embroidery for logos and designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Vibrant sublimation printing for all-over designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Screen printing for durable, cost-effective results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>DTG (Direct to Garment) printing for detailed designs</span>
                </li>
              </ul>
              <Button 
                variant="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Discuss Your Project
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden order-2 md:order-1"
            >
              <img 
                src="https://images.pexels.com/photos/5699394/pexels-photo-5699394.jpeg" 
                alt="Embroidery and printing services"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Scissors size={32} className="text-primary mr-3" />
                <h2 className="text-3xl font-bold">Cut & Sew Services</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our full custom design and cut & sew service takes your apparel from pattern making to finished garments, tailored precisely to your requirements. We handle the entire production process with meticulous attention to detail.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you have your own designs or need assistance developing patterns, our experienced team will work closely with you to create premium quality garments that meet your specifications.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Pattern making and design development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Precision cutting for consistent sizing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Expert stitching with quality control at every step</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Sample development and production scaling</span>
                </li>
              </ul>
              <Button 
                variant="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/4614227/pexels-photo-4614227.jpeg" 
                alt="Cut and sew services"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Additional Services" 
            subtitle="Complementary services to enhance your apparel manufacturing experience."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Tag size={40} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Custom Branding</h3>
              <p className="text-gray-600 mb-4">
                Create unique branding elements including custom logos, labels, and tags for that professional finishing touch.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Custom neck labels and hang tags</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Woven and printed brand patches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Care instructions and size labels</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Award size={40} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Alibaba Supplier</h3>
              <p className="text-gray-600 mb-4">
                As a certified Alibaba supplier, we offer reliable service and quality assurance for global customers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Verified business credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Secure global transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>International shipping expertise</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Package size={40} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Low Quantity Orders</h3>
              <p className="text-gray-600 mb-4">
                Flexible production options including low minimum order quantities to meet the needs of businesses of all sizes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Small batch production available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Same quality standards for all orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Scalable production as you grow</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your apparel manufacturing needs and get a personalized quote.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;