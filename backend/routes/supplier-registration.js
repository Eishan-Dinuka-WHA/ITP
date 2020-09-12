const express = require("express");
const router = express.Router();

const Supplier = require('../models/supplier');

//save data from form to database,retrive and delete data from database
//Add Supplier save supplier details from form
router.post("", (req, res, next) => {
  const supplier = new Supplier({
    sname: req.body.sname,
    cname: req.body.cname,
    badd: req.body.badd,
    btele: req.body.btele,
    web: req.body.web,
    email: req.body.email,
    pcode: req.body.pcode,
    stype: req.body.stype,
    pdes: req.body.pdes,
    semail: req.body.semail,
    smnumber: req.body.smnumber,

  });
  supplier.save();
  res.status(201).json({
    message: 'Supplier added successfully'
  });
});



//Reteive Supplier
router.get("", (req, res, next) => {
  Supplier.find()
    .then(documents => {
      res.status(200).json({
        message: 'Supplier fetched successfully',
        suppliers: documents
      });
    });
});


//Delete Supplier
router.delete("/:id", (req, res, next) => {
  Supplier.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Supplier Deleted"
    });
  });

});

module.exports = router;
