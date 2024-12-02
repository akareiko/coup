import { motion, AnimatePresence } from "motion/react";

export default function WeatherBackground({ weatherData }) {
    if (!weatherData) return <div>Loading...</div>;

    const weatherBackgrounds = {
        "01n": "bg-gradient-to-t from-blue-900 to-black",
        "02n": "bg-gradient-to-t from-slate-700 to-black",
        "03n": "bg-gradient-to-t from-slate-700 to-black",
        "04n": "bg-gradient-to-t from-slate-700 to-black",
        "10n": "bg-gradient-to-t from-zinc-500 to-black",
        "13n": "bg-gradient-to-t from-black to-slate-500",
        "01d": "bg-gradient-to-t from-blue-300 to-blue-500",
        "02d": "bg-gradient-to-t from-blue-300 to-slate-500",
        "03d": "bg-gradient-to-t from-blue-300 to-slate-800",
        "04d": "bg-gradient-to-t from-blue-300 to-slate-1000",
        "10d": "bg-gradient-to-t from-blue-200 to-zinc-500",
        "13d": "bg-gradient-to-t from-blue-300 to-blue-500",
        default: "bg-gradient-to-t from-blue-300 to-blue-500",
    };

    const backgroundClass =
        weatherBackgrounds[weatherData?.current?.weather?.[0]?.icon] || weatherBackgrounds.default;

    return (
        <div className="fixed h-screen w-screen">
            <AnimatePresence mode="wait">
                <motion.div
                    key={backgroundClass}
                    className={`absolute inset-0 ${backgroundClass} -z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>
        </div>
    );
}
