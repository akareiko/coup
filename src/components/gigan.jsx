'use client';
import tt from "../../public/venus.jpg"
import Image from "next/image"
import ss from "../../public/seveger.svg"
import { motion } from "motion/react";

export default function Gigan() {
    return(
        <div className="pt-40 md:pb-40">
            <div className="flex flex-row min-w-width justify-center">
                <div className="relative">
                        <Image
                            src={tt}
                            alt="asd"
                            className="md:w-50 object-cover h-[130vh] md:h-[150vh] rounded-none md:rounded-2xl"
                        />
                        <Image
                            className="absolute h-[50vh] bottom-0 md:-bottom-[20rem] md:absolute w-[100vw] md:w-[90vw] md:h-[140vh]"
                            src={ss}
                            alt="asd"
                        />
                    <div>
                        <div className="absolute left-10 top-10 z-10 text-white max-w-[20%] break-words font-thin">
                            <p>web project</p>
                        </div>
                        <div className="absolute right-10 top-10 z-10 text-right text-white max-w-[60%] text-sm md:max-w-[40%] break-words font-thin">
                            <p>the project features a glassmorphic dashboard with charts to track weather trends and real-time data via geolocation.</p>
                        </div>
                        <div className="absolute min-w-full justify-center top-40 z-10 text-center text-5xl text-white ">
                            <p>TRACK WEATHER ANYWHERE</p>
                            <motion.button
                                className="bw-button text-justify font-thin text-sm md:text-xl mt-[5%]" 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <p className="text-black text-center">
                                get to know more
                                </p>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}