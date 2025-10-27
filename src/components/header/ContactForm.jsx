
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm ()  {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    phone: ''
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [businessImpact, setBusinessImpact] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const services = [
    'Brand Design',
    'Web Design', 
    'Development',
    '3D & Animations'
  ];

  const budgetRanges = [
    '$2k - $5k',
    '$5k - $15k',
    '$15k - $40k',
    '$40k above'
  ];

  const impactNumbers = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

  const handleServiceToggle = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      ...formData,
      selectedServices,
      selectedBudget,
      businessImpact,
      projectDetails
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
        
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <div className="text-gray-500 text-sm mb-2">
            {/* {Project Information} */}
          </div>
          {/* <h1 className="text-4xl md:text-5xl font-light mb-8">
            Let's start something great together
          </h1> */}
        </motion.div>

        <div className="space-y-12">
          {/* Personal Information */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-lg focus:border-white focus:outline-none transition-colors duration-300"
                  required
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-lg focus:border-white focus:outline-none transition-colors duration-300"
                  required
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-lg focus:border-white focus:outline-none transition-colors duration-300"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="url"
                  name="website"
                  placeholder="Website (if exists)"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-lg focus:border-white focus:outline-none transition-colors duration-300"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="md:col-span-2"
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 pb-3 text-lg focus:border-white focus:outline-none transition-colors duration-300"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Services */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl mb-6">What services are you looking for?</h2>
            <div className="flex flex-wrap gap-4">
              {services.map((service, index) => (
                <motion.button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedServices.includes(service)
                      ? 'bg-white text-black border-white'
                      : 'border-gray-600 hover:border-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </motion.section>

          {/* Budget */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl mb-6">Budget in USD</h2>
            <div className="flex flex-wrap gap-4">
              {budgetRanges.map((budget, index) => (
                <motion.button
                  key={budget}
                  type="button"
                  onClick={() => setSelectedBudget(budget)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedBudget === budget
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {budget}
                </motion.button>
              ))}
            </div>
          </motion.section>

          {/* Business Impact */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl mb-6">
              On a scale of 1-10 how much impact does this project have on your business?
            </h2>
            <div className="flex flex-wrap gap-3">
              {impactNumbers.map((number, index) => (
                <motion.button
                  key={number}
                  type="button"
                  onClick={() => setBusinessImpact(number)}
                  className={`w-12 h-12 rounded-lg border transition-all duration-300 ${
                    businessImpact === number
                      ? 'bg-white text-black border-white'
                      : 'border-gray-600 hover:border-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {number}
                </motion.button>
              ))}
            </div>
          </motion.section>

          {/* Project Details */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl mb-6">Project Details</h2>
            <motion.div
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <textarea
                name="projectDetails"
                placeholder="Tell us more about your project, goals, timeline, and any specific requirements..."
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                rows={6}
                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg p-4 text-lg focus:border-white focus:outline-none transition-colors duration-300 resize-none"
              />
            </motion.div>
          </motion.section>

          {/* Submit Button */}
          <motion.div
            className="text-center pt-8"
            variants={itemVariants}
          >
            <motion.button
              type="button"
              onClick={handleSubmit}
              className="bg-white text-black px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Send Project Brief
            </motion.button>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>We'll get back to you within 24 hours</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
