const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trip = require('../models/trip');
const Destination = require('../models/destination');
const Itinerary = require('../models/itinerary');
const User = require('../models/user');


router.get('/', (req, res, next) => {
  Trip.find({ users: req.session.currentUser._id})
  .then((result) => {
    res.json(result);
  })
  .catch(next);
});

router.post('/create', (req, res, next) => {
  const tripName = req.body.tripName;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const users = req.session.currentUser._id;

  // if (!tripName || ! startDate || !endDate) {
  //   return res.status(422).json({code: 'unprocessable-entity'});
  // }

  const newTrip = new Trip({ tripName, startDate, endDate, users});

  newTrip.save()
  .then((result) => {
    res.status(201).json({code: "okay"})
  })
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Trip.findById(req.params.id)
  .populate("users")
  .then((result) => {
    res.json(result);
  })
  .catch(next);
});

router.post('/:id/itinerary', (req, res, next) => {
  
  const trip = req.params.id;
  const newItinerary = new Itinerary({trip});

  newItinerary.save()
  .then((result) => {
    res.json(result);
    res.status(201).json({code: "okay"})
  })
  .catch(next);
});

router.get('/:id/itinerary/:id', (req, res, next) => {
  Itinerary.findById(req.params.id)
  .then((result) => {
    res.json(result);
  })
  .catch(next);
});

router.get('/:id/get-itinerary', (req, res, next) => {
  Itinerary.find({trip: req.params.id})
  .then((result) => {
    res.json(result);
  })
  .catch(next);
});

router.put('/itinerary/:id', (req, res, next) => {
  // if (!(mongoose.Types.ObjectId.isValid(req.params.id))) {
  //   return res.status(422).json({code: 'unaccesible entity'});
  // }
  const options = {
      new: true
  };
  Itinerary.findByIdAndUpdate(req.params.id, { $push: { destination: { $each: req.body} } }, options)
  .then((result)=> {
    if(!result){
      return res.status(404).json({code: 'not-found'});
    }
    res.json(result);
  })
    .catch(next);
});

router.post('/:id/invite', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({code: 'unauthorized'});
  }

  User.findOne({username: req.body.user})
    .then((user) => {
      if (!user) {
        return res.status(404).json({code: 'not-found'});
      }
      return Trip.findByIdAndUpdate(req.params.id, {$push:{users:user._id}})
      })
    .then(()=>{
      res.status(204).json({code: 'okay'});
    })
    .catch(next);
});


module.exports = router;