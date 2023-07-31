const express = require('express');
const tripAgencyRouter = express.Router();
const tripAgencyController = require('../../../controllers/tripAgencyController/tripAgencyController');

tripAgencyRouter.get('/',tripAgencyController.index);
tripAgencyRouter.get('/:id',tripAgencyController.get);
tripAgencyRouter.post('/',tripAgencyController.create);
tripAgencyRouter.put('/:id',tripAgencyController.update);
tripAgencyRouter.delete('/:id',tripAgencyController.delete);


//for login in the hotel we create endpoints as 
tripAgencyRouter.post('/login',tripAgencyController.login);

module.exports = tripAgencyRouter;