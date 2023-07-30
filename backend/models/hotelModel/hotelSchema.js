const mongoose = require('mongoose');
const images = require('./uploadSchema')
const reviews = require('./reviewSchema')
const hotelSchema = new mongoose.Schema({
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
    roomTypes: {
        type: [String],
        required: true,
    },
    reviews: [
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
    checkInTime: String,//In this case automatically type set to string sir g 
    checkOutTime: String,
    cancellationPolicy: String,
});
const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
