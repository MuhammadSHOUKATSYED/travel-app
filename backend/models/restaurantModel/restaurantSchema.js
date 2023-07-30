const mongoose = require('mongoose');
const images = require('./uploadSchema');
const reviews = require('./reviewSchema');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: images.collection.name,
        },
    ],
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cuisines: {
        type: [String],
        required: true,
    },
    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: reviews.collection.name,
        },
    ],
    contact: {
        phone: String,
        email: String,
        website: String,
    },
    priceRange: {
        min: {
            type: Number,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        },
    },
    openingHours: {
        type: String,
        required: true,
    },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
