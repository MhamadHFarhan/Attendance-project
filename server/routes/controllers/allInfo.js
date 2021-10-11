const allInfoModels = require('../../db/models/allInfo');

const getInfoByUser = (req, res) => {
  const userId = req.token.userId;

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

const getInfoUserByAdmin = (req, res) => {
  if (req.token.role === 'admin') {
    const userId = req.params.userId;
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
  } else {
    return res.send(`You cant move here`);
  }
};

const creteAllInfo = (req, res) => {
  const typeId = req.params.typeId;
  const userId = req.token.userId;
  const startDate = req.body.startDate;

  const newAllInfo = allInfoModels({
    Alltype: typeId,
    userInfo: userId,
    startDate,
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

const updateAllInfo = (req, res) => {
  const typeId = req.params.typeId;

  allInfoModels
    .findOneAndUpdate({ Alltype: typeId }, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    });
};

module.exports = {
  getInfoByUser,
  creteAllInfo,
  getInfoUserByAdmin,
  updateAllInfo,
};
