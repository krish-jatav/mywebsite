import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VisualIdentityPage = () => {
  const { scrollY } = useScroll();

const projects = [
  {
    id: 1,
    title: "Carving the Deep",
    image:
      "https://i.pinimg.com/736x/0b/e7/00/0be70005b07b3e571d1a79abcf697014.jpg",
    position: { top: "0%", left: "5%", rotate: "10deg" },
    size: { width: "250px", height: "350px" },
    speed: 0.2,
  },
  {
    id: 2,
    title: "Divine Design",
    image:
      "https://i.pinimg.com/736x/e3/03/21/e30321c8046ef6ada610af9b65489302.jpg",
    position: { top: "0%", right: "10%" },
    size: { width: "200px", height: "320px" },
    speed: 0.4,
  },
  {
    id: 2,
    title: "Divine Design",
    image:
      "https://i.pinimg.com/736x/e3/03/21/e30321c8046ef6ada610af9b65489302.jpg",
    position: { top: "0%", right: "43%" },
    size: { width: "200px", height: "120px" },
    speed: 0.4,
  },
  {
    id: 3,
    title: "Shell",
    image:
      "https://i.pinimg.com/736x/cf/ce/b6/cfceb6c98e952e3922c6671578c0a984.jpg",
    position: { top: "35%", right: "5%", rotate: "10deg" },
    size: { width: "300px", height: "100px" },
    speed: 0.3,
  },
  {
    id: 4,
    title: "Abstract Forms",
    image:
      "https://i.pinimg.com/1200x/ce/f3/3d/cef33dfe80fff8a44f4bb71c8bd1de28.jpg",
    position: { top: "40%", left: "0%", rotate: "10deg" },
    size: { width: "350px", height: "280px" },
    speed: 0.6,
  },
  // {
  //   id: 5,
  //   title: "Geometric Study",
  //   image:
  //     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
  //   position: { top: "0%", left: "10%" },
  //   size: { width: "250px", height: "300px" },
  //   speed: 0.5,
  // },
  {
    id: 6,
    title: "Modern Lines",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop",
    position: { top: "55%", left: "40%", rotate: "-10deg" },
    size: { width: "300px", height: "200px" },
    speed: 0.4,
  },
  {
    id: 7,
    title: "Creative Flow",
    image:
      "https://i.pinimg.com/736x/2e/e3/c5/2ee3c51e797807bcbf852a1e6986752d.jpg",
    position: { top: "50%", right: "-10%" },
    size: { width: "580px", height: "350px" },
    speed: 0.5,
  },
  {
    id: 8,
    title: "Minimal Shapes",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
    position: { top: "0%", left: "30%" },
    size: { width: "200px", height: "200px" },
    speed: 0.3,
  },
  {
    id: 9,
    title: "Organic Forms",
    image:
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=800&auto=format&fit=crop",
    position: { top: "0%", left: "60%", rotate: "-10deg" },
    size: { width: "230px", height: "200px" },
    speed: 0.6,
  },
  {
    id: 10,
    title: "Abstract Motion",
    image:
      "https://i.pinimg.com/736x/41/a1/cf/41a1cf443f6d24c4dfcebfa1a045526d.jpg",
    position: { top: "35%", right: "30%", rotate: "-0deg" },
    size: { width: "500px", height: "200px" },
    speed: 0.8,
  },
   {
    id: 11,
    title: "Abstract Motion",
    image:
      "https://i.pinimg.com/1200x/56/39/83/56398309e46a92ae25004495498fd66b.jpg",
    position: { top: "69%", right: "30%", rotate: "0deg" },
    size: { width: "500px", height: "200px" },
    speed: 0.8,
  },
  {
    id: 11,
    title: "Abstract Motion",
    image:
      "https://i.pinimg.com/1200x/86/25/18/862518717e91482a0e077abf5d04509e.jpg",
    position: { top: "70%", left: "16%", rotate: "10deg" },
    size: { width: "200px", height: "200px" },
    speed: 0.8,
  },
];


  return (
    <div className="lg:h-[180vh] overflow-hidden text-[#2D6DC4]  relative">
      {/* Floating Project Images with Scroll Parallax */}
      
      {projects.map((project, idx) => {
        const y = useTransform(scrollY, [0, 1000], [0, project.speed * 200]);

        return (
          <motion.div
            key={project.id}
            className="absolute group lg:mt-10 cursor-pointer rounded-2xl overflow-hidden shadow-2xl hidden sm:block"
            style={{
              ...project.position,
              width: project.size.width,
              height: project.size.height,
              zIndex: 10 + idx,
              y, // ✅ parallax movement
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: idx * 0.2,
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 50,
              rotateZ: Math.random() * 6 - 3,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-[#00000061] group-hover:bg-black/20 transition-all duration-500"></div>
          </motion.div>
        );
      })}

      {/* Central Content */}
      <div className="flex flex-col  items-center justify-center h-[50vh] lg:h-[100vh]   px-4 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl text-black lg:mt-10 z-50 md:text-8xl lg:text-9xl  tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hey I'm Krish
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-[#2D6DC4] text-lg">A Creative Developer</span>
          <motion.button
            className="px-6 py-2 border border-white/30 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default VisualIdentityPage;
