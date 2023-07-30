const BaseController = require('../index');
const UserModel = require('../../models/userModel/userSchema')

class UserController {


static index =  async (req, res, next) =>{
    try {
        const users = await UserModel.find({});
        res.json(
            users.map((user) => ({
                name: admin.name,
                userName: admin.userName,
                email: admin.email,
                password: admin.password,
                role: admin.role,
                userId: admin.userId
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving users');
    }
}
static create  = async (req, res, next) =>{
    const newUser = new UserModel({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        userId: req.body.userId,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving new User');
    }
}
static update = async (req, res, next) =>{
    try {


        findRecord = await UserModel.findOne({ userId: req.body.userId })
        if(findRecord){
            const updatedUser = await UserModel.findByIdAndUpdate(
                findRecord._id,
                {
                    name: req.body.name,
                    userName: req.body.userName,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role,
                    userId: req.body.userId,
                },
            );
            res.json(updatedUser);    
        }else {
            res.send("No Such Record Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating User');
    }
}
static delete = async (req, res, next) =>{
    try {
        findRecord = await UserModel.findOne({ userId: req.params.userId })
        if(findRecord){
            const removedRecord = await UserModel.findByIdAndRemove(findRecord._id);
            res.json(removedRecord);
        }
        else{
            res.status(404).send("User Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting User');
    }
}
static get = async (req, res, next) =>{
    try {
        findRecord = await UserModel.findOne({ userId: req.params.userId })
        if(findRecord){
            const user = await UserModel.findById(findRecord._id);
            res.json(user);
        }
        else{
            res.status(404).send("User Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving User');
    }
}

}

module.exports = UserController;