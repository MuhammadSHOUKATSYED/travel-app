const express=require('express')
const tripAgencyRouter=express.Router
hotelRouter.get("/", getTripAgencies)
hotelRouter.get('/:id', getTripAgencyById)
hotelRouter.post('/', createTripAgency)
hotelRouter.patch('/:id', updateTripAgency)
hotelRouter.delete('/:id', deleteTripAgency)
module.exports=tripAgencyRouter