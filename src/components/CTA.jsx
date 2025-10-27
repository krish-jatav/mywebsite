"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CTASection  () {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen   overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/10 rounded-full"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white/40 rounded-full"></div>
      </motion.div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center  mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm ">Available for new projects</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl lg:text-8xl mb-6 tracking-tight"
        >
          Ready to create    something amazing?
        
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl  mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Let's collaborate to bring your vision to life. From concept to launch, 
          we'll create digital experiences that captivate and convert.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.button
            className="group relative border-2 border-black text-black px-8 py-4 rounded-full text-lg overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="relative z-10 flex items-center gap-2"
              animate={{
                x: mousePosition.x * 0.01,
                y: mousePosition.y * 0.01
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              Start Your Project
              <motion.svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.span>
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              whileHover={{ scale: 1.2 }}
            />
          </motion.button>

          <motion.button
            className="group border-2 border-black  px-8 py-4 rounded-full text-lg  hover:border-white transition-colors duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              View Our Work
              <motion.svg 
                className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>


        {/* Bottom Text */}
        <motion.div
          variants={itemVariants}
          className="mt-16  text-lg"
        >
          <p>Get a response within 24 hours • Free consultation included</p>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-20 h-20 border border-white/10 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-10 w-16 h-16 border border-white/10 rounded-lg"
        animate={{
          rotate: -360,
          y: [0, -10, 0]
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
};
