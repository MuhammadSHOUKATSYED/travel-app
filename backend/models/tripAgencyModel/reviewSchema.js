const mongoose = require('mongoose')
const schema = mongoose.schema
const reviewSchema = new schema({
    opponion:{
        type:String,
        required: false,
    },
    rating:{
        type:Number,
        required: false,
    },
    user:{
        type:schema.Types.ObjectId,
        ref:"User",
    },
    
})
const Reviews = mongoose.model("Reviews", reviewSchema);
Module.exports = Reviews;