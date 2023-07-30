const mongoose=require('mongoose')
const reviewSchema=new restaurantSchema({
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
        ref:"User"
    },
    
})
const Reviews = mongoose.model("Reviews", reviewSchema)
Module.exports = Reviews