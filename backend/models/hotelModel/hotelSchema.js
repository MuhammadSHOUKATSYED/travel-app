const mongoose=require('mongoose')
const schema=mongoose.schema
const hotelSchema=schema({
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
const hotel=mongoose.model("hotel", hotelSchema)
Module.exports=hotel