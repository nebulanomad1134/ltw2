import React, { useEffect, useState, useContext } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './EditPlaces.css';

const EditPlaces = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [placeData, setPlaceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const placeTypes = [
    "Historical Landmarks",
    "Natural Attractions",
    "Restaurants",
    "Museums",
    "Others"
  ];

  useEffect(() => {
    fetch(`http://localhost:5000/api/places/${id}`, {
      headers: {
        "Authorization": `Bearer ${user.token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch place details');
        }
        return response.json();
      })
      .then(data => {
        setPlaceData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id, user.token]);

  const handleChangeSelectedValue = (event) => {
    setPlaceData(prevState => ({
      ...prevState,
      type: event.target.value
    }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedPlace = {
      ...placeData,
      name: form.placeName.value,
      description: form.placeDescription.value,
      location: form.placeLocation.value,
      type: form.placeType.value,
      image: form.placeImage.value,
    };

    if (user && user.token) {
      fetch(`http://localhost:5000/api/places/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`,
        },
        body: JSON.stringify(updatedPlace),
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to update place');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate('/admin/dashboard');
      })
      .catch((error) => {
        console.error("Error updating place:", error);
      });
    } else {
      console.error("User not authenticated or token is missing");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='edit-places'>
      <h2>Edit A Place!</h2>
      <form onSubmit={handleUpdate}>
        <div className='form-group'>
          <div className='form-field'>
            <Label htmlFor="placeName" value="Place Name" />
            <TextInput
              id="placeName"
              placeholder="Place Name"
              required
              type="text"
              name='placeName'
              defaultValue={placeData.name}
            />
          </div>
          <div className='form-field'>
            <Label htmlFor="placeLocation" value="Location" />
            <TextInput
              id="placeLocation"
              placeholder="Location"
              required
              type="text"
              name='placeLocation'
              defaultValue={placeData.location}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <Label htmlFor="placeImage" value="Place Image URL" />
            <TextInput
              id="placeImage"
              placeholder="Image URL"
              required
              type="text"
              name='placeImage'
              defaultValue={placeData.image}
            />
          </div>
          <div className='form-field'>
            <Label htmlFor="inputState" value="Place Type" />
            <Select
              id="inputState"
              name="placeType"
              value={placeData.type}
              onChange={handleChangeSelectedValue}
            >
              {placeTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="placeDescription" value="Place Description" />
          <Textarea
            id="placeDescription"
            placeholder="Place Description"
            required
            type="text"
            name='placeDescription'
            rows={4}
            defaultValue={placeData.description}
          />
        </div>
        <Button type="submit">Update Place</Button>
      </form>
    </div>
  );
};

export default EditPlaces;
