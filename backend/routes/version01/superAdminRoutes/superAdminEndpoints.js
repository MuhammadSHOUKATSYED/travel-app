const express = require('express');
const superAdminRouter = express.Router();
const superAdminController= require('../../../controllers/tripAgencyController/tripAgencyController');

superAdminRouter.get('/',tripAgencyController.index);
superAdminRouter.get('/:id',tripAgencyController.get);
superAdminRouter.post('/',tripAgencyController.create);
superAdminRouter.put('/:id',tripAgencyController.update);
superAdminRouter.delete('/:id',tripAgencyController.delete);

module.exports = superAdminRouter;