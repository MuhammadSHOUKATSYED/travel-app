const express = require('express');
const commentRouter = express.Router();
const commentController = require('../../../controllers/articleController/commentController');

commentRouter.get('/', commentController.index);
commentRouter.get('/:id', commentController .get);
commentRouter.post('/', commentController.create);
commentRouter.put('/:id', commentController .update);
commentRouter.delete('/:id', commentController.delete);

module.exports = commentRouter;