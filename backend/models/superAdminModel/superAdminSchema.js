const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema(
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
    superAdminId:{
        type: Number,
        required: true
    }
    }

);
const SuperAdmin = mongoose.model("SuperAdmin", superAdminSchema);

module.exports = SuperAdmin;