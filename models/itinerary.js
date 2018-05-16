'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const itinerarySchema = new Schema({
  trip: {
    type: ObjectId,
    ref: 'Trip'
  },
  destination: [{
    destinationName: String,
    startDate: Date,
    endDate: Date,
    place_id: String,
    location: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: [Number]
    },
    photoUrl: Array,
    experiences: Array
  }]
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;