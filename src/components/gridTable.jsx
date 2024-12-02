import { useState, useEffect, useRef } from 'react';
import HourlyForecast from './subgrid/HourlyForecast';
import DailyForecast from './subgrid/DailyForecast';
import AirQuality from './subgrid/AirQuality';
import WindMap from './subgrid/WindMap';
import Overlay from './subgrid/Overlay';
import UVIndex from './subgrid/UVIndex';
import Sunrise from './subgrid/Sunrise';
import FeelsLike from './subgrid/FeelsLike';
import Humidity from './subgrid/Humidity';
import Pressure from './subgrid/Pressure';
import Visibility from './subgrid/Visibility';
import { AnimatePresence } from "motion/react";

export default function GridTable({ weatherData, airQualityData, uviMessage}) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayType, setOverlayType] = useState(null);
    const [overlayData, setOverlayData] = useState(null);
    const gridRef = useRef(null);
    const handleHourlyForecastClick = () => {
        setOverlayType('chart');
        setOverlayData(weatherData);
        setShowOverlay(true);
    };

    const handleAirQualityClick = () => {
        setOverlayType('airQuality');
        setOverlayData(airQualityData);
        setShowOverlay(true);
    };

    const handleOutsideClick = (e) => {
        if (gridRef.current && !gridRef.current.contains(e.target)) {
            setShowOverlay(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return(
        <>
        <div className="grid grid-cols-6 grid-rows-13 md:grid-rows-5 gap-4 md:h-[70vh] w-[90vw] md:w-[80vw] mt-[1%]" ref={gridRef} style={{ scale: 0.97 }}>
            <HourlyForecast weatherData={weatherData} onClick={handleHourlyForecastClick}/>
            <DailyForecast weatherData={weatherData}/>
            <AirQuality airQualityData={airQualityData} onClick={handleAirQualityClick}/>
            <WindMap weatherData={weatherData}/>
            <UVIndex weatherData={weatherData} uviMessage={uviMessage}/>
            <Sunrise weatherData={weatherData}/>
            <FeelsLike weatherData={weatherData}/>
            <Humidity weatherData={weatherData}/>
            <Pressure weatherData={weatherData}/>
            <Visibility weatherData={weatherData}/>
        </div>
        <AnimatePresence>
            {showOverlay && 
                <Overlay 
                    type={overlayType} 
                    data={overlayData} 
                    onClose={() => setOverlayType(null)} 
                />}
        </AnimatePresence>
        </>
    );
}