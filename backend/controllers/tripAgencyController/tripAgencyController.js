const BaseController = require('./index');
const tripAgencyModel = require('../../models/tripAgencyModel/tripAgencySchema');

const getTripAgencies=async (req, res, next) =>{
    try {
        const tripAgency = await tripAgencyModel.find({});
        res.json(
            tripAgency.map((tripAgency) => ({
                name:tripAgency.name,
                image:tripAgency.image,
                reviews:tripAgency.reviews
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving tripAgency');
    }
}

const createtripAgency  = async (req, res, next) =>{
    const newtripAgency = new tripAgencyModel({
                name:req.body.name,
                image:req.File.image,
                location:req.body.location,
    });

    try {
        const savedtripAgency = await newtripAgency.save();
        res.status(201).json(savedtripAgency);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating a new tripAgency');
    }
}
const updatetripAgency= async (req, res, next) =>{
    try {


        findRecord = await tripAgencyModel.findOne({ tripAgencyId: req.body.tripAgencyId })
        if(findRecord){
            const updatedtripAgency = await tripAgencyModel.findByIdAndUpdate(
                findRecord._id,
                {
                    name:req.body.name,
                    image:req.File.image,
                    location:req.body.location,
                },
            );
            res.json(updatedtripAgency);    
        }else {
            res.send("No Such Record tripAgency")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating tripAgency');
    }
}
const deletetripAgency = async (req, res, next) =>{
    try {
        findtripAgency = await tripAgencyModel.findOne({ tripAgencyId: req.params.hotelId })
        if(findtripAgency){
            const removedtripAgency = await findtripAgency.findByIdAndRemove(findtripAgency._id);
            res.json(removedtripAgency);
        }
        else{
            res.status(404).send("tripAgency Not found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting tripAgency');
    }
}
const gettripAgencyById = async (req, res, next) =>{
    try {
        findtripAgency = await tripAgencyModel.findOne({ tripAgencyId: req.params.tripAgencyId })
        if(findtripAgency){
            const tripAgency = await tripAgencyModel.findById(findtripAgency._id);
            res.json(tripAgency);
        }
        else{
            res.status(404).send("restaurant Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving restaurant');
    }
}
modul.exports = {gettripAgencyById, getTripAgencies, createtripAgency, deletetripAgency, updatetripAgency};

