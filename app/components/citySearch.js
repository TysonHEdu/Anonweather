import Link from "next/link";
import React from "react";
import { useState } from "react";


const CitySearch = () => {
    const [searchedCity, setSearchedCity] = useState("");

    const handleInputChange = (e) => {
        setSearchedCity(e.target.value);
    };

    const handleSearch = () => {
        // Navigate to weather page
        alert(searchedCity);
        window.location.href = `/weatherPage/`;
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
