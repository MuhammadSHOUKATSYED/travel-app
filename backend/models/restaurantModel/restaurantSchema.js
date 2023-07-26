import reviews from "../restaurant/Model/reviewSchema"
const mongoose=require('mongoose')
const restaurantSchema=new mongoose.schema({
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
        type:String, 
        required:true,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"reviews"
        }
    ]
})
const hotel=mongoose.model("restaurant", restaurantSchema)
Module.exports=hotel