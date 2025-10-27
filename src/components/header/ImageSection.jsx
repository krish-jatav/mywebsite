"use client"; // required for client-side animation

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageSection() {
  return (
    <div className=" h-full w-full">
    <motion.div
  className="flex flex-wrap lg:flex-nowrap gap-4 p-5 w-full h-auto lg:h-[75vh]"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
>
  <div className="w-full sm:w-1/2 lg:w-1/4 min-h-96 lg:h-full relative">
    <Image
      src="https://i.pinimg.com/736x/a0/24/a2/a024a24baae26a76b32287f9522059b1.jpg"
      alt="Web Development Illustration"
      fill
      className="object-cover "
    />
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/4 min-h-96 lg:h-full relative">
    <Image
      src="https://i.pinimg.com/736x/61/d4/78/61d478adae3372e9d7d8cbae5b15c8be.jpg"
      alt="Web Development Illustration"
      fill
      className="object-cover "
    />
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/4 min-h-96 lg:h-full relative">
    <Image
      src="https://i.pinimg.com/736x/df/99/fc/df99fcf6c34c6ce3a5c2ff3ab24bca19.jpg"
      alt="Web Development Illustration"
      fill
      className="object-cover "
    />
  </div>

  <div className="w-full sm:w-1/2 lg:w-1/4 min-h-96 lg:h-full relative">
    <Image
      src="https://i.pinimg.com/736x/3a/df/0e/3adf0e25d1f217e6081cf2c1ecd2bef7.jpg"
      alt="Web Development Illustration"
      fill
      className="object-cover "
    />
  </div>
</motion.div>

    </div>
  );
}
