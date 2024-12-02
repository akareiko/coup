export default function City({ city, weatherData, scrolled }) {
    return(
        <>
            {city && weatherData ? (
                <div>
                    {!scrolled? (
                        <>
                            <p className='text-3xl text-center font-semibold'>{city}</p>
                            <p className='text-5xl text-center font-thin'>{(weatherData.current.temp - 273.15).toFixed(0)}°</p>
                            <p className='text-xl text-center text-white/70 font-semibold'>{weatherData.current.weather[0].main}</p>
                            <p className='text-xl text-center font-semibold'>H:{(weatherData.daily[0].temp.min - 273.15).toFixed(0)}° L:{(weatherData.daily[0].temp.min - 273.15).toFixed(0)}°</p>
                        </>
                    ) : (
                        <>
                            <p className='text-3xl text-center font-semibold'>{city}</p>
                            <p className='text-xl text-center font-thin'>{(weatherData.current.temp - 273.15).toFixed(0)}° | {weatherData.current.weather[0].main}</p>
                        </>
                    )}
                </div>
            ) : (
                <div>
                    <p className='text-3xl text-center font-semibold'>Loading...</p>
                </div>
            )}     
        </>
    );
}