// for images of the 
const mongoose = require("mongoose");
const tripAgency=require('./tripAgencySchema')
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
    ref:tripAgency.collection.name,
  }
});
const Uploads = mongoose.model("Image", UploadSchema);
module.exports = Uploads;
