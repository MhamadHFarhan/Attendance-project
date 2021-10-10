const typeModel = require('./../../db/models/type');

const CreateType = (req, res) => {
  const { type, rate } = req.body;

  const newType = new typeModel({
    type,
    rate,
  });

  newType
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => res.send(err));
};

const UpdateType = (req, res) => {
  const id = req.params.id;

  typeModel
    .findOneAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteType = (req, res) => {
  const id = req.params.id;
  typeModel
    .findOneAndDelete(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  CreateType,
  UpdateType,
  deleteType,
};
