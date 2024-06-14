import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PlaceDetails.css';

const PlaceDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/places/${id}`);
        if (!response.ok) {
          throw new Error('Failed to load place details');
        }
        const data = await response.json();
        setPlace(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlace();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      rating,
      comment,
      email,
      fullname: fullName,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/places/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (response.ok) {
        setMessage('Review submitted successfully!');
        setPlace((prevPlace) => ({
          ...prevPlace,
          reviews: [...prevPlace.reviews, review],
        }));
        setRating(0);
        setComment('');
        setEmail('');
        setFullName('');
      } else {
        setMessage('Failed to submit review. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to submit review. Please try again.');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!place) {
    return <div>Loading...</div>;
  }

  const { name, description, location, type, image, reviews } = place;

  return (
    <div className="place-details">
      <div className="place-header">
        <h1>{name}</h1>
      </div>
      <div className="place-body">
        <img src={image} alt={name} className="place-image" />
        <div className="place-info">
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Type:</strong> {type}</p>
        </div>
      </div>
      <div className="place-reviews">
        <h2>Reviews</h2>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <p><strong>{review.fullname}</strong> ({review.email})</p>
              <p>Rating: {review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      <div className="review-form">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default PlaceDetails;
