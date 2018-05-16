'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const reservationSchema = new Schema({
  trip: {
    type: ObjectId,
    ref: 'Trip'
  },
  category: String,
  Date: Date,
  resLink: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;