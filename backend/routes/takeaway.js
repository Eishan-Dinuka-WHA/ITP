const express = require("express");
const router = express.Router();

const Restaurant = require('../models/takeaway');


//Add Restaurant
router.post("", (req, res, next) => {
  const restaurant = new Restaurant({
    fname: req.body.fname,
    lname: req.body.lname,
    venue: req.body.venue,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    when: req.body.when,
    time: req.body.time,
    payment: req.body.payment
  });
  restaurant.save();
  res.status(201).json({
    message: 'Restaurant added successfully'
  });
});



//Reteive Restaurant
router.get("", (req, res, next) => {
  Restaurant.find()
    .then(documents => {
      res.status(200).json({
        message: 'Restaurant fetched successfully',
        restaurants: documents
      });
    });
});


//Delete Restaurant
router.delete("/:id", (req, res, next) => {
  Restaurant.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Restaurant Deleted"
    });
  });

});

module.exports = router;
