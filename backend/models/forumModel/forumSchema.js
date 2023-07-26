const mongoose = require('mongoose')

const forumSchema = new mongoose.Schema({

    question:{
        type: String,
        required: true
    },
    questionID: {
        type: String,
         required: true
        },
    userID: {
        type: String, 
        required: true
    },
    answer: [{
            description: {
                type: String, 
                required: true
            },
            userID: {
                type: String, 
                required: true
            }
       }]
})


const Forum = mongoose.model('Forum', forumSchema);
module.exports = Forum;