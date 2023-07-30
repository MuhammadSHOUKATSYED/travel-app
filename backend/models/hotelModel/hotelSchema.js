const mongoose=require('mongoose')
const hotelSchema= new mongoose.schema({
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
const Hotel = mongoose.model("Hotel", hotelSchema);
Module.exports = Hotel;