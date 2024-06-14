const Place = require('../models/Place');

const getAllPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPlaceById = async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);
        if (!place) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.json(place);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPlace = async (req, res) => {
    const place = new Place({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        type: req.body.type,
        image: req.body.image,
        reviews: []
    });
    try {
        const newPlace = await place.save();
        res.status(201).json(newPlace);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const editPlaceById = async (req, res) => {
    const { name, description, location, type, image } = req.body;

    try {
        const place = await Place.findById(req.params.id);
        if (!place) {
            return res.status(404).json({ message: 'Place not found' });
        }

        place.name = name;
        place.description = description;
        place.location = location;
        place.type = type;
        place.image = image;

        const updatedPlace = await place.save();
        res.json(updatedPlace);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePlaceById = async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);
        if (!place) {
            return res.status(404).json({ message: 'Place not found' });
        }

        await Place.deleteOne({ _id: req.params.id });
        res.json({ message: 'Place deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
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

module.exports = {
    getAllPlaces,
    getPlaceById,
    createPlace,
    editPlaceById,
    deletePlaceById,
    addReview
};
