'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'DesignFlow',
    subtitle: 'यूआई/यूएक्स विशेषज्ञ',
    description: 'UI/UX DESIGN',
    services: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    duration: '₹1.5L',
    color: 'from-blue-500 to-blue-600',
    icon: '🎨'
  },
  {
    title: 'PixelVision',
    subtitle: 'रेस्पॉन्सिव डिज़ाइन',
    description: 'RESPONSIVE WEBSITE',
    services: ['Mobile First', 'Cross-Browser', 'Adaptive Layout', 'Performance'],
    duration: '₹1L',
    color: 'from-indigo-500 to-indigo-600',
    icon: '📱'
  },
  {
    title: 'CreativePort',
    subtitle: 'पोर्टफोलियो डिज़ाइन',
    description: 'AGENCY PORTFOLIO',
    services: ['Brand Identity', 'Visual Design', 'Interactive UI', 'Animations'],
    duration: '₹1.5L',
    color: 'from-violet-500 to-violet-600',
    icon: '💼'
  },
  {
    title: 'ProductNest',
    subtitle: 'उत्पाद डिज़ाइन',
    description: 'PRODUCT UI DESIGN',
    services: ['User Flow', 'Interface Design', 'Micro-interactions', 'Testing'],
    duration: '₹2L',
    color: 'from-purple-500 to-purple-600',
    icon: '🚀'
  },
  {
    title: 'WebForge',
    subtitle: 'वेब विकास',
    description: 'REACT / NEXT.JS',
    services: ['SPA Development', 'SSR/SSG', 'API Integration', 'State Management'],
    duration: '₹2L',
    color: 'from-cyan-500 to-cyan-600',
    icon: '💻'
  },
];

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col w-full sm:w-[280px] bg-[#000000] rounded-3xl overflow-hidden shadow border border-gray-100 hover:shadow-3xl transition-all duration-300">
      {/* Header with gradient */}
      <div className={`relative min-h-[160px] sm:min-h-[200px] bg-black flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
               backgroundSize: '24px 24px'
             }}>
        </div>
        <div className="relative z-10 text-white text-center">
          <div className="text-xl sm:text-2xl opacity-90">{project.title}</div>
        </div>
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-bl-full"></div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div>
          <div className="inline-block w-full p-2 bg-gradient-to-r from-blue-50 to-indigo-50">
            <p className="text-xs text-black tracking-wide">{project.description}</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-2 sm:space-y-2.5 bg-[#70eb24] p-2 rounded">
          <p className="text-xs uppercase tracking-wider">Included Services</p>
          {project.services.map((service, idx) => (
            <div key={idx} className="flex items-center text-xs sm:text-sm text-black">
              <div className={`w-2 h-2 rounded-full bg-black mr-2 sm:mr-3 flex-shrink-0`}></div>
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectCardsSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const centerIndex = Math.floor(projects.length / 2);

  // Smooth card animations with stacked effect
  const left1X = useTransform(scrollYProgress, [0, 0.4], [0, -595]);
  const left1Scale = useTransform(scrollYProgress, [0, 0.4], [0.75, 1]);
  const left1Opacity = useTransform(scrollYProgress, [0, 0.15], [0.4, 1]);
  const left1Rotate = useTransform(scrollYProgress, [0, 0.4], [10, 0]);
  
  const left2X = useTransform(scrollYProgress, [0.05, 0.45], [0, -305]);
  const left2Scale = useTransform(scrollYProgress, [0.05, 0.45], [0.85, 1]);
  const left2Opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
  const left2Rotate = useTransform(scrollYProgress, [0.05, 0.45], [6, 0]);
  
  const centerScale = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1.05]);
  const centerOpacity = useTransform(scrollYProgress, [0, 0.25], [0.7, 1]);
  
  const right1X = useTransform(scrollYProgress, [0.15, 0.55], [0, 305]);
  const right1Scale = useTransform(scrollYProgress, [0.15, 0.55], [0.85, 1]);
  const right1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.6, 1]);
  const right1Rotate = useTransform(scrollYProgress, [0.15, 0.55], [-6, 0]);
  
  const right2X = useTransform(scrollYProgress, [0.2, 0.6], [0, 595]);
  const right2Scale = useTransform(scrollYProgress, [0.2, 0.6], [0.75, 1]);
  const right2Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0.4, 1]);
  const right2Rotate = useTransform(scrollYProgress, [0.2, 0.6], [-10, 0]);

  // Mobile view - simple grid
  if (isMobile) {
    return (
      <div className="px-4 py-8">
        <h1 className="text-3xl mb-8 text-center font-bold">Services</h1>
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    );
  }

  // Desktop view - animated scroll
  return (
    <div ref={containerRef} className="relative p-5" 
         style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen flex-col flex items-center justify-center overflow-hidden">
        <h1 className="text-6xl lg:text-8xl mb-20 lg:mb-28 text-center">Services</h1>
        <div className="w-full relative">
          <div className="relative flex items-start justify-center">
            <div className="relative h-[50vh]">
              {projects.map((project, index) => {
                let style = {};
                let zIndex = projects.length - index;
                
                if (index === 0) {
                  style = { 
                    x: left1X, 
                    scale: left1Scale, 
                    opacity: left1Opacity,
                    rotate: left1Rotate
                  };
                  zIndex = 1;
                }
                else if (index === 1) {
                  style = { 
                    x: left2X, 
                    scale: left2Scale, 
                    opacity: left2Opacity,
                    rotate: left2Rotate
                  };
                  zIndex = 2;
                }
                else if (index === centerIndex) {
                  style = { 
                    scale: centerScale, 
                    opacity: centerOpacity 
                  };
                  zIndex = 5;
                }
                else if (index === 3) {
                  style = { 
                    x: right1X, 
                    scale: right1Scale, 
                    opacity: right1Opacity,
                    rotate: right1Rotate
                  };
                  zIndex = 2;
                }
                else {
                  style = { 
                    x: right2X, 
                    scale: right2Scale, 
                    opacity: right2Opacity,
                    rotate: right2Rotate
                  };
                  zIndex = 1;
                }

                return (
                  <motion.div 
                    key={index}
                    style={{
                      ...style,
                      zIndex,
                      position: 'absolute',
                      left: '50%',
                      translateX: '-50%',
                      top: '50%',
                      translateY: '-50%'
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 70, 
                      damping: 25 
                    }}
                  >
                    <div className={`${index === centerIndex ? "ring-2 ring-[#000000] ring-offset-4 rounded-3xl" : ""}`}>
                      <ProjectCard project={project} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}