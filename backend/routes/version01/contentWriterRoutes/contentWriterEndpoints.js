const express = require('express');
const contentWriterRouter = express.Router();
const contentWriterController = require('../../../controllers/contentWriterController/contentWriterController');

contentWriterRouter.get('/', contentWriterController.index);
contentWriterRouter.get('/:id', contentWriterController.get);
contentWriterRouter.post('/', contentWriterController.create);
contentWriterRouter.put('/:id', contentWriterController.update);
contentWriterRouter.delete('/:id', contentWriterController.delete);

module.exports = contentWriterRouter;