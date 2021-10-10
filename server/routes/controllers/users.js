const usersModel = require('./../../db/models/users');

const createNewAuthor = (req, res) => {
  const { firstName, lastName, email, password, rate, role } = req.body;

  const user = new usersModel({
    firstName,
    lastName,
    email,
    password,
    rate,
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

module.exports = {
  createNewAuthor,
};
