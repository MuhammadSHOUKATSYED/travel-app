// for images of the hotel
const mongoose = require("mongoose");
const UploadSchema = new restaurantSchema({
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
  of:{
    type: schema.Types.ObjectId,
    ref:"hotel",
  }
});
const Uploads=mongoose.model("Image", UploadSchema);
module.exports = Uploads;
