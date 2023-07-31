const express = require('express');
const reviewRouter = express.Router();
const reviewController = require('../../../controllers/tripAgencyController/reviewController');

reviewRouter.get('/', reviewController.index);
reviewRouter.get('/:id', reviewController.get);
reviewRouter.post('/', reviewController.create);
reviewRouter.put('/:id', reviewController .update);
reviewRouter.delete('/:id', reviewController.delete);

module.exports = reviewRouter;
