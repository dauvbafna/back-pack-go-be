'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const destinationSchema = new Schema({
  place_id: String,
  destinationName: String,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  },
  photoUrl: [String]
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;