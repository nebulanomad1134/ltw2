import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import './Popup.css';

const Popup = ({ place, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <h2>{place.name}</h2>
          <img src={place.image} alt={place.name} className="popup-image" />
          <p>{place.description}</p>
          <Link to={`/place/${place._id}`} className="popup-link">View Place</Link>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const PopupManager = ({ places, placeIds }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(null);
  const [cookies, setCookie] = useCookies(['shownPopups']);

  useEffect(() => {
    const shownPopups = cookies.shownPopups || [];
    const filteredPlaces = placeIds
      ? places.filter(place => placeIds.includes(place._id) && !shownPopups.includes(place._id))
      : places.filter(place => !shownPopups.includes(place._id));

    if (filteredPlaces.length > 0) {
      const place = filteredPlaces[Math.floor(Math.random() * filteredPlaces.length)];
      setCurrentPlace(place);

      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 60000); // time to pop up

      return () => clearTimeout(timer);
    }
  }, [places, placeIds, cookies.shownPopups]);

  const handleClose = () => {
    setShowPopup(false);
    const shownPopups = cookies.shownPopups || [];
    setCookie('shownPopups', [...shownPopups, currentPlace._id], { path: '/' });
  };

  if (!showPopup || !currentPlace) return null;

  return <Popup place={currentPlace} onClose={handleClose} />;
};

export default PopupManager;
