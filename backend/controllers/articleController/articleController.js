const BaseController = require('../index');
const ArticleModel = require('../../models/articleModel/articleSchema');

class ArticleController {


static index =  async (req, res, next) =>{
    try {
        const articles = await ArticleModel.find({});
        res.json(
            articles.map((article) => ({
                contentWrierId: article.contentWrierId,
                articleId: article.articleId,
                title: article.title,
                body: article.body,
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving articles');
    }
}
static create  = async (req, res, next) =>{
    const newArticle = new ArticleModel({
        contentWrierId: req.body.contentWrierId,
        articleId: req.body.articleId,
        title: req.body.title,
        body: req.body.body,
    });

    try {
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving new Articles');
    }
}
static update = async (req, res, next) =>{
    try {


        findRecord = await ArticleModel.findOne({ articleId: req.body.articleId })
        if(findRecord){
            const updatedArticle = await ArticleModel.findByIdAndUpdate(
                findRecord._id,
                {
                    contentWrierId: req.body.contentWrierId,
                    articleId: req.body.articleId,
                    title: req.body.title,
                    body: req.body.body,
                },
            );
            res.json(updatedArticle);    
        }else {
            res.send("No Such Record Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating Article');
    }
}
static delete = async (req, res, next) =>{
    try {
        findRecord = await ArticleModel.findOne({ articleId: req.params.articleId })
        if(findRecord){
            const removedRecord = await ArticleModel.findByIdAndRemove(findRecord._id);
            res.json(removedRecord);
        }
        else{
            res.status(404).send("Article Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting Article');
    }
}
static get = async (req, res, next) =>{
    try {
        findRecord = await ArticleModel.findOne({ articleId: req.params.articleId })
        if(findRecord){
            const article = await ArticleModel.findById(findRecord._id);
            res.json(article);
        }
        else{
            res.status(404).send("Article Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving Article');
    }
}

}

module.exports = ArticleController;