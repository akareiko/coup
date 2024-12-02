import { motion } from "motion/react";

export default function WindMap({ weatherData }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="col-span-6 row-span-2 md:col-span-2 md:row-span-2"
        >
            <p className='font-light text-white/70'>wind map</p>
            {weatherData ? (
                <>
                    <p className="text-xl font-bold">Wind: {weatherData.current.wind_speed.toFixed(0)} m/s</p>
                    <p className="text-sm font-medium">Direction: {weatherData.current.wind_deg}°</p>
                </>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </motion.div>
    );
}
