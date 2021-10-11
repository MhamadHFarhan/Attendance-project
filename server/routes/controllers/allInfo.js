const allInfoModels = require('../../db/models/allInfo');

const getAllInfo = (req, res) => {
  // allInfoModels
  //   .find({})
  //   .populate('Type', 'Users')
  //   .exec()
  //   .then((result) => {
  //     console.log(result);
  //     res.status(200).json(result);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
};

const getInfoByUser = (req, res) => {
  const userId = req.params.id;

  allInfoModels
    .find({ userInfo: userId })
    .populate('userInfo', '-_id -__v -password')
    .populate('Alltype', '-_id -__v')
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const creteAllInfo = (req, res) => {
  const typeId = req.params.id;
  const userId = req.token.userId;

  const newAllInfo = allInfoModels({
    Alltype: typeId,
    userInfo: userId,
  });
  console.log(newAllInfo);

  newAllInfo
    .save()
    .then((result) => {
      console.log(result);

      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getInfoByUser,
  creteAllInfo,
};
