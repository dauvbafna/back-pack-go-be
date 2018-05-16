'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;