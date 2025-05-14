import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { processSteps } from '../../data/process';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Production Process" 
          subtitle="Our comprehensive manufacturing process ensures quality at every step."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Steps list */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Step by Step</h3>
              
              <div className="space-y-2">
                {processSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      activeStep === index 
                        ? 'bg-primary text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                        activeStep === index ? 'bg-white text-primary' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="font-medium">{step.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Active step details */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 rounded-lg overflow-hidden h-full"
            >
              <div className="aspect-w-16 aspect-h-9 w-full h-72 relative">
                <img 
                  src={processSteps[activeStep].image} 
                  alt={processSteps[activeStep].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                    Step {activeStep + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {processSteps[activeStep].title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>
                
                <div className="mt-6 flex justify-between">
                  <button 
                    onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : prev))}
                    disabled={activeStep === 0}
                    className={`px-4 py-2 rounded-lg ${
                      activeStep === 0 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Previous
                  </button>
                  
                  <button 
                    onClick={() => setActiveStep(prev => (prev < processSteps.length - 1 ? prev + 1 : prev))}
                    disabled={activeStep === processSteps.length - 1}
                    className={`px-4 py-2 rounded-lg ${
                      activeStep === processSteps.length - 1 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-primary text-white hover:bg-primary-600'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;