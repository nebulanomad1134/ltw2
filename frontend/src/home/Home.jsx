import React, { useEffect, useState } from 'react';
import { Banner } from './Banner';
import PopularPlaces from './PopularPlaces';
import PopupManager from '../components/Popup';

const Home = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/places')
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  const placeIdsToShow = ['666a03f8e1d1c21e8378e1e0','666a03f6e1d1c21e8378e1de', '6669dcfc56b1a886315b0f1b', '666a03dfe1d1c21e8378e1d6', '666a03f1e1d1c21e8378e1da']; // Replace with your actual place IDs

  return (
    <div>
      <Banner />
      <PopularPlaces />
      <PopupManager places={places} placeIds={placeIdsToShow} />
    </div>
  );
};

export default Home;
