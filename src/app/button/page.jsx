"use client"

import { motion } from "framer-motion";
import { MoveDownRight } from "lucide-react";
import { useRef, useState } from 'react';

export default function ButtonCmp({children,
    onClick,
    type = 'button',
    disabled = false,
    variant = 'primary',}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div className=" py-5">
            <motion.button
                ref={ref}

                className="rounded-full  flex py-2 absolute hover:bg-transparent hover:text-black transition-all duration-1000  px-3 mt-3 border-2 border-[#bebebe]  bg-white text-[#000]"
            >
             <span><MoveDownRight></MoveDownRight></span>{children}
            </motion.button>
        </motion.div>
    );
}
