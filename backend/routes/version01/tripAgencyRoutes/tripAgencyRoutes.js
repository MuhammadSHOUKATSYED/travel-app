const express=require('express')

const tripAgencyRouter=express.Router
tripAgencyRouter.get("/", getTripAgencies)
tripAgencyRouter.get('/:id', getTripAgencyById)
tripAgencyRouter.post('/', createTripAgency)
tripAgencyRouter.patch('/:id', updateTripAgency)
tripAgencyRouter.delete('/:id', deleteTripAgency)
module.exports=tripAgencyRouter