const allInfoModels = require('../../db/models/allInfo');



const getAllInfo = (req, res) => {


  allInfoModels
    .find({})
    .populate('Type', 'Users')
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getAllInfo,
};
