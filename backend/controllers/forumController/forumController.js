const BaseController = require('../index');
const ForumModel = require('../../models/forumModel/forumSchema');

class ForumController {


static index =  async (req, res, next) =>{
    try {
        const forums = await ForumModel.find({});
        res.json(
            forums.map((forum) => ({
                question: forum.question,
                questionId: forum.questionId,
                userId: forum.userId,
                answer: forum.answer,
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving forums');
    }
}
static create  = async (req, res, next) =>{
    const newForum = new ForumModel({
        question: req.body.question,
        questionId: req.body.questionId,
        userId: req.body.userId,
        answer: req.body.answer,
    });

    try {
        const savedForum = await newForum.save();
        res.status(201).json(savedForum);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving new Forum');
    }
}
static update = async (req, res, next) =>{
    try {


        findRecord = await ForumModel.findOne({ questionId: req.body.questionId })
        if(findRecord){
            const updatedForum = await ForumModel.findByIdAndUpdate(
                findRecord._id,
                {
                    question: req.body.question,
                    questionId: req.body.questionId,
                    userId: req.body.userId,
                    answer: req.body.answer, 
                },
            );
            res.json(updatedForum);    
        }else {
            res.send("No Such Record Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating Forum');
    }
}
static delete = async (req, res, next) =>{
    try {
        findRecord = await ForumModel.findOne({ questionId: req.params.questionId })
        if(findRecord){
            const removedRecord = await ForumModel.findByIdAndRemove(findRecord._id);
            res.json(removedRecord);
        }
        else{
            res.status(404).send("Forum Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting Forum');
    }
}
static get = async (req, res, next) =>{
    try {
        findRecord = await ForumModel.findOne({ questionId: req.params.questionId })    
        if(findRecord){
            const forum = await ForumModel.findById(findRecord._id);
            res.json(forum);
        }
        else{
            res.status(404).send("Forum Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving Forum');
    }
}

}

module.exports = ForumController;