const express = require('express');

const { CreateType, UpdateType, deleteType } = require('../controllers/type');

const typeRouter = express.Router();

typeRouter.post('/', CreateType);
typeRouter.put('/:id', UpdateType);
typeRouter.delete('/:id', deleteType);

module.exports = typeRouter;
