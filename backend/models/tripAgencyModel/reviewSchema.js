<<<<<<< HEAD
const mongoose = require('mongoose')
const schema = mongoose.schema
const reviewSchema = new schema({
=======
const mongoose=require('mongoose')
const tripAgency=require('./tripAgencySchema')
const users=require('../userModel/userSchema')
const reviewSchema=new mongoose.schema({
>>>>>>> 43e2c7a259a5fd1c7cfd6cc14063000c0855be91
    opponion:{
        type:String,
        required: false,
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required: false,
    },
    user:{
        type:schema.Types.ObjectId,
        ref:users.collection.name,
    },
    tripAgency:{
        type:schema.Types.ObjectId,
        ref:tripAgency.collection.name,
    }   
})
<<<<<<< HEAD
const Reviews = mongoose.model("Reviews", reviewSchema);
Module.exports = Reviews;
=======
const reviews=mongoose.model("Review", reviewSchema)
Module.exports=reviews
>>>>>>> 43e2c7a259a5fd1c7cfd6cc14063000c0855be91
