import { motion } from "motion/react";

export default function Visibility({ weatherData }) {
    return(
        <motion.div
            className='col-span-3 md:col-span-1'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            <p className='font-thin text-white/70'>visibility</p>
            {weatherData ? (
                <p className="text-xl font-bold">{(weatherData.current.visibility / 1000).toFixed(0)} Km</p>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </motion.div>
    );
}