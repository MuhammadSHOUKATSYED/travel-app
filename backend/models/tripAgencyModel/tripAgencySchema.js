const mongoose = require('mongoose');
const images = require('./uploadSchema');
const reviews = require('./reviewSchema');
const tripAgencySchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: images.collection.name,
        },
    ],
    description: {
        type: String,
        required: true,
    },
    contact: {
        phone: String,
        email: String,
        website: String,
    },
    tripTypes: {
        type: [String],
        required: true,
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: reviews.collection.name,
    }
    ]
});

const TripAgency = mongoose.model('TripAgency', tripAgencySchema);

module.exports = TripAgency;
