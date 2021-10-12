const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const allInfo = new mongoose.Schema({
  Alltype: { type: ObjectId, ref: 'Type' },
  userInfo: { type: ObjectId, ref: 'Users' },
  startDate: { type: Date },
  endDate: { type: Date },
});

module.exports = mongoose.model('AllInfo', allInfo);

/*
    .aggregate([
      {
        $lookup: {
          from: 'types',
          localField: 'Alltype',
          foreignField: '_id',
          as: 'type',
        },
      },
      { $unwind: '$type' },
      {
        $addFields: {
          rate: { $divide: ['$type.rate', 60] },
          minutes: {
            $dateDiff: {
              startDate: '$startDate',
              endDate: '$endDate',
              unit: 'minute',
            },
          },
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userInfo',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: '$user' },
      {
        $group: {
          _id: '$userInfo',
          firstName: '$user',
          lastName: '$',
          email: '$',
          role: '$',
          totalRate: {
            $sum: {
              $multiply: ['$minutes', '$rate'],
            },
          },
        },
      },
      {
        $match: {
          // $expr: { $eq: ['_id', userId] },
          _id: ObjectId(userId),
        },
      },
    ])





// gfj;ksklgfjgkldsgjdlgfhjd
sa7





*/