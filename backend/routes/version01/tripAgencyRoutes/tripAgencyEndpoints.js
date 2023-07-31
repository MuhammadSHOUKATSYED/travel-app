const express = require('express');
const tripAgencyRouter = express.Router();
const tripAgencyController = require('../../../controllers/tripAgencyController/tripAgencyController');

tripAgencyRouter.get('/',tripAgencyController.index);
tripAgencyRouter.get('/:id',tripAgencyController.get);
tripAgencyRouter.post('/',tripAgencyController.create);
tripAgencyRouter.put('/:id',tripAgencyController.update);
tripAgencyRouter.delete('/:id',tripAgencyController.delete);


//for login in the trip agency we create endpoints as 
hotelRouter.post('/login',tripAgencyController.login);

module.exports = tripAgencyRouter;
