import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { services } from '../../data/services';
import { Shirt as Tshirt, Heading as Thread, Scissors, Tag, Award, Package } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'tshirt':
      return <Tshirt size={40} className="text-primary" />;
    case 'thread':
      return <Thread size={40} className="text-primary" />;
    case 'scissors':
      return <Scissors size={40} className="text-primary" />;
    case 'tag':
      return <Tag size={40} className="text-primary" />;
    case 'award':
      return <Award size={40} className="text-primary" />;
    case 'package':
      return <Package size={40} className="text-primary" />;
    default:
      return <Tshirt size={40} className="text-primary" />;
  }
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="We provide comprehensive apparel manufacturing solutions from concept to delivery."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="/services" 
              className="inline-block text-primary font-medium hover:underline"
            >
              Learn more about our services →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;