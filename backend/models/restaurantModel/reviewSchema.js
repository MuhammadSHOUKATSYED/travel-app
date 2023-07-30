const mongoose=require('mongoose')
const restaurants=require('./restaurantSchema')
const users=require('../userModel/userSchema')
const reviewSchema=new restaurantSchema({
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
        ref:users.collection.name
    },
    restaurant:{
        type:schema.Types.ObjectId,
        ref:restaurant.collection.name
    }
    
})
<<<<<<< HEAD
const Reviews = mongoose.model("Reviews", reviewSchema)
Module.exports = Reviews
=======
const review=mongoose.model("Review", reviewSchema)
Module.exports=review
>>>>>>> 43e2c7a259a5fd1c7cfd6cc14063000c0855be91
