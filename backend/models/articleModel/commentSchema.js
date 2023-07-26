const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
    commentId: {
            type: String,
            required: true
        },
    articleId: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }
    }

);
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;