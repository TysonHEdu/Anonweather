"use client";

import React from 'react';

const defaultCities = ['New York', 'London', 'Tokyo', 'Calgary', 'Edmonton', 'Seoul', 'Sydney', 'Rio de Janeiro', 'Moscow', 'Paris', 'Istanbul'];

const defaultPage = () => {
    const redirectToWeatherPage = (searchedCity) => {
        // Redirect to weatherPage with the searchedCity
        // implementation goes here
        window.location.href = `weatherPage?city=${searchedCity}`;
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '250%' }}>Popular Cities</h1>
            <br/>
            <ul>
                {defaultCities.map((city) => (
                    <li>
                    <button onClick={() => redirectToWeatherPage(city)}>{city}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default defaultPage;
