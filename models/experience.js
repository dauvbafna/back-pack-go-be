'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const experienceSchema = new Schema({
  destination: {
    type: ObjectId,
    ref: 'Destination'
  },
  experienceName: String,
  description: String,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  },
  photoUrl: [String]
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;