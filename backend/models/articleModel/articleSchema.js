const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
    {
    contentWriterId: {
        type: String,
        required: true
    },
    articleId: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    }

);
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;