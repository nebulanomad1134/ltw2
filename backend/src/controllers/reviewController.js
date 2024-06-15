// controllers/reviewController.js
const Place = require('../models/Place');

const getAllReviews = async (req, res) => {
  try {
    const places = await Place.find().select('reviews name'); // Select reviews and name for debugging purposes
    const reviews = places.flatMap(place =>
      place.reviews.map(review => ({ ...review.toObject(), placeId: place._id }))
    );
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get reviews', error: error.message });
  }
};

const getReviews = async (req, res) => {
  const { placeId } = req.params;

  try {
    const place = await Place.findById(placeId).select('reviews');

    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.status(200).json(place.reviews);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get reviews', error: error.message });
  }
};

const addReview = async (req, res) => {
  const { id } = req.params;
  const { rating, comment, email, fullname } = req.body;

  try {
    const place = await Place.findById(id);

    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }

    const review = { rating, comment, email, fullname };
    place.reviews.push(review);
    await place.save();

    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add review', error: error.message });
  }
};

const deleteReview = async (req, res) => {
  const { placeId, reviewId } = req.params;

  try {
    const place = await Place.findById(placeId);

    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }

    const reviewIndex = place.reviews.findIndex(review => review._id.toString() === reviewId);

    if (reviewIndex === -1) {
      return res.status(404).json({ message: 'Review not found' });
    }

    place.reviews.splice(reviewIndex, 1);
    await place.save();

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete review', error: error.message });
  }
};

module.exports = { addReview, deleteReview, getAllReviews, getReviews };
