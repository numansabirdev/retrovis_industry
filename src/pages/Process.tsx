import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { processSteps } from '../data/process';

const Process: React.FC = () => {
  useEffect(() => {
    document.title = 'Production Process - Retrovis Industry';
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
              <span className="text-secondary">Production</span> <span className="text-primary">Process</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we transform your ideas into high-quality apparel through our meticulous manufacturing process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Manufacturing Process</h2>
              <p className="text-gray-600 mb-6">
                At Retrovis Industry, we follow a comprehensive, step-by-step manufacturing process to ensure consistent quality and attention to detail in every garment we produce.
              </p>
              <p className="text-gray-600 mb-6">
                From the initial concept discussion to the final delivery, our experienced team of skilled craftspeople works diligently to bring your vision to life with precision and care.
              </p>
              <p className="text-gray-600">
                Each step in our process is carefully monitored and quality-checked to maintain our high standards and deliver products that exceed your expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg" 
                alt="Manufacturing process overview"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Step by Step" 
            subtitle="Explore each stage of our meticulous production process."
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Process steps */}
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-3">
                        Step {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-72 object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">Quality Control</h2>
              <p className="text-gray-600 mb-6">
                Quality is at the heart of everything we do at Retrovis Industry. Our comprehensive quality control process ensures that every product meets our high standards before it leaves our facility.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Quality Control Process:</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800">Material Inspection</h4>
                    <p className="text-gray-600">Rigorous testing of raw materials before production begins</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800">In-Process Checks</h4>
                    <p className="text-gray-600">Regular monitoring during manufacturing to catch issues early</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800">Final Inspection</h4>
                    <p className="text-gray-600">Thorough examination of finished products for defects</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium text-lg text-gray-800">Client Approval</h4>
                    <p className="text-gray-600">Samples sent for client review before mass production</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/5699156/pexels-photo-5699156.jpeg" 
                alt="Quality control process"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="What our clients say about our manufacturing process and results."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl text-primary">❝</div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Working with Retrovis Industry was a seamless experience from start to finish. They were transparent about their process, kept us updated at each stage, and delivered exceptional quality products on time."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Michael Johnson</h4>
                  <p className="text-sm text-gray-500">Athletic Apparel Brand</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl text-primary">❝</div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The attention to detail in Retrovis's production process is impressive. They accommodated our small order quantity while maintaining high quality standards and meticulous craftsmanship."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Sarah Williams</h4>
                  <p className="text-sm text-gray-500">Boutique Fashion Label</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl text-primary">❝</div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "We've worked with multiple manufacturers, but Retrovis Industry stands out for their thorough production process and quality control. Our team uniforms exceeded our expectations in both design and durability."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">David Chen</h4>
                  <p className="text-sm text-gray-500">Sports Team Manager</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;