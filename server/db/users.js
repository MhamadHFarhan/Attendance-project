const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Schema
const user = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { default: 'User' },
});

// Hash the password
user.pre('save', async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});

users.statics.authenticateBasic = async function (email, password) {
  try {
    const user = await this.findOne({ email });
    if (!user) return ["The email doesn't exist", 404];

    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      const payload = {
        userId: user._id,
        country: user.country,
        role: user.role,
      };

      const options = {
        expiresIn: '60m',
      };

      return [jwt.sign(payload, process.env.SECRET, options), 200];
    }
    return ['The password you’ve entered is incorrect', 403];
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = mongoose.model('User', users);
