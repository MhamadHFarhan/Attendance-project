const express = require('express');

const { getAllInfo } = require('../controllers/allInfo');

const allInfoRouter = express.Router();

allInfoRouter.get('/', getAllInfo);


module.exports = allInfoRouter;
