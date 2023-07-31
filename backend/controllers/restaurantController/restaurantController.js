<<<<<<< HEAD
const restaurantModel = require('../../models/restaurantModel/restaurantSchema')
class restaurantController {
    static index = async (req, res, next) => {
        try {
            const restaurants = await restaurantModel.find({});
            res.json(
                restaurants.map((restaurant) => ({
                    id:restaurant.id,
                    name: restaurant.name,
                    email: restaurant.email,
                    images: restaurant.images,
                    location: restaurant.location,
                    description: restaurant.description,
                    roomTypes: restaurant.roomTypes,
                    reviews: restaurant.reviews,
                    contact: restaurant.contact,
                    priceRange: restaurant.priceRange,
                }))
            )
        }
        catch (error) {
            console.log(error)
            res.status(500).send('Error retrieving restaurants');
        }
    }
    static get=async (req, res, next)=>{
        try{
            const restaurants=await restaurantModel.findOne((restaurant)=>{
                restaurant.id=req.params.id
=======
const BaseController = require('../index');
const restuarantModel = require('../../models/restaurantModel/restaurantSchema');
>>>>>>> 332faf12aa680d85b176fd0f3c940c9e5bc4c1fb

            })
            if(restaurants){
                res.json(restaurants)
            }
        }
        catch(error){
            res.status(501).json({msg:"Error"})
        }
    }
    static create = async (req, res, next) => {
        const newRestaurant = new restaurantModel({
            id:req.body.id,
            name: req.body.name,
            email: req.body.email,
            images: req.body.images,
            location: req.body.location,
            description: req.body.description,
            roomTypes: req.body.roomTypes,
            reviews: req.body.reviews,
            contact: req.body.contact,
            priceRange: req.body.priceRange,
        })
        try {
            const savedRestaurant = await newRestaurant.save()
            res.status(201).json(savedRestaurant);
        }
        catch (error) {
            console.log(error)
            res.status(500).send('Error retrieving forums');
        }
    }
    static update = async (req, res, next) => {
        try {
            const findRestaurant = await restaurantModel.findOne({
                id: req.params.id
            })
            if (findRestaurant) {
                const updatedRestaurant = await restaurantModel.findByIDAndUpdate(
                    findRestaurant._id,
                    {
                        name: req.body.name,
                        password: req.body.password,
                        email: req.body.email,
                        images: req.body.images,
                        location: req.body.location,
                        description: req.body.description,
                        cuisines:req.body.cuisines,
                        reviews: req.body.reviews,
                        contact: req.body.contact,
                        priceRange: req.body.priceRange,
                        openingHours:req.body.openingHours
                    })
                res.json({ msg: "Great hotel details updated" }, updatedRestaurant)
            }
            else {
                res.send("No such record found")
            }

        }
        catch (error) {
            res.json(501).send("Failed to update the hotel details")
        }
    }
    static delete = async (req, res, send) => {
        try {
            findRestaurant = await restaurantModel.findOne({ id: req.params.id })
            if (findRestaurant) {
                const removedRestaurant = await restaurantModel.findByIdAndRemove(findRestaurant._id);
                res.json({msg:"Removed restaurant! "},removedRestaurant);
            }
            else {
                res.status(404).send("restaurant Not Found")
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error deleting restaurant');
        }
    }
    static login = async (req, res, send) => {
        try {
            const findRestaurant = await restaurantModel.findOne({ email: req.body.email, password: req.body.password });
            if (findRestaurant) {
                res.json({ msg: "You have logged in with " })
            } else {
                res.json({ msg: "Invalid user name or password " })
            }
        }
        catch(error){
            res.status(501).json({ msg: "No user found" })
        }
        
    }
}
<<<<<<< HEAD
module.exports = restaurantController
=======

const createRestaurant  = async (req, res, next) =>{
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
const updateRestaurant = async (req, res, next) =>{
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
const deleteRestaurant = async (req, res, next) =>{
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
const getRestaurantById = async (req, res, next) =>{
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
module.exports = {getRestaurants, createRestaurant, deleteRestaurant, updateRestaurant, getRestaurantById};

>>>>>>> 332faf12aa680d85b176fd0f3c940c9e5bc4c1fb
