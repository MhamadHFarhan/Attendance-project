const express = require('express');

const { createNewUser, UpdateUser } = require('./../controllers/users');

const usersRouter = express.Router();

usersRouter.post('/', createNewUser);
usersRouter.put('/:id', UpdateUser);

module.exports = usersRouter;
