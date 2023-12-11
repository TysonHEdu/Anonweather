"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Page() {
    const [searchedCity, setSearchedCity] = useState('');

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
        <div>
                <p>The weather in {searchedCity} is currently </p>
                
        </div>
    );
}

export default Page;


