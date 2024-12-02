export const fetchCityData = async (latitude, longitude) => {
    try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        return data.address?.city;
      } catch (error) {
          console.error('Error fetching city data:', error);
      }
}

export const fetchAirQualityData = async (latitude, longitude) => {
    try {
        const response = await fetch(
            'https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyAfZbGUWpif8YB63j63UKVbsTplI8ZdvBE',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    location: {
                        latitude,
                        longitude,
                    },
                    extraComputations: [
                        "HEALTH_RECOMMENDATIONS",
                        "DOMINANT_POLLUTANT_CONCENTRATION",
                        "POLLUTANT_CONCENTRATION",
                        "LOCAL_AQI",
                        "POLLUTANT_ADDITIONAL_INFO",
                    ],
                }),
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching air quality data:', error);
    }
};

export const fetchWeatherData = async (latitude, longitude) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=d5c90f7ff7a52c654ba7724998f3c44a`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};