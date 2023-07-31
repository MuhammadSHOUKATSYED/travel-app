const express = require('express');
const hotelRouter = express.Router();
const hotelController = require('../../../controllers/hotelController/hotelController');

hotelRouter.get('/',hotelController.index);
hotelRouter.get('/:id',hotelController.get);
hotelRouter.post('/',hotelController.create);
hotelRouter.put('/:id',hotelController.update);
hotelRouter.delete('/:id',hotelController.delete);


//for login in the hotel we create endpoints as 
hotelRouter.post('/login',hotelController.login);

module.exports = hotelRouter;