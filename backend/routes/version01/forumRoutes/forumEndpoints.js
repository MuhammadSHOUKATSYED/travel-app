const express = require('express');
const forumRouter = express.Router();
const forumController = require('../../../controllers/forumController/forumController');

forumRouter.get('/', forumController.index);
forumRouter.get('/:id', forumController.get);
forumRouter.post('/', forumController.create);
forumRouter.put('/:id', forumController.update);
forumRouter.delete('/:id', forumController.delete);

module.exports = forumRouter;