const mongoose=require('mongoose')
const tripAgency=require('./tripAgencySchema')
const users=require('../userModel/userSchema')
const reviewSchema=new mongoose.schema({
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
const reviews=mongoose.model("Review", reviewSchema)
Module.exports=reviews