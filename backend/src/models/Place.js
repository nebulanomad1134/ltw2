const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    email: { type: String, required: true },
    fullname: { type: String, required: true},
    date: { type: Date, default: Date.now }
});

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, enum: ['Historical Landmarks', 'Natural Attractions', 'Restaurants', 'Museums', 'Others'], required: true },
    image: { type: String, required: true },
    reviews: [reviewSchema]
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
