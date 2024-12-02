import { motion } from "motion/react";

export default function HourlyForecast({ weatherData, onClick }) {
    if (!weatherData?.hourly) {
        return(
            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className='col-span-6 row-span-8 md:row-span-1 overflow-x-scroll no-scrollbar' 
                onClick={onClick}
            >
                <p className="text-sm text-white/70">Loading...</p>
            </motion.div>
        ); 
    }

    const hours = weatherData.hourly.slice(0, 12);
    const now = 'Now';
    const hourLabels = [now, ...hours.slice(1).map((hour) => {
        let hourLabel = new Date(hour.dt * 1000).getHours();
        return hourLabel < 10 ? `0${hourLabel}:00` : `${hourLabel}:00`;
    })];

    const hourlyItems = hours.map((hour, index) => {
        const hourLabel = hourLabels[index];
        const temp = (hour.temp - 273.15).toFixed(1);
        const iconSrc = `https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`;
        const iconAlt = hour.weather[0].description;

        return (
            <div key={hour.dt} className="flex items-center space-x-2">
                <div className="flex flex-col items-center">
                    <span>{hourLabel}</span>
                    <img
                        src={iconSrc}
                        alt={iconAlt}
                        className="w-8 h-8 mb-1"
                    />
                    <div className="font-semibold">{temp}°</div>
                </div>
            </div>
        );
    });

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className='col-span-6 row-span-8 md:row-span-1 overflow-x-scroll no-scrollbar' 
            onClick={onClick}
        >
            <div className="flex justify-between items-center space-x-4">
                {hourlyItems}
            </div>
        </motion.div>
    );
}
