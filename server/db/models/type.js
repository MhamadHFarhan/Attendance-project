const mongoose = require('mongoose');

const type = new mongoose.Schema({
  type: { type: String },
  rate: { type: Number },
});

module.exports = mongoose.model('Type', type);
