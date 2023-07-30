<<<<<<< HEAD
const mongoose = require('mongoose')
const schema = mongoose.schema
const tripAgencySchema = schema({
    name:{
        type:String,
=======
const mongoose = require('mongoose');
const images = require('./uploadSchema');
const reviews = require('./reviewSchema');
const tripAgencySchema = new mongoose.Schema({
    name: {
        type: String,
>>>>>>> 43e2c7a259a5fd1c7cfd6cc14063000c0855be91
        required: true,
        trim: true,
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
<<<<<<< HEAD
})
const TripAgency = mongoose.model("TripAgency", tripAgencySchema);
Module.exports = TripAgency;
=======
});

const TripAgency = mongoose.model('TripAgency', tripAgencySchema);

module.exports = TripAgency;
>>>>>>> 43e2c7a259a5fd1c7cfd6cc14063000c0855be91
