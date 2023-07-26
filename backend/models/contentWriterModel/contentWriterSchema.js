const mongoose = require('mongoose');

const contentWriterSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    contentWriterId:{
        type: Number,
        required: true
    }
    }

);
const contentWriter = mongoose.model("ContentWriter", contentWriterSchema);

module.exports = contentWriter;