const BaseController = require('./index');
const AdminModel = require('../../models/adminModel/adminSchema')

class AdminController {


static index =  async (req, res, next) =>{
    try {
        const admins = await AdminModel.find({});
        res.json(
            admins.map((admin) => ({
                name: admin.name,
                userName: admin.userName,
                email: admin.email,
                password: admin.password,
                role: admin.role,
                adminId: admin.adminId
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving admins');
    }
}
static create  = async (req, res, next) =>{
    const newAdmin = new AdminModel({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        adminId: req.body.adminId,
    });

    try {
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving new Admin');
    }
}
static update = async (req, res, next) =>{
    try {


        findRecord = await AdminModel.findOne({ adminId: req.body.adminId })
        if(findRecord){
            const updatedAdmin = await AdminModel.findByIdAndUpdate(
                findRecord._id,
                {
                    name: req.body.name,
                    userName: req.body.userName,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role,
                    adminId: req.body.adminId,
                },
            );
            res.json(updatedAdmin);    
        }else {
            res.send("No Such Record Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating Admin');
    }
}
static delete = async (req, res, next) =>{
    try {
        findRecord = await AdminModel.findOne({ adminId: req.params.adminId })
        if(findRecord){
            const removedRecord = await AdminModel.findByIdAndRemove(findRecord._id);
            res.json(removedRecord);
        }
        else{
            res.status(404).send("Admin Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting Admin');
    }
}
static get = async (req, res, next) =>{
    try {
        findRecord = await AdminModel.findOne({ adminId: req.params.adminId })
        if(findRecord){
            const admin = await AdminModel.findById(findRecord._id);
            res.json(
                admin.map((admin) => ({
                    name: admin.name,
                    userName: admin.userName,
                    email: admin.email,
                    password: admin.password,
                    role: admin.role,
                    adminId: admin.adminId
                }))
            );
        }
        else{
            res.status(404).send("Admin Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving Admin');
    }
}

}

modul.exports = AdminController;