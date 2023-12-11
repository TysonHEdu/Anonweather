import React from "react";
import { useState } from "react";


const CitySearch = (city) => {
    const [searchedCity, setSearchedCity] = useState("");

    const handleInputChange = (e) => {
        setSearchedCity(e.target.value);
    };

    const handleSearch = () => {
        // Navigate to weather page
        window.location.href = `/weatherPage/?city=${searchedCity}`;
    };
    

    return (
        <div>
            <input
                type="text"
                value={searchedCity}
                onChange={handleInputChange}
                style={{ backgroundColor: "black", color: "white", border: "1px solid grey" }}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default CitySearch;

export function searchedCity() {
    return searchedCity;
}