const express=require('express')
const {getTripAgencyById, getTripAgencies, createTripAgency, deleteTripAgency, updateTripAgency}=require('../../../controllers/tripAgencyController/tripAgencyController')

const TripAgencyRouter=express.Router();
hotelRouter.get("/", getTripAgencies)
hotelRouter.get('/:id', getTripAgencyById)
hotelRouter.post('/', createTripAgency)
hotelRouter.patch('/:id', updateTripAgency)
hotelRouter.delete('/:id', deleteTripAgency)
module.exports=TripAgencyRouter