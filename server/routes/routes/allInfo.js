const express = require('express');

const {
  getInfoByUser,
  creteAllInfo,
  getInfoUserByAdmin,
} = require('../controllers/allInfo');
const authentication = require('../middlewares/auth');

const allInfoRouter = express.Router();

allInfoRouter.get('/', authentication, getInfoByUser);
allInfoRouter.post('/:typeId', authentication, creteAllInfo);
allInfoRouter.get('/:id', authentication, getInfoUserByAdmin);
module.exports = allInfoRouter;
