const express = require('express');

const {
  getInfoByUser,
  creteAllInfo,
  getInfoUserByAdmin,
  updateAllInfo,
} = require('../controllers/allInfo');
const authentication = require('../middlewares/auth');

const allInfoRouter = express.Router();

allInfoRouter.get('/', authentication, getInfoByUser);
allInfoRouter.post('/:typeId', authentication, creteAllInfo);
allInfoRouter.put('/:typeId', authentication, updateAllInfo);
allInfoRouter.get('/admin/:userId', authentication, getInfoUserByAdmin);

module.exports = allInfoRouter;
