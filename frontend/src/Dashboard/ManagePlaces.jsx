import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './ManagePlaces.css';

const ManagePlaces = () => {
  const { user } = useContext(AuthContext);
  const [allPlaces, setAllPlaces] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/places`, {
      headers: {
        "Authorization": `Bearer ${user.token}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setAllPlaces(data);
      });
  }, [user.token]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this place?");
    if (confirmDelete) {
      fetch(`http://localhost:5000/api/places/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Handle deletion success
          setAllPlaces(allPlaces.filter(place => place._id !== id));
        });
    }
  };

  return (
    <div className='manage-places'>
      <h2>Manage Your Places Inventory!</h2>
      <div className="table-container">
        <table className="places-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Place name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Type</th>
              <th>Edit or Manage</th>
            </tr>
          </thead>
          <tbody>
            {allPlaces.map((place, index) => (
              <tr key={place._id}>
                <td>{index + 1}</td>
                <td>{place.name}</td>
                <td>{place.description}</td>
                <td>{place.location}</td>
                <td>{place.type}</td>
                <td>
                  <Link to={`/admin/dashboard/edit-places/${place._id}`} className="edit-link">
                  <button className="edit-button">Edit</button>
                  </Link>
                  <button className="delete-button2" onClick={() => handleDelete(place._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePlaces;
