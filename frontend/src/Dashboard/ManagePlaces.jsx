import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';
import './ManagePlaces.css';

const ManagePlaces = () => {
  const [allPlaces, setAllPlaces] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/places`)
      .then((res) => res.json())
      .then((data) => {
        setAllPlaces(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/places/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle deletion success
      });
  };

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='manage-places'>
      <h2>Manage Your Places Inventory!</h2>
      <div className="table-container">
        <table className="table">
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
                  <Link to={`/admin/dashboard/edit-places/${place._id}`} className="edit-link">Edit</Link>
                  <button onClick={() => handleDelete(place._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          layout="pagination"
          nextLabel="Go forward"
          onPageChange={onPageChange}
          previousLabel="Go back"
          showIcons
          totalPages={1000}
        />
      </div>
    </div>
  );
};

export default ManagePlaces;
