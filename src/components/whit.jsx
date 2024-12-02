'use client';
import Image from "next/image"
import tt from "../../public/tt.jpg"
import dd from "../../public/mars.png"
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform  } from "motion/react"

export default function White() {
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [1800, 3500], [0, 100]);
    const yOffsetTwo = useTransform(scrollY, [2500, 3800], [0, 100]);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div className="w-[100vw] h-[130vh] md:h-[150vh] flex justify-center items-center bg-[#EDEDE5] overflow-x-hidden">
            <div className="relative w-[90%] md:w-[85%] h-[50%]">
                <div className="-z-10">
                    <motion.div style={{ y: yOffset }} className="absolute flex flex-row min-w-full justify-center left-[50%] md:left-[20%] -top-[40%]">
                            <Image
                                src={tt}
                                alt="asd"
                                className="md:w-[40vh] md:h-[40vh] object-fill"
                            />
                    </motion.div>
                    <div className="hidden md:block">
                        <motion.div style={{ y: yOffsetTwo }} className="absolute left-40 bottom-0">
                            <Image
                                src={dd}
                                alt="asd"
                                className="w-[30vw] h-[30vh] object-fit"
                            />
                        </motion.div>
                    </div>
                    
                </div>
                <div className="text-black break words z-10">
                    <div className="absolute max-w-[70%] top-0 left-0">
                        <div className="text-4xl md:text-8xl font-light">
                            <p>BREATHING DATA,</p>
                            <p>CLEAR VISION,</p>
                            <p>CLEAN AIR.</p>
                        </div>
                    </div>
                    {!isMobile &&
                        <div className="absolute top-40 right-0 rotate-90 transform origin-top-right">
                            <p>kussainov iskendir</p>
                        </div>
                    }
                    <div className="absolute max-w-[70%] md:max-w-[45%] bottom-0 right-0">
                        <div className="text-justify font-thin text-sm md:text-xl">
                            <p>Clean air is essential for maintaining good respiratory and cardiovascular health, 
                            reducing the risk of diseases like asthma and heart conditions. It reduces healthcare costs associated
                            with treating pollution-related illnesses. It supports the growth of plants and crops, which are vital
                            for food production and sustaining ecosystems.</p>
                        </div>
                        <motion.button
                            className="bw-button w-full flex justify-center text-justify font-thin text-sm md:text-xl mt-[10%]" 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            >
                            <p className="text-black text-center">
                            go to dashboard
                            </p>
                        </motion.button>
                    </div>
                    <div className="absolute bottom-0 left-0 -rotate-90 transform origin-top-left">
                        <p>web application</p>
                        <p>pusan national university</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
