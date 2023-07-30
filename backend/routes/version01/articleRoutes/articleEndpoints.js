const express = require('express');
const articleRouter = express.Router();
const articleController = require('../../../controllers/articleController/articleController');

articleRouter.get('/', articleController.index);
articleRouter.get('/:id', articleController.get);
articleRouter.post('/', articleController.create);
articleRouter.put('/:id', articleController.update);
articleRouter.delete('/:id', articleController.delete);

module.exports = articleRouter;