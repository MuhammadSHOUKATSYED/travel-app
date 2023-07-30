const BaseController = require('../index');
const hotelModel = require('../../models/restaurantModel/restaurantSchema');

const getRestaurants=async (req, res, next) =>{
    try {
        const restaurant = await restaurantModel.find({});
        res.json(
            restaurant.map((restaurant) => ({
                name:restaurant.name,
                image:restaurant.image,
                location:restaurant.location,
                reviews:restaurant.reviews
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving restaurant');
    }
}

const createrestaurant  = async (req, res, next) =>{
    const newrestaurant = new restaurantModel({
                name:req.body.name,
                image:req.File.image,
                location:req.body.location,
    });

    try {
        const savedrestaurant = await newrestaurant.save();
        res.status(201).json(savedrestaurant);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating a new restaurant');
    }
}
const updaterestaurant = async (req, res, next) =>{
    try {


        findRecord = await restaurantModel.findOne({ restaurantId: req.body.restaurantId })
        if(findRecord){
            const updatedrestaurant = await restaurantModel.findByIdAndUpdate(
                findRecord._id,
                {
                    name:req.body.name,
                    image:req.File.image,
                    location:req.body.location,
                },
            );
            res.json(updatedrestaurant);    
        }else {
            res.send("No Such Record restaurant")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating restaurant');
    }
}
const deleterestaurant = async (req, res, next) =>{
    try {
        findrestaurant = await restaurantModel.findOne({ hotelId: req.params.hotelId })
        if(findrestaurant){
            const removedrestaurant = await findrestaurant.findByIdAndRemove(findrestaurant._id);
            res.json(removedrestaurant);
        }
        else{
            res.status(404).send("restaurant Not found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting restaurant');
    }
}
const getrestaurantById = async (req, res, next) =>{
    try {
        findrestaurant = await restaurantModel.findOne({ restaurantId: req.params.restaurantId })
        if(findrestaurant){
            const restaurant = await restaurantModel.findById(findrestaurant._id);
            res.json(restaurant);
        }
        else{
            res.status(404).send("restaurant Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving restaurant');
    }
}
module.exports = {getSestaurantById, getRestaurants, createRestaurant, deleteRestaurant, updateRestaurant};

