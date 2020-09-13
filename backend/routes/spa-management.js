const express = require("express");
const router = express.Router();

const Spa = require('../models/spa');


//Add Spa
router.post("", (req, res, next) => {
  const spa = new Spa({
    fname: req.body.fname,
    lname: req.body.lname,
    age: req.body.age,
    gender: req.body.gender,
    pnumber: req.body.pnumber,
    condition: req.body.condition,
    cpackage: req.body.cpackage
  });
  spa.save();
  res.status(201).json({
    message: 'SPA details added successfully'
  });
});



//Reteive Spa
router.get("", (req, res, next) => {
  Spa.find()
    .then(documents => {
      res.status(200).json({
        message: 'SPA details fetched successfully',
        spas: documents
      });
    });
});


//Delete Spa
router.delete("/:id", (req, res, next) => {
  Spa.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "SPA details Deleted"
    });
  });

});

module.exports = router;
