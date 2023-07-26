const express = require('express');
const adminRouter = express.Router;
const adminController = require('../../../controllers/adminController');

adminRouter.get('/', adminController.index);
adminRouter.get('/:id', adminController.get);
adminRouter.post('/', adminController.create);
adminRouter.put('/:id', adminController.update);
adminRouter.delete('/:id', adminController.delete);

module.exports = adminRouter;