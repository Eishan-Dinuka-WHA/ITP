const express = require("express");
const router = express.Router();

const Event = require('../models/event');


//Add Event
router.post("", (req, res, next) => {
  const event = new Event({
    fname: req.body.fname,
    lname: req.body.lname,
    address: req.body.address,
    email: req.body.email,
    phoneno: req.body.phoneno,
    date: req.body.date,
    time1: req.body.time1,
    time2: req.body.time2,
  });
  event.save();
  res.status(201).json({
    message: 'Temporary Reservation added successfully'
  });
});



//Reteive Event
router.get("", (req, res, next) => {
  Event.find()
    .then(documents => {
      res.status(200).json({
        message: 'Customer Reservation fetched successfully',
        events: documents
      });
    });
});


//Delete Event
router.delete("/:id", (req, res, next) => {
  Event.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Coustomer Reservation Deleted"
    });
  });

});

module.exports = router;
