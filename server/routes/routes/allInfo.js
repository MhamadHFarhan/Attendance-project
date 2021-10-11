const express = require('express');

const { getInfoByUser, creteAllInfo } = require('../controllers/allInfo');
const authentication = require('../middlewares/auth');

const allInfoRouter = express.Router();

allInfoRouter.get('/:id', authentication, getInfoByUser);
allInfoRouter.post('/:id', authentication, creteAllInfo);

module.exports = allInfoRouter;
