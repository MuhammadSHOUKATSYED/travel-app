const tripAgencyModel = require('../../models/tripAgencyModel/tripAgencySchema')
class tripAgencyController {

    static index = async (req, res, next) => {
        try {
            const tripAgencies = await tripAgencyModel.find({});
            res.json(
                tripAgencies.map((tripAgency) => ({
                    id:tripAgency.id,
                    name: tripAgency.name,
                    email: tripAgency.email,
                    images: tripAgency.images,
                    location: tripAgency.location,
                    description: tripAgency.description,
                    roomTypes: tripAgency.roomTypes,
                    reviews: tripAgency.reviews,
                    contact: tripAgency.contact,
                    priceRange: tripAgency.priceRange,
                }))
            )
        }
        catch (error) {
            console.log(error)
            res.status(500).send('Error retrieving trip agencies');
        }
    }
    static get=async (req, res, next)=>{
        try{
            const tripAgencies=await tripAgencyModel.findOne((tripAgency)=>{
                tripAgency.id=req.params.id

            })
            if(tripAgencies){
                res.json(tripAgencies)
            }
        }
        catch(error){
            res.status(501).json({msg:"Error"})
        }
    }
    static create = async (req, res, next) => {
        const newTripAgency = new tripAgencyModel({
            id:req.body.id,
            name: req.body.name,
            email: req.body.email,
            password:req.body.password,
            images: req.body.images,
            location: req.body.location,
            description: req.body.description,
            tripTypes: req.body.roomTypes,
            reviews: req.body.reviews,
            contact: req.body.contact,
        })
        try {
            const savedTripAgency = await newTripAgency.save()
            res.status(201).json(savedTripAgency);
        }
        catch (error) {
            console.log(error)
            res.status(500).send('Error retrieving TripAgencies');
        }
    }
    static update = async (req, res, next) => {
        try {
            const findTripAgency = await tripAgencyModel.findOne({
                id: req.params.id
            })
            if (findTripAgency) {
                const updatedTripAgency = await tripAgencyModel.findByIdAndUpdate(
                    findTripAgency._id,
                    {
                        name: req.body.name,
                        password: req.body.password,
                        email: req.body.email,
                        images: req.body.images,
                        description: req.body.description,
                        reviews: req.body.reviews,
                        contact: req.body.contact,
                        tripTypes:req.body.tripTypes,
                        priceRange: req.body.priceRange
                    })
                res.json({ msg: "Great, TripAgency details updated" }, updatedTripAgency)
            }
            else {
                res.send("No such record found")
            }

        }
        catch (error) {
            res.json(501).send("Failed to update the TripAgency details")
        }
    }
    static delete = async (req, res, send) => {
        try {
            const findTripAgency = await tripAgencyModel.findOne({ id: req.params.id })
            if (findTripAgency) {
                const removedTripAgency = await TripAgencyModel.findByIdAndRemove(findTripAgency._id);
                res.json({msg:"Removed TripAgency! "},removedTripAgency);
            }
            else {
                res.status(404).send("TripAgency Not Found")
            }
        } catch (error) {
            console.error(error);
            res.status(501).send('Error deleting TripAgency');
        }
    }
    static login = async (req, res, send) => {
        try {
            const findTripAgency = await TripAgencyModel.findOne({ email: req.body.email, password: req.body.password });
            if (findTripAgency) {
                res.json({ msg: "You have logged in" })
            } else {
                res.json({ msg: "Invalid user name or password " })
            }
        }
        catch(error){
            res.status(404).json({ msg: "No user found" })
        }
        
    }
}
module.exports = tripAgencyController
