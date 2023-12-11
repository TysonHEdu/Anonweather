"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Page() {
    const [searchedCity, setSearchedCity] = useState('');
    const [weatherData, setWeatherData] = useState(null); // Add state for weather data

    useEffect(() => {
        const fetchData = async () => {
            const city = new URLSearchParams(window.location.search).get("city");
            setSearchedCity(city);
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=865af4c57d99d1130626b9657b78a2b2`);
                console.log(response);
                setWeatherData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <p style={{ fontSize: '175%' }}>The weather in {searchedCity} is currently experiencing {weatherData && weatherData.weather[0].description} and is { weatherData && weatherData.main.temp } kelvin</p> {/* Display weather data */}
        </div>
        
        
    );
}

export default Page;


