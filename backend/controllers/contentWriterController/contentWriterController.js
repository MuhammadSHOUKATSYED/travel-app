const BaseController = require('./index');
const ContentWriterModel = require('../../models/contentWriterModel/contentWriterSchema')

class ContentWriterController {


static index =  async (req, res, next) =>{
    try {
        const contentWriters = await ContentWriterModel.find({});
        res.json(
            contentWriters.map((contentWriter) => ({
                name: contentWriter.name,
                userName: contentWriter.userName,
                email: contentWriter.email,
                password: contentWriter.password,
                role: contentWriter.role,
                contentWriterId: contentWriter.contentWriterId
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving Content Writers');
    }
}
static create  = async (req, res, next) =>{
    const newContentWriter = new ContentWriterModel({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        contentWriterId: req.body.contentWriterId,
    });

    try {
        const savedContentWriter = await newContentWriter.save();
        res.status(201).json(savedContentWriter);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving new Content Writer');
    }
}
static update = async (req, res, next) =>{
    try {


        findRecord = await ContentWriterModel.findOne({ contentWriterId: req.body.contentWriterId })
        if(findRecord){
            const updatedContentWriter = await ContentWriterModel.findByIdAndUpdate(
                findRecord._id,
                {
                    name: req.body.name,
                    userName: req.body.userName,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role,
                    contentWriterId: req.body.contentWriterId,
                },
            );
            res.json(updatedContentWriter);    
        }else {
            res.send("No Such Record Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating Content Writer');
    }
}
static delete = async (req, res, next) =>{
    try {
        findRecord = await ContentWriterModel.findOne({ contentWriterId: req.params.contentWriterId })
        if(findRecord){
            const removedRecord = await ContentWriterModel.findByIdAndRemove(findRecord._id);
            res.json(removedRecord);
        }
        else{
            res.status(404).send("Content Writer Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting Content Writer');
    }
}
static get = async (req, res, next) =>{
    try {
        findRecord = await ContentWriterModel.findOne({ contentWriterId: req.params.contentWriterId })
        if(findRecord){
            const contentWriter= await ContentWriterModel.findById(findRecord._id);
            res.json(contentWriter);
        }
        else{
            res.status(404).send("Content Writer Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving Content Writer');
    }
}

}

modul.exports = ContentWriterController;