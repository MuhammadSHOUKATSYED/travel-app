const express=require('express')
const {getHotelById, getHotels, createHotel, deleteHotel, updateHotel}=require('../../../controllers/hotelController/hotelController')
const hotelRouter=express.Router
hotelRouter.get("/", getHotels)
hotelRouter.get('/:id', getHotelById)
hotelRouter.post('/', createHotel)
hotelRouter.patch('/:id', updateHotel)
hotelRouter.delete('/:id', deleteHotel)
module.exports=hotelRouter