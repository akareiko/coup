'use client';
import { motion } from "motion/react";

export default function MotionButton() {

  return (
      <div className="centered-button-container">
        <motion.button
          className="glass-button-rounded" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M480-192 240-432l51-51 189 189 189-189 51 51-240 240Zm0-285L240-717l51-51 189 189 189-189 51 51-240 240Z"/></svg>
        </motion.button>
      </div>
  );
}