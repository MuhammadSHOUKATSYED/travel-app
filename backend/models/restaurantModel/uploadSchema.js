// for images of the hotel
const mongoose = require("mongoose");
const restaurants=require('./restaurantSchema')
const UploadSchema = new restaurantSchema({
  id:{
    type:String,
    required:true,
    unique:true,
},
  fileName: {
    type: String,
    required: true,
  },
  file: {
    data: Buffer,
    contentType: String,
  },
  uploadTime: {
    type: Date,
    default: Date.now,
  },
  restaurant:{
    type: schema.Types.ObjectId,
    ref:restaurants.collection.name,
  }
});
const Uploads=mongoose.model("Image", UploadSchema);
module.exports = Uploads;
