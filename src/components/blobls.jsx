'use client';
import nnn from "../../public/asdsss.jpg"
import nnnaaa from "../../public/odpsofp.jpg"
import nnnaaabbbb from "../../public/pspspspps.jpg"
import { useState } from "react";
import { motion } from "motion/react"
import Image from "next/image";

export default function Flot() {
    const pollutants = [
        { title: "PM", description: "Particulate Matter" },
        { title: "NO", description: "Nitrogen Oxides  " },
        { title: "SO", description: "Sulfur Oxides    " },
        // { title: "CO", description: "Carbon Monoxide  " },
        // { title: "O3", description: "Ozone            " },
        // { title: "VOC", description: "Volatile Organic Compounds" },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const typingVariants = {
        hidden: { opacity: 0, width: "0ch" },
        visible: (descriptionLength) => ({
            opacity: 1,
            width: `${descriptionLength}ch`,
            transition: {
                duration: descriptionLength * 0.1, // Duration depends on text length
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="mt-40">
            <h1 className="text-4xl font-light text-white-600 text-center">
                Major Air Pollutants
            </h1>
            <p className="text-lg font-bold text-white-700 mt-4 text-center">
                KEY CONTAMINANTS IMPACTING AIR QUALITY AND HUMAN HEALTH
            </p>
            <div className="flex flex-row items-center justify-center space-x-[3%] mt-[5%]">
                {/* <div className="flex space-x-6"> */}
                    {/* {pollutants.map((pollutant, index) => (
                        
                    ))} */}
                {/* </div> */}
                <div>
                    <div className="cont">
                        <svg className="hehe" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="pathOne" fillRule="evenodd" clipRule="evenodd" d="M0 0H1000V1000H0V0Z M510.974 189.041C643.908 191.717 702.689 340.731 739.002 468.637C769.952 577.653 766.832 702.095 675.792 769.579C582.534 838.706 455.055 817.186 361.502 748.458C269.632 680.967 223.391 568.98 252.818 458.847C288.341 325.898 373.389 186.27 510.974 189.041Z" fill="black"/>
                        </svg>
                        <Image
                            src={nnnaaa}
                            alt="asd"
                            className="imaege"
                        />
                    </div>
                    <p className="text-center font-thin text-4xl">PM</p>
                    <p className="text-center font-thin text-xl">Particulate Matter</p>
                </div>
                <div>
                    <div className="cont">
                        <svg className="hehe" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="pathTwo" fillRule="evenodd" clipRule="evenodd" d="M0 0H1000V1000H0V0Z M469.932 195.841C555.056 201.38 636.015 225.622 695.565 286.7C764.492 357.395 833.654 448.405 809.522 544.146C785.698 638.663 675.341 668.553 588.273 712.373C497.99 757.811 400.144 844.036 312.028 794.527C225.017 745.637 262.625 616.287 243.074 518.415C224.764 426.75 150.427 331.183 204.2 254.722C259.11 176.645 374.681 189.642 469.932 195.841Z" fill="black"/>
                        </svg>
                        <Image
                            src={nnnaaabbbb}
                            alt="asd"
                            className="imaege"
                        />
                    </div>
                    <p className="text-center font-thin text-4xl">CO</p>
                    <p className="text-center font-thin text-xl">Carbon Oxides</p>
                </div>
                <div>
                    <div className="cont">
                        <svg className="hehe" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="pathThree" fillRule="evenodd" clipRule="evenodd" d="M0 0H1000V1000H0V0Z M484.334 186.367C565.612 191.676 611.191 271.097 665.214 332.055C725.586 400.177 816.939 459.404 806.439 549.82C795.252 646.161 702.726 706.353 616.577 750.907C526.316 797.588 421.503 840.965 330.357 796.038C239.816 751.408 206.052 642.796 193.943 542.582C183.485 456.039 216.1 373.884 271.181 306.318C325.379 239.834 398.74 180.777 484.334 186.367Z" fill="black"/>
                        </svg>
                        <Image
                            src={nnn}
                            alt="asd"
                            className="imaege"
                        />
                    </div>
                    <p className="text-center font-thin text-4xl">SO</p>
                    <p className="text-center font-thin text-xl">Sulfur Oxides</p>
                </div>
            </div>
            <div className="w-full flex justify-center">
            <motion.button
                className="bw-button text-justify font-thin text-sm md:text-xl mt-[5%]" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <p className="text-black text-center">
                know air pollutants in your area
                </p>
            </motion.button>
            </div>
        </div>
    );
}
