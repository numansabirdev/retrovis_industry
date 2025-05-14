import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { galleryItems } from '../data/gallery';

// Categories
const categories = [
  { id: 'all', name: 'All' },
  { id: 'hoodies', name: 'Hoodies' },
  { id: 'tracksuits', name: 'Tracksuits' },
  { id: 'jeans', name: 'Jeans' },
  { id: 'jackets', name: 'Jackets' },
  { id: 'custom', name: 'Custom' },
  { id: 'sportswear', name: 'Sportswear' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'casual', name: 'Casual' },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Product Gallery - Retrovis Industry';
  }, []);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (id: number) => {
    setSelectedItem(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

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
              <span className="text-secondary">Product</span> <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our showcase of high-quality apparel and manufacturing capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.id 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Gallery Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => openModal(item.id)}
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md h-80"
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
          
          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="mt-4 text-primary hover:underline"
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Products" 
            subtitle="Some of our most popular and premium quality products."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-lg overflow-hidden h-96"
            >
              <img 
                src="https://images.pexels.com/photos/5699163/pexels-photo-5699163.jpeg" 
                alt="Premium Hoodies"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Hoodies</h3>
                <p className="text-gray-200 mb-4">
                  Our signature hoodies feature quality fabrics and expert craftsmanship.
                </p>
                <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors">
                  View Collection
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-lg overflow-hidden h-96"
            >
              <img 
                src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg" 
                alt="Premium Denim"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Denim</h3>
                <p className="text-gray-200 mb-4">
                  Our denim collection combines style, comfort, and durability.
                </p>
                <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors">
                  View Collection
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={galleryItems.find(item => item.id === selectedItem)?.image} 
                alt={galleryItems.find(item => item.id === selectedItem)?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4">
                {galleryItems.find(item => item.id === selectedItem)?.title}
              </h3>
              <p className="text-primary inline-block px-2 py-1 rounded bg-primary-50 text-sm mb-4">
                {categories.find(
                  c => c.id === galleryItems.find(item => item.id === selectedItem)?.category
                )?.name || 'Custom'}
              </p>
              <p className="text-gray-600 mb-6">
                Our premium quality {galleryItems.find(item => item.id === selectedItem)?.title.toLowerCase()} 
                are crafted with attention to detail using high-quality materials. Each piece 
                showcases our commitment to superior craftsmanship and design excellence.
              </p>
              <p className="text-gray-600 mb-6">
                Available for custom orders with your brand logo, specific color requirements, 
                and design modifications to suit your needs.
              </p>
              <div className="flex">
                <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors mr-3">
                  Request Quote
                </button>
                <button 
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;