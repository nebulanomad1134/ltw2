//placeRoutes.js
const express = require('express');
const router = express.Router();
const {
    getAllPlaces,
    getPlaceById,
    createPlace,
    editPlaceById,
    deletePlaceById
} = require('../controllers/placeController');
const { getAllReviews, getReviews, addReview, deleteReview } = require('../controllers/reviewController');
const { protect, admin } = require('../middleware/auth');

router.get('/', getAllPlaces);
router.get('/:id', getPlaceById);
router.post('/', protect, admin, createPlace);
router.put('/:id', protect, admin, editPlaceById);
router.delete('/:id', protect, admin, deletePlaceById);

router.get('/:placeId/reviews', getReviews);  // Get reviews for a specific place
// router.post('/:id/reviews', protect, addReview);
router.post('/:id/reviews', addReview);
router.delete('/:placeId/reviews/:reviewId', protect, admin, deleteReview);
router.get('/reviews/all', protect, admin, getAllReviews);  // Move this to prevent "reviews" being treated as an id

module.exports = router;
