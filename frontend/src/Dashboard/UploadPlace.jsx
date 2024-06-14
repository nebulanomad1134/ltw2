import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import './UploadPlace.css';

const UploadPlace = () => {
  const placeTypes = [
    "Historical Landmarks",
    "Natural Attractions",
    "Restaurants",
    "Museums",
    "Others"
  ];

  const [selectedPlaceType, setSelectedPlaceType] = useState(placeTypes[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedPlaceType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.placeName.value;
    const description = form.placeDescription.value;
    const location = form.placeLocation.value;
    const type = form.placeType.value;
    const image = form.placeImage.value;

    const placeObj = {
      name,
      description,
      location,
      type,
      image
    };

    fetch("http://localhost:5000/api/places", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(placeObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Place uploaded successfully!");
        form.reset();
      });
  };

  return (
    <div className='upload-place'>
      <h2>Upload A Place!</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <div className='form-field'>
            <Label htmlFor="placeName" value="Place Name" />
            <TextInput id="placeName" placeholder="Place Name" required type="text" name='placeName' />
          </div>
          <div className='form-field'>
            <Label htmlFor="placeLocation" value="Location" />
            <TextInput id="placeLocation" placeholder="Location" required type="text" name='placeLocation' />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <Label htmlFor="placeImage" value="Place Image URL" />
            <TextInput id="placeImage" placeholder="Image URL" required type="text" name='placeImage' />
          </div>
          <div className='form-field'>
            <Label htmlFor="inputState" value="Place Type" />
            <Select id="inputState" name="placeType" value={selectedPlaceType} onChange={handleChangeSelectedValue}>
              {placeTypes.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="placeDescription" value="Place Description" />
          <Textarea id="placeDescription" placeholder="Place Description" required type="text" name='placeDescription' rows={4} />
        </div>
        <Button type="submit">Upload Place</Button>
      </form>
    </div>
  );
};

export default UploadPlace;
