const mongoose=require('mongoose')
const hotels=require('./hotelSchema')
const users=require('../userModel/userSchema')
const reviewSchema=new mongoose.schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
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
    hotels:{
        type:schema.Types.ObjectId,
        ref:hotels.collection.name,
    }   
})
const reviews=mongoose.model("Review", reviewSchema)
Module.exports=reviews