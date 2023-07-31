// for images of the hotel
const mongoose = require("mongoose");
const hotels=require('./hotelSchema')
const UploadSchema = mongoose.schema({
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
  hotel:{
    type: Schema.Types.ObjectId,
    ref:hotels.collection.name,
  }
});
const uploads=mongoose.model("Image", UploadSchema);
module.exports = uploads
