"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    const [selectedCity, setSelectedCity] = useState('');

    const handleInputChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center'}}>
            <text style={{ fontSize: '80px' }}>
                <input type="text" value={selectedCity} onChange={handleInputChange} placeholder="SEARCH" style={{ textAlign: 'center', background: 'none' }} />
                <br/>
                or
                <br/>
                <Link href="/favouritesPage">
                    SELECT FAVOURITE
                </Link>
            </text>
        </div>
    );  
};

export default Page;

