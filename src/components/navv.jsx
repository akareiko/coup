import React from 'react';
import { motion } from "motion/react";

const GlassmorphismNavbar = () => {
  return (
    <>
      {/* <nav className="fixed top-4 left-4 w-auto max-w-[90%] sm:max-w-[70%] md:max-w-[50%]  pl-8 pr-8 pt-4 pb-4 glass-button flex justify-between items-center font-medium z-50"> */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-auto max-w-[90%] sm:max-w-[70%] md:max-w-[50%]  pl-8 pr-8 pt-4 pb-4 glass-button flex justify-between items-center font-medium z-50">
        {/* <div className="text-2xl font-bold text-white">coupte</div> */}
        <div className='flex flex-col w-full items-center'>
          <ul className="flex flex-row space-x-6 navtext">
              <li>
                <a href="/" className="text-white font-thin hover:text-gray-300">home</a>
              </li>
              <li>
                <a href="/run" className="text-white font-thin hover:text-gray-300">dashboard</a>
              </li>
              <li>
                <a href="/about" className="text-white font-thin hover:text-gray-300">about</a>
              </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
};

export default GlassmorphismNavbar;
