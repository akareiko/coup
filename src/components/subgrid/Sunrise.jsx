import { motion } from "motion/react";

export default function Sunrise({ weatherData }) {
    return(
        <motion.div
            className='col-span-3 md:col-span-1'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            <p className='font-thin text-white/70'>sunrise</p>
            {weatherData ? (
                <>
                    <p className='text-xl font-bold'>{new Date(weatherData.current.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}</p>
                    <p className="text-sm font-medium">Sunset: {new Date(weatherData.current.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}</p>
                </>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </motion.div>
    );
}