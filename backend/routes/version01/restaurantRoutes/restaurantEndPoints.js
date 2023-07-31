const express = require('express');
const restaurantRouter = express.Router();
const restaurantController = require('../../../controllers/restaurantController/restaurantController');

restaurantRouter.get('/',restaurantController.index);
restaurantRouter.get('/:id',restaurantController.get);
restaurantRouter.post('/',restaurantController.create);
restaurantRouter.put('/:id',restaurantController.update);
restaurantRouter.delete('/:id',restaurantController.delete);


//for login in the hotel we create endpoints as 
restaurantRouter.post('/login',restaurantController.login);

module.exports = restaurantRouter;