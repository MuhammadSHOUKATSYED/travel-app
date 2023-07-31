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
module.exports = hotelController
