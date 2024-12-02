import { motion } from "motion/react";
import HourlyChart from "./HourlyChart";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import DailyChart from "./DailyChart";

export default function Overlay({ type, data, onClose }) {
    const overlayVariants = {
        hidden: { opacity: 0, scale: 0.2 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: 'easeOut' } },
        exit: { opacity: 0.3, scale: 0.5, transition: { duration: 0.15, ease: 'easeIn' } },
    };

    const renderContent = () => {
        if (type === 'chart') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M500-40q-25 0-42.5-17T440-99q0-12 4.5-23t13.5-19l42-39 42 39q9 8 13.5 19t4.5 23q0 25-17.5 42T500-40Zm-138-60-42-42 118-118 42 42-118 118Zm258-60-60-60 60-60 60 60-60 60Zm-360 0-60-60 60-60 60 60-60 60Zm40-160q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">Hourly Forecast</h2>
                    </div>
                    <HourlyChart weatherData={data} />
                </>
            );
        }

        if (type === 'dailyChart') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M500-40q-25 0-42.5-17T440-99q0-12 4.5-23t13.5-19l42-39 42 39q9 8 13.5 19t4.5 23q0 25-17.5 42T500-40Zm-138-60-42-42 118-118 42 42-118 118Zm258-60-60-60 60-60 60 60-60 60Zm-360 0-60-60 60-60 60 60-60 60Zm40-160q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">Hourly Forecast</h2>
                    </div>
                    <DailyChart weatherData={data} />
                </>
            )
        } 

        if (type === 'airQuality') {
            const isError = data?.error;

            if (isError) {
                return; 
            }
            const domPollutantInfo = data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.additionalInfo.sources;
            const domPollutantEffects = data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.additionalInfo.effects;
            const domPollutantFullName = data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.displayName.includes('PM10') ? (
                "Particulates Under 10 μm"
            ) : (
                data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.displayName.includes('PM2.5') ? (
                    "Particulates Under 2.5 μm"
                ) : (
                    data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.fullName
                )
            );

            const chartData = data.pollutants.map((pollutant) => ({
                name: pollutant.displayName,
                value: pollutant.concentration.value,
            }));
        
            const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"];

            return(
                <>
                    <div className="flex flex-row justify-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M120-380q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm120 340q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200Zm0-160q-17 0-28.5-11.5T200-400q0-17 11.5-28.5T240-440q17 0 28.5 11.5T280-400q0 17-11.5 28.5T240-360Zm0-160q-17 0-28.5-11.5T200-560q0-17 11.5-28.5T240-600q17 0 28.5 11.5T280-560q0 17-11.5 28.5T240-520Zm0-160q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 340q-25 0-42.5-17.5T340-400q0-25 17.5-42.5T400-460q25 0 42.5 17.5T460-400q0 25-17.5 42.5T400-340Zm0-160q-25 0-42.5-17.5T340-560q0-25 17.5-42.5T400-620q25 0 42.5 17.5T460-560q0 25-17.5 42.5T400-500Zm0 300q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280q17 0 28.5 11.5T440-240q0 17-11.5 28.5T400-200Zm0-480q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760q17 0 28.5 11.5T440-720q0 17-11.5 28.5T400-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 480q-25 0-42.5-17.5T500-400q0-25 17.5-42.5T560-460q25 0 42.5 17.5T620-400q0 25-17.5 42.5T560-340Zm0-160q-25 0-42.5-17.5T500-560q0-25 17.5-42.5T560-620q25 0 42.5 17.5T620-560q0 25-17.5 42.5T560-500Zm0 300q-17 0-28.5-11.5T520-240q0-17 11.5-28.5T560-280q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200Zm0-480q-17 0-28.5-11.5T520-720q0-17 11.5-28.5T560-760q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 620q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200Zm0-160q-17 0-28.5-11.5T680-400q0-17 11.5-28.5T720-440q17 0 28.5 11.5T760-400q0 17-11.5 28.5T720-360Zm0-160q-17 0-28.5-11.5T680-560q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560q0 17-11.5 28.5T720-520Zm0-160q-17 0-28.5-11.5T680-720q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720q0 17-11.5 28.5T720-680Zm120 300q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Z"/></svg>
                        <h2 className="font-bold text-lg mb-3 text-center">Air Quality</h2>
                    </div>
                    <div className="w-[80vw] md:w-[25vw] h-[60vh] divide-y divide-dashed space-y-4 text-base font-thin overflow-auto no-scrollbar">
                        <div>
                            <p className="font-bold text-lg">{data.indexes[0]?.category || 'N/A'}</p>
                            <p className="text-base mb-4 text-gray-400">Scale: {data.indexes[0]?.displayName}</p>
                            <p>Air quality index is {data.indexes[0]?.aqiDisplay}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg mb-4">Health Information</p>
                            <p>{data.healthRecommendations?.generalPopulation || 'No recommendations available.'}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg">Primary Pollutant</p>
                            <p className="text-base mb-4 text-gray-400">{domPollutantFullName || 'N/A'}</p>
                            <p className="font-bold">Sources:</p>
                            <p className="mb-4">{domPollutantInfo}</p>
                            <p className="font-bold">Effects:</p>
                            <p>{domPollutantEffects}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg mb-4">Pollutant Details</p>
                            <div>
                                {data.pollutants?.map((pollutant) => (
                                    <div key={pollutant.code}>
                                        <div className="flex flex-row min-w-width justify-between items-center">
                                            <div className="left-0 w-[20%] text-left text-gray-400">{pollutant.displayName}</div>
                                            <div className="w-[46%]">{pollutant.displayName.includes('PM') ? 'Particulates' : pollutant.fullName}</div>
                                            <div className="right-0 w-[33%] text-right text-gray-400">{pollutant.concentration.value.toFixed(0)} ppb</div>
                                        </div>
                                    </div>
                                )) || 'No pollutant data available.'}
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold mb-4">Pollutant Distribution (Pie)</p>
                            <div className="flex w-full justify-center">
                                <PieChart width={300} height={200}>
                                    <Pie
                                        data={chartData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        fill="#8884d8"
                                        label
                                    >
                                        {chartData.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold mb-4">Pollutant Concentrations (Bar)</p>
                            <div className="flex w-full justify-center">
                                <BarChart width={300} height={200} data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#36A2EB" />
                                </BarChart>
                            </div>
                        </div>
                    </div>
                </>
                
            )
        }
    };

    return (
        <motion.div 
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10"
        >
            <div className="bg-black/80 backdrop-blur text-white p-3 rounded-3xl overflow-hidden max-w-[90vw] md:max-w-[80vw] break-words border-solid border border-gray-500">
                {renderContent()}
            </div>
        </motion.div>
    );
}
