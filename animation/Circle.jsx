
"use client"
import Image from "next/image";
import { CircleText } from "../public";
import { motion } from "framer-motion";
export default function Circle() {
  return (
    <div>
      <div className="h-full w-full" >
            <motion.div className="flex justify-center items-center" initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}>
            <Image src={CircleText}alt="circletext" width={150} color="#ffff"   >
            </Image>

            </motion.div>

      </div>
    </div>
  );
}
