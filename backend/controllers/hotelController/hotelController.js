const BaseController = require('./index');
const hotelModel = require('../../models/hotelModel/hotelSchema');

const getHotels=async (req, res, next) =>{
    try {
        const hotels = await hotelModel.find({});
        res.json(
            hotels.map((hotel) => ({
                name:hotel.name,
                image:hotel.image,
                location:hotel.location,
                reviews:hotel.reviews
            }))
        );
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving forums');
    }
}

const createHotel  = async (req, res, next) =>{
    const newHotel = new hotelModel({
                name:req.body.name,
                image:req.File.image,
                location:req.body.location,
    });

    try {
        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating a new hotel');
    }
}
const updateHotel = async (req, res, next) =>{
    try {


        findRecord = await hotelModel.findOne({ hotelId: req.body.hotelId })
        if(findRecord){
            const updatedhotel = await ForumModel.findByIdAndUpdate(
                findRecord._id,
                {
                    name:req.body.name,
                    image:req.File.image,
                    location:req.body.location,
                },
            );
            res.json(updatedhotel);    
        }else {
            res.send("No Such Record Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating Forum');
    }
}
const deleteHotel = async (req, res, next) =>{
    try {
        findHotel = await hotelModel.findOne({ hotelId: req.params.hotelId })
        if(findHotel){
            const removedhotel = await findHotel.findByIdAndRemove(findHotel._id);
            res.json(removedhotel);
        }
        else{
            res.status(404).send("Hotel Not found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting hotel');
    }
}
const getHotelById = async (req, res, next) =>{
    try {
        findhotel = await hotelModel.findOne({ hotelId: req.params.hotelId })
        if(findhotel){
            const hotel = await hotelModel.findById(findhotel._id);
            res.json(hotel);
        }
        else{
            res.status(404).send("Hotel Not Found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving Hotel');
    }
}
modul.exports = {getHotelById, getHotels, createHotel, deleteHotel, updateHotel};

