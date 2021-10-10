const usersModel = require('./../../db/models/users');

const createNewUser = (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  const user = new usersModel({
    firstName,
    lastName,
    email,
    password,
    role,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const UpdateUser = (req, res) => {
  const id = req.params.id;

  usersModel
    .findOneAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createNewUser,
  UpdateUser,
};
