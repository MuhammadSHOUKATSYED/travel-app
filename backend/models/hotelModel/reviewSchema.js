const mongoose=require('mongoose')
const reviewSchema=new mongoose.schema({
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
const reviews=mongoose.model("reviews", reviewSchema)
Module.exports=reviews