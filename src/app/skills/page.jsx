"use client";
import { motion , Variants } from "framer-motion";
import { skillsPara } from "../../../constant";
export default function Skills() {
  const skillsItem = [
    "WEBSITE DESIGN",
    "WEBSITE DEVELOPMENT",
    "REDESIGN",
    "E-COMMERCE",
  ];
  const toolsItem = [
    "HTML",
    "CSS",
    "TAILWIND CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "REACT.JS",
    "NEXT.JS",
    "NODE.JS",
    "EXPRESS.JS",
    "GITHUB",
  ];
   const Animate={
    offscreen:{x:200},
    onscreen:{x:0,
      transition:{type:"spring",bounce:0.4, duration:3}
    }
   }
   const elmAnimate={
    offscreen:{opacity:0},
    onscreen:{opacity:1,
      transition:{type:"spring", duration:3}
    }
   }

  return (
    <div className=" text-[#CECEC4] rounded-t-[2rem]">
      <div className="lg:mt-4 lg:p-28 p-10  ">
        <motion.h1 initial={"offscreen"} whileInView={"onscreen"} viewport={{once:false, amount:0.7}} variants={elmAnimate} className=" text-4xl lg:text-[10rem]">SKILLS</motion.h1>
        <motion.h1 initial={"offscreen"} whileInView={"onscreen"} viewport={{once:false, amount:0.7}} variants={elmAnimate} className="text-4xl lg:text-[10rem] lg:ml-[10rem] lg:mt-40">
          & FREELANCE
        </motion.h1>
      </div>
      <div className="lg:flex">
        <div className=" lg:w-[50vw] ">
          <div className="  lg:w-[40vw] mt-20 ml-10">
            <motion.h1 initial={"offscreen"} whileInView={"onscreen"}  variants={elmAnimate} className=" lg:text-7xl text-4xl py-5   ">SKILLS</motion.h1>
            <p className=" font-thin pr-10">{skillsPara.para1}</p>
          </div>
        </div>
        <div className="border-l-2 border-b-2 w-full overflow-hidden">
          <motion.div  className="text-2xl lg:text-5xl lg:mt-24 mt-10 mb-10 px-10">
            {skillsItem.map((skill, index) => (
              <motion.div initial={"offscreen"} whileInView={"onscreen"}  transition={{staggerChildren:0.5}}  variants={Animate} key={index} className="py-3">
                <ul  >
                  <li>{skill}</li>
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="text-slate-50 lg:w-[50vw] ">
          <div className="  lg:w-[40vw] mt-20 ml-10">
            <motion.h1 initial={"offscreen"} whileInView={"onscreen"}  variants={elmAnimate} className=" lg:text-7xl text-4xl py-5  ">TOOLS</motion.h1>
            <p className=" pr-10 font-thin">
              I then bring your online vision to life with coding or CMS,
              depending on your needs.{" "}
            </p>
          </div>
        </div>
        <div  className="lg:border-l-2 w-full   overflow-hidden ">
          <div className="text-2xl lg:text-5xl mb-10 mt-24 px-10">
            {toolsItem.map((tool, index) => (
              <motion.div initial={"offscreen"} whileInView={"onscreen"}  transition={{staggerChildren:0.5}}  variants={Animate} key={index} className="py-3">
                <ul>
                  <li>{tool}</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
