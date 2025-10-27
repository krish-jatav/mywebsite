"use client"

import { motion } from "framer-motion"

export default function SkillAnim(){
    const imageAnimate={
        offscreen:{opacity:0},
        onscreen:{opacity:1,
          transition:{type:"spring",bounce:0.4, duration:6}
        }
       }
 return(
    <motion.div>

    </motion.div>
 )
}