import React from 'react';
import { Link } from 'react-router-dom';
// import './PlaceCards.css';

const PlaceCards = ({ place }) => {
    return (
      <div className="place-card">
        <Link to={`/place/${place._id}`} className="place-card-link">
          <img
            src={place.image}
            alt={place.name}
            className="place-card-image"
          />
        </Link>
        <div className="info">
          <h3>{place.name}</h3>
          <p>{place.location}</p>
        </div>
      </div>
    );
};

export default PlaceCards;
