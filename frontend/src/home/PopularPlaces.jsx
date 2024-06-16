import React, { useEffect, useState } from 'react';
import PlaceCards from './PlaceCards';
import './PopularPlaces.css';

const PopularPlaces = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/places").then(res => res.json()).then(data => setPlaces(data.slice(1, 13)));
    }, []);

    return (
        <div className="popular-places">
            <h2>Explore Places</h2>
            <div className="place-cards">
                {places.map(place => (
                    <PlaceCards key={place._id} place={place} />
                ))}
            </div>
        </div>
    );
}

export default PopularPlaces;
