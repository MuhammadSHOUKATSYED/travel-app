const mongoose=require('mongoose')
const hotelSchema=mongoose.schema({
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
            type:Schema.Types.ObjectId,
            ref:"reviews"
        }
    ]
})
const hotel=mongoose.model("hotel", hotelSchema)
Module.exports=hotel