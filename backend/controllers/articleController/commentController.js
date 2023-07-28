const BaseController = require('../index');
const CommentModel = require('../../models/articleModel/commentSchema');

class CommentController {


static index =  async (req, res, next) =>{
    try {
        const comments = await CommentModel.find({});
        res.json(
            comments .map((comment) => ({
                commentId: comment.contentWrierId,
                articleId: comment.articleId,
                body: comment.body,
                userId: comment.title,
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving comments');
    }
}
static create  = async (req, res, next) =>{
    const newComment = new CommentModel({
                commentId: req.body.contentWrierId,
                articleId: req.body.articleId,
                body: req.body.body,
                userId: req.body.userId,
    });

    try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving new Comment');
    }
}
static update = async (req, res, next) =>{
    try {


        findRecord = await CommentModel.findOne({ commentId: req.body.commentId })
        if(findRecord){
            const updatedComment = await CommentModel.findByIdAndUpdate(
                findRecord._id,
                {
                    commentId: req.body.contentWrierId,
                    articleId: req.body.articleId,
                    body: req.body.body,
                    userId: req.body.userId,
                },
            );
            res.json(updatedComment);    
        }else {
            res.send("No Such Record Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating Comment');
    }
}
static delete = async (req, res, next) =>{
    try {
        findRecord = await CommentModel.findOne({commentId: req.params.commentId })
        if(findRecord){
            const removedRecord = await CommentModel.findByIdAndRemove(findRecord._id);
            res.json(removedRecord);
        }
        else{
            res.status(404).send("Comment Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting Comment');
    }
}
static get = async (req, res, next) =>{
    try {
        findRecord = await CommentModel.findOne({ commentId: req.params.commentId })
        if(findRecord){
            const comment = await CommentModel.findById(findRecord._id);
            res.json(comment);
        }
        else{
            res.status(404).send("Comment Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving Comment');
    }
}

}

module.exports = CommentController;