"use client";

import Link from 'next/link';
import CitySearch from '../components/citySearch';
import React, { useState } from 'react';
    

function Page() {
    const searchedCity = CitySearch.searchedCity;
    return (
        <div>
            <p>The weather in {searchedCity} is currently</p>
            
        </div>
    );
}

export default Page;


