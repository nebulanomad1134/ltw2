const express = require('express');
const router = express.Router();
const {
    getAllPlaces,
    getPlaceById,
    createPlace,
    editPlaceById,
    deletePlaceById,
    addReview
} = require('../controllers/placeController');
const { protect, admin } = require('../middleware/auth');

router.get('/', getAllPlaces);
router.get('/:id', getPlaceById);
router.post('/', protect, admin, createPlace);
router.put('/:id', protect, admin, editPlaceById);
router.delete('/:id', protect, admin, deletePlaceById);
router.post('/:id/reviews', addReview);

module.exports = router;
