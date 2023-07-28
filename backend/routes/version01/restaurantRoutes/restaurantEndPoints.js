const express=require('express')
const {getRestaurantById, getRestaurants, createRestaurant, deleteRestaurant, updateRestaurant}=require('../../../controllers/restaurantController/restaurantController')

const restaurantRouter=express.Router();
hotelRouter.get("/", getRestaurants)
hotelRouter.get('/:id', getRestaurantById)
hotelRouter.post('/', createRestaurant)
hotelRouter.patch('/:id', updateRestaurant)
hotelRouter.delete('/:id', deleteRestaurant)
module.exports=restaurantRouter