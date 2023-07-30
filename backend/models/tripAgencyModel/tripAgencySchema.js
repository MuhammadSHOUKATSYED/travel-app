const mongoose = require('mongoose')
const schema = mongoose.schema
const tripAgencySchema = schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    image:[
        {
            type:schema.types.ObjectId,
            ref:"image"
        }
    ],
    location:{
        type:stringify, 
        required:true,
    },
    reviews:[
        {
            type:schema.types.ObjectId,
            ref:"reviews"
        }
    ]
})
const TripAgency = mongoose.model("TripAgency", tripAgencySchema);
Module.exports = TripAgency;
