import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { galleryItems } from '../../data/gallery';

// Categories
const categories = [
  { id: 'all', name: 'All' },
  { id: 'hoodies', name: 'Hoodies' },
  { id: 'tracksuits', name: 'Tracksuits' },
  { id: 'jeans', name: 'Jeans' },
  { id: 'jackets', name: 'Jackets' },
];

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Display Gallery" 
          subtitle="Explore our high-quality apparel manufacturing portfolio."
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg shadow-md h-80"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-primary bg-white inline-block px-2 py-1 rounded text-sm">
                  {categories.find(c => c.id === item.category)?.name || 'Custom'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="primary"
            onClick={() => window.location.href = '/gallery'}
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;