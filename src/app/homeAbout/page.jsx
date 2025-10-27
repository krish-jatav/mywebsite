"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Plus, ArrowUpRight, Minus } from "lucide-react";

const homeAboutdata = {
  para1: "A creative frontend developer crafting digital experiences that blend aesthetics with functionality. Transforming ideas into immersive web applications.",
  customWebPara: "Crafting bespoke digital experiences tailored to your brand identity. Every pixel, every interaction thoughtfully designed.",
  modernFrameWorkpara: "Leveraging cutting-edge technologies like React, Next.js, and modern CSS frameworks to build performant applications.",
  ResponsiveDesignPara: "Fluid, adaptive designs that seamlessly transition across all devices. Mobile-first approach ensuring optimal experiences everywhere."
};

export default function HomeAbout() {
  const [activeService, setActiveService] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    { id: 1, title: "Custom Web Interfaces", content: homeAboutdata.customWebPara, number: "01" },
    { id: 2, title: "Modern Frameworks", content: homeAboutdata.modernFrameWorkpara, number: "02" },
    { id: 3, title: "Responsive Design", content: homeAboutdata.ResponsiveDesignPara, number: "03" }
  ];

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div ref={containerRef} className="relative  overflow-hidden">
      {/* Ambient Background Effects */}
      {/* <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div> */}

      {/* Custom Cursor Effect */}
      <motion.div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: cursorPos.x - 8, y: cursorPos.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <motion.div 
        style={{ opacity }}
        className="relative px-6 md:px-12 lg:px-24 "
      >
        {/* Hero About Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="flex items-center gap-3"
          >
            <div className="" />
            <span className="lg:text-8xl text-center text-2xl lg:py-20 w-full">About</span>
          </motion.div>

          {/* Main Title with Parallax */}
          <motion.div style={{ y: smoothY }} className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false }}
              className="text-3xl lg:text-left text-center md:text-8xl lg:text-9xl font-light leading-none  tracking-tight"
            >
              Crafting Digital Dreams
            </motion.h1>
          </motion.div>

          {/* Description with Stagger */}
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false }}
              className="text-xl md:text-3xl font-light leading-relaxed mb-8"
            >
              {homeAboutdata.para1}
            </motion.p>
            
            <motion.a
              href="/about"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false }}
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border-b border-white pb-2 hover:border-gray-400 transition-colors group"
            >
              Explore More
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </motion.section>

        {/* Services Section - Two Column Layout */}
        <section className="grid lg:grid-cols-2 gap-20 lg:gap-32 pt-20">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.5 }}
            className="sticky top-32 h-fit"
          >
      
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight">
              Web
              <br />
              Development
            </h2>
            
            <p className="mt-12 text-lg max-w-md leading-relaxed">
              Creating stunning and responsive web interfaces with modern technologies and cutting-edge design principles.
            </p>
          </motion.div>

          {/* Right: Expandable Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-1"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="border-b border-gray-800 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleService(service.id)}
                  className="w-full py-5 flex items-center justify-between group hover:bg-white/5 transition-colors px-4 md:px-8"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-4xl text-[#70EB24] md:text-6xl font-light  transition-colors">
                      {service.number}
                    </span>
                    <span className="text-xl md:text-3xl font-light tracking-wide">
                      {service.title}
                    </span>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: activeService === service.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeService === service.id ? "auto" : 0,
                    opacity: activeService === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 text-lg leading-relaxed pb-8 px-4 md:px-8 pl-20 md:pl-32">
                    {service.content}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}