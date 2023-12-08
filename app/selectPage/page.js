"use client";

import Link from 'next/link';
import React from 'react';
import CitySearch from '../components/citySearch';


// Create the component
const SelectPage = () => {
    // Function to navigate to favourites page
    const handleFavourites = () => {
        // Navigate to the favourites page
        window.location.href = '/favouritesPage';
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <CitySearch /> {/* Call CitySearch function */}
            <div style={{ fontSize: '75px' }}>or</div>
            <button style={{ fontSize: '75px' }} onClick={handleFavourites}>Select Favourite</button>

        </div>
    );
};

// Export the component
export default SelectPage;