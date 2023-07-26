const express=require('express')
const restaurantRouter=express.Router
hotelRouter.get("/", getRestaurants)
hotelRouter.get('/:id', getRestaurantById)
hotelRouter.post('/', createRestaurant)
hotelRouter.patch('/:id', updateRestaurant)
hotelRouter.delete('/:id', deleteRestaurant)
module.exports=restaurantRouter