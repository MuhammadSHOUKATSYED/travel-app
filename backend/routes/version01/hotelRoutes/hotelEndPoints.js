const express=require('express')
const hotelRouter=express.Router
hotelRouter.get("/", getHotels)
hotelRouter.get('/:id', getHotelById)
hotelRouter.post('/', createHotel)
hotelRouter.patch('/:id', updateHotel)
hotelRouter.delete('/:id', deleteHotel)
module.exports=hotelRouter