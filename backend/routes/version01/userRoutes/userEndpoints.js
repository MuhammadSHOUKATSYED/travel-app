const express = require('express');
const userRouter = express.Router;
const userController = require('../../../controllers/userController');

forumRouter.get('/',userController.index);
forumRouter.get('/:id',userController.get);
forumRouter.post('/',userController.create);
forumRouter.put('/:id',userController.update);
forumRouter.delete('/:id',userController.delete);

module.exports = userRouter;