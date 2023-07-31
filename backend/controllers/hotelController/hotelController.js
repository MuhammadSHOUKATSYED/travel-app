const hotelModel = require('../../models/hotelModel/hotelSchema')
class hotelController {
    static index = async (req, res, next) => {
        try {
            const hotels = await hotelModel.find({});
            res.json(
                hotels.map((hotel) => ({
                    name: hotel.name,
                    email: hotel.email,
                    images: hotel.images,
                    location: hotel.location,
                    description: hotel.description,
                    roomTypes: hotel.roomTypes,
                    reviews: hotel.reviews,
                    contact: hotel.contact,
                    priceRange: hotel.priceRange,
                    checkInTime: hotel.checkInTime,
                    checkOutTime: hotel.checkOutTime,
                    cancellationPolicy: hotel.cancellationPolicy,
                }))
            )
        }
        catch (error) {
            console.log(error)
            res.status(500).send('Error retrieving forums');
        }
    }
    static get=async (req, res, next)=>{
        try{
            const hotels=await hotelModel.findOne((hotel)=>{
                hotel.id=req.params.id

            })
            if(hotels){
                res.json(hotels)
            }
        }
        catch(error){
            res.status(501).json({msg:"Error"})
        }
    }
    static create = async (req, res, next) => {
        const newHotel = new hotelModel({
            name: req.body.name,
            email: req.body.email,
            images: req.body.images,
            location: req.body.location,
            description: req.body.description,
            roomTypes: req.body.roomTypes,
            reviews: req.body.reviews,
            contact: req.body.contact,
            priceRange: req.body.priceRange,
            checkInTime: req.body.checkInTime,
            checkOutTime: req.body.checkOutTime,
            cancellationPolicy: req.body.cancellationPolicy,
        })
        try {
            const savedhotel = await newHotel.save()
            res.status(201).json(savedhotel);
        }
        catch (error) {
            console.log(error)
            res.status(500).send('Error retrieving forums');
        }
    }
    static update = async (req, res, next) => {
        try {
            const findHotel = await hotelModel.findOne({
                id: req.params.id
            })
            if (findHotel) {
                const updatedHotel = await hotelModel.findByIDAndUpdate(
                    findHotel._id,
                    {
                        name: req.body.name,
                        password: req.body.password,
                        email: req.body.email,
                        images: req.body.images,
                        location: req.body.location,
                        description: req.body.description,
                        roomTypes: req.body.roomTypes,
                        reviews: req.body.reviews,
                        contact: req.body.contact,
                        priceRange: req.body.priceRange,
                        checkInTime: req.body.checkInTime,
                        checkOutTime: req.body.checkOutTime,
                        cancellationPolicy: req.body.cancellationPolicy,
                    })
                res.json({ msg: "Great hotel details updated" }, updatedHotel)
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
            findHotel = await hotelModel.findOne({ id: req.params.questionId })
            if (findHotel) {
                const removedHotel = await hotelModel.findByIdAndRemove(findHotel._id);
                res.json(removedHotel);
            }
            else {
                res.status(404).send("Hotel Not Found")
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error deleting Hotel');
        }
    }
    static login = async (req, res, send) => {
        try {
            const findHotel = await hotelModel.findOne({ email: req.body.email, password: req.body.password });
            if (findHotel) {
                res.json({ msg: "You have logged in with " })
            } else {
                res.json({ msg: "Invalid user name or password " })
            }
        }
        catch(error){
            res.status(501).json({ msg: "No user" })
        }
        
    }
}
<<<<<<< HEAD
module.exports = hotelController
=======

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

module.exports = {getHotels, createHotel, updateHotel, deleteHotel, getHotelById};
>>>>>>> 332faf12aa680d85b176fd0f3c940c9e5bc4c1fb
