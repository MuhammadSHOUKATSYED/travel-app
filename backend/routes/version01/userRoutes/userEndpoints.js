const express = require('express');
const userRouter = express.Router;
const userController = require('../../../controllers/userController/userController');

userRouter.get('/',userController.index);
userRouter.get('/:id',userController.get);
userRouter.post('/',userController.create);
userRouter.put('/:id',userController.update);
userRouter.delete('/:id',userController.delete);

module.exports = userRouter;