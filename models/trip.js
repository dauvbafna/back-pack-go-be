'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const tripSchema = new Schema({
  tripName: String,
  startDate: Date,
  endDate: Date,
  users: [{
    type: ObjectId,
    ref: 'User'
  }]
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;