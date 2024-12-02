'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import GridTable from './gridTable';
import { fetchAirQualityData, fetchCityData, fetchWeatherData } from './utils/api';
import Search from './subgrid/search';
import City from './city';
import WeatherBackground from './weatherBackground';

export default function Grid() {
    const [isMobile, setIsMobile] = useState(false);
    const [airQualityData, setAirQualityData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [city, setCity] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const insideRef = useRef(null);
    const { scrollY } = useScroll({ container: insideRef });
    const yOffset = useTransform(scrollY, [-100, 100], isMobile ? [0, 0] : [80, -80]);
    const yOffsetCity = useTransform(scrollY, [-100, 100], isMobile ? [0, 0] : [0, 60]);
    const [searchCity, setSearchCity] = useState('');
    const now = new Date();
    const startOfToday = new Date(now.setHours(0, 0, 0, 0)).getTime() / 1000;
    const endOfToday = startOfToday + 86400; 
    const todayData = weatherData?.hourly.filter(
        (entry) => entry.dt >= startOfToday && entry.dt < endOfToday
    );
    const maxUVI = todayData?.reduce((max, entry) => Math.max(max, entry.uvi), 0);
    const uviRanges = [
        { range: [0, 2], message: "Low for the day" },
        { range: [3, 5], message: "Moderate for the day" },
        { range: [6, 7], message: "Will be high today" },
        { range: [8, 10], message: "Extreme, avoid sun" },
        { range: [11, Infinity], message: "UV index is Extreme. Avoid the sun entirely." },
    ];
    const uviMessage =
        uviRanges.find(({ range }) => maxUVI >= range[0] && maxUVI <= range[1])?.message ||
        "No UV data available.";

    const handleScroll = () => {
        if (insideRef.current) {
            if (insideRef.current.scrollTop > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (insideRef.current) {
            insideRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (insideRef.current) {
                insideRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        const getCurrentLocation = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    try {
                        const airQualityData = await fetchAirQualityData(latitude, longitude);
                        setAirQualityData(airQualityData);
                        const weatherData = await fetchWeatherData(latitude, longitude);
                        setWeatherData(weatherData);
                        const cityData = await fetchCityData(latitude, longitude);
                        setCity(cityData);
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }, (error) => {
                    console.error('Error getting location:', error);
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        };

        getCurrentLocation();
    }, []);

    const handleSearch = async () => {
        if (!searchCity.trim()) return;
        
        try {
            const geocodeResponse = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchCity)}`
            );
            const geocodeData = await geocodeResponse.json();
    
            if (geocodeData.length === 0) {
                console.error('City not found')
                return;
            }
    
            const { lat, lon } = geocodeData[0];
            setLocation({ latitude: lat, longitude: lon });
            setCity(geocodeData[0].display_name.split(',')[0]);
    
            const airQualityData = await fetchAirQualityData(lat, lon);
            setAirQualityData(airQualityData);
    
            const weatherData = await fetchWeatherData(lat, lon);
            setWeatherData(weatherData);
        } catch (error) {
            console.error('Error during search:', error);
        }
    };
    
    return (
        <div>
            <WeatherBackground weatherData={weatherData} />
            <div className="flex min-w-full justify-center">
                <div className='block md:hidden z-10'>
                    <div className='flex flex-col overflow-x-hidden'>
                        <div className='mt-40'>
                            <City city={city} weatherData={weatherData} scrolled={scrolled}/> 
                        </div>
                        <div className='mt-20'>
                            <Search onClick={handleSearch} value={searchCity} onChange={(e) => setSearchCity(e.target.value)}/>
                        </div>
                        <div className="overflow-hidden" >
                            <GridTable airQualityData={airQualityData} weatherData={weatherData} uviMessage={uviMessage}/>
                        </div>
                        <div className='mb-40 text-center'>weather</div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <motion.div 
                        style={{ 
                            y: yOffsetCity
                        }}
                        className='md:fixed w-[80%] justify-center md:top-[10%] md:transition-all md:duration-300'
                    > 
                        <City city={city} weatherData={weatherData} scrolled={scrolled}/> 
                    </motion.div>
                    <motion.div 
                        className='relative top-[45%] parent'
                        style={{
                            y: yOffset,
                        }}>
                        <div className='inside no-scrollbar' ref={insideRef}>
                            <Search onClick={handleSearch} value={searchCity} onChange={(e) => setSearchCity(e.target.value)}/>

                            <GridTable airQualityData={airQualityData} weatherData={weatherData} uviMessage={uviMessage}/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}