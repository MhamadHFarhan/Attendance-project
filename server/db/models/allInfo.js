const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const allInfo = new mongoose.Schema({
  Alltype: { type: ObjectId, ref: 'Type' },
  userInfo: { type: ObjectId, ref: 'Users' },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AllInfo', allInfo);
