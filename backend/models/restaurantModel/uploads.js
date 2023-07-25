// for images of the hotel
const mongoose = require("mongoose");
const schema=mongoose.schema
const UploadSchema = new schema({
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
const uploads=mongoose.model("image", UploadSchema);
module.exports = uploads
