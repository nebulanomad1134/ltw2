import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import './ManageReviews.css';

const ManageReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    if (user && user.token) {
      try {
        const response = await fetch('http://localhost:5000/api/places/reviews/all', {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data); // Directly set the reviews array from the response
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError('User not authenticated or token is missing');
    }
  };

  const handleDeleteReview = async (placeId, reviewId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this review?");
    if (confirmDelete) {
      if (user && user.token) {
        try {
          // Log placeId and reviewId for debugging
          console.log('Deleting review:', { placeId, reviewId });

          const response = await fetch(`http://localhost:5000/api/places/${placeId}/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${user.token}`,
            },
          });

          if (response.ok) {
            setReviews(reviews.filter(review => review._id !== reviewId));
          } else {
            throw new Error('Failed to delete review');
          }
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError('User not authenticated or token is missing');
      }
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="manage-reviews">
      <h3>Manage Reviews</h3>
      <ul className="reviews-list">
        {Array.isArray(reviews) && reviews.map(review => (
          <li key={review._id} className="review-item">
            <p>{review.comment} - <strong>{review.fullname}</strong></p>
            <button onClick={() => handleDeleteReview(review.placeId, review._id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageReviews;
