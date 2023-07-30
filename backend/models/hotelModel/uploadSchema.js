// for images of the hotel
const mongoose = require("mongoose");
<<<<<<< HEAD
const UploadSchema = new mongoose.schema({
=======
const hotels=require('./hotelSchema')
const UploadSchema = mongoose.schema({
>>>>>>> 43e2c7a259a5fd1c7cfd6cc14063000c0855be91
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
<<<<<<< HEAD
const Uploads = mongoose.model("Image", UploadSchema);
module.exports = Uploads;
=======
const uploads=mongoose.model("Image", UploadSchema);
module.exports = uploads
>>>>>>> 43e2c7a259a5fd1c7cfd6cc14063000c0855be91
