'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function SliceOfLifeSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative  flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden py-20">
      {/* SVG Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <symbol id="svg1733214326_1096" viewBox="0 0 524 352">
            {/* Envelope Shape */}
            <path
              d="M50 80 L262 200 L474 80 L474 320 L50 320 Z"
              fill="#FFFFFF"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <path
              d="M50 80 L262 200 L474 80"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            {/* Envelope Flap */}
            <path
              d="M50 80 L262 200 L474 80 L262 40 Z"
              fill="#F9FAFB"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
          </symbol>
        </defs>
      </svg>

      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center">
          {/* Main Envelope Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-12 md:p-16 lg:p-20 max-w-2xl overflow-visible">
              {/* Photos inside envelope - initially hidden */}
              
              {/* Photo 1 - Mountain Scene */}
              <motion.div
                initial={{ x: 0, y: 0, rotate: 0, scale: 0.5, opacity: 0 }}
                animate={isHovered ? {
                  x: -200,
                  y: -120,
                  rotate: -15,
                  scale: 1,
                  opacity: 1
                } : {
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 0.5,
                  opacity: 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-56 h-48 md:h-56 bg-white rounded-lg shadow-xl p-2 z-20"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 rounded-md flex items-center justify-center relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-600 to-green-400"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-300 rounded-full"></div>
                  <div className="absolute bottom-8 left-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] border-b-gray-600 z-10"></div>
                  <div className="absolute bottom-8 right-1/4 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[50px] border-b-gray-700 z-10"></div>
                </div>
              </motion.div>

              {/* Photo 2 - Laptop/Work Scene */}
              <motion.div
                initial={{ x: 0, y: 0, rotate: 0, scale: 0.5, opacity: 0 }}
                animate={isHovered ? {
                  x: 80,
                  y: -150,
                  rotate: 5,
                  scale: 1,
                  opacity: 1
                } : {
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 0.5,
                  opacity: 0
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 md:w-64 h-40 md:h-44 bg-white rounded-lg shadow-xl p-2 z-30"
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-400 rounded-md flex items-center justify-center relative overflow-hidden">
                  <div className="w-28 h-20 bg-gray-800 rounded-t-lg relative">
                    <div className="w-full h-14 bg-blue-400 mt-2 flex items-center justify-center">
                      <div className="w-16 h-8 bg-white rounded"></div>
                    </div>
                    <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gray-700"></div>
                  </div>
                  <div className="absolute top-2 left-2 w-6 h-10 bg-green-600 rounded-full"></div>
                  <div className="absolute top-2 right-2 w-4 h-8 bg-yellow-500 rounded-full"></div>
                </div>
              </motion.div>

              {/* Photo 3 - Collage Style */}
              <motion.div
                initial={{ x: 0, y: 0, rotate: 0, scale: 0.5, opacity: 0 }}
                animate={isHovered ? {
                  x: 220,
                  y: -100,
                  rotate: 12,
                  scale: 1,
                  opacity: 1
                } : {
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 0.5,
                  opacity: 0
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 md:w-52 h-52 md:h-60 bg-white rounded-lg shadow-xl p-2 z-20"
              >
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-orange-200 rounded-md flex flex-col gap-2 p-2 relative overflow-hidden">
                  <div className="flex gap-2 h-1/2">
                    <div className="flex-1 bg-red-500 rounded"></div>
                    <div className="flex-1 bg-blue-500 rounded"></div>
                  </div>
                  <div className="flex gap-2 h-1/2">
                    <div className="flex-1 bg-green-500 rounded"></div>
                    <div className="flex-1 bg-purple-500 rounded"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold text-white">
                    G
                  </div>
                </div>
              </motion.div>

              {/* SVG Container positioned behind text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
                  <svg 
                    style={{ width: '100%', height: '100%' }} 
                    viewBox="0 0 524 352" 
                    preserveAspectRatio="none" 
                    width="100%" 
                    height="100%"
                  >
                    <use href="#svg1733214326_1096"></use>
                  </svg>
                </div>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-blue-600 mb-4 relative z-10">
                Slice of my life
              </h2>
              
              {/* Smiley Face */}
              <motion.div 
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border-4 border-yellow-400 bg-yellow-50 flex items-center justify-center z-20"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute top-7 left-6 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="absolute top-7 right-6 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-5 border-b-4 border-yellow-400 rounded-b-full"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 blur-xl pointer-events-none"
          ></motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-40 blur-xl pointer-events-none"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}