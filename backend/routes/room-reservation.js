const express = require("express");
const router = express.Router();

const Reservation = require('../models/room');


//Add Resevation
router.post("", (req, res, next) => {
  const reservation = new Reservation({
    cname: req.body.cname,
    birthday: req.body.birthday,
    gender: req.body.gender,
    email: req.body.email,
    phone : req.body.phone,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    street: req.body.street,
    cchoise: req.body.cchoise,
    pcode: req.body.pcode,
    edate: req.body.edate,
    ddate: req.body.ddate,
    mnumber: req.body.mnumber
  });
  reservation.save();
  res.status(201).json({
    message: 'Resevation added successfully'
  });
});



//Reteive reservation
router.get("", (req, res, next) => {
  Reservation.find()
    .then(documents => {
      res.status(200).json({
        message: 'Resevation fetched successfully',
        reservations: documents
      });
    });
});

//Delete reservation
router.delete("/:id", (req, res, next) => {
  Reservation.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Resevation Deleted"
    });
  });

});

module.exports = router;
