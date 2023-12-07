
import React from 'react';

const favouriteCities = ['New York', 'London', 'Tokyo'];

const FavouritesPage = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>My Favourite Cities</h1>
            <ul>
                {favouriteCities.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul>
        </div>
    );
};

export default FavouritesPage;
