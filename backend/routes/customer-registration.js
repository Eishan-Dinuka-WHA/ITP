const express = require("express");
const customer = require("../models/customer");
const router = express.Router();

const Customer = require('../models/customer');


//Add Customer
router.post("", (req, res, next) => {
  const customer = new Customer({
    uname: req.body.uname,
    title: req.body.title,
    fname: req.body.fname,
    lname: req.body.lname,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    street: req.body.street,
    ctype: req.body.ctype,
    pcode: req.body.pcode,
    email: req.body.email,
    mnumber: req.body.mnumber,
    password: req.body.password,
    rpassword: req.body.rpassword
  });
  customer.save();
  res.status(201).json({
    message: 'Customer added successfully'
  });
});


router.put("/:id",(req,res,next)=>{
  const customer = new Customer({
    _id:req.body.cid,
    uname: req.body.uname,
    title: req.body.title,
    fname: req.body.fname,
    lname: req.body.lname,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city,
    street: req.body.street,
    ctype: req.body.ctype,
    pcode: req.body.pcode,
    email: req.body.email,
    mnumber: req.body.mnumber,
    password: req.body.password,
    rpassword: req.body.rpassword
  });
  Customer.updateOne({_id: req.params.id}, customer).then(result=> {
    console.log(result);
    res.status(200).json({message:"Updated Successful"});
  });
});

router.get("/:id",(req, res,next)=>{
  Customer.findById(req.params.id.then(customer => {
    if(customer){
      res.status(200).json(customer);
    }else{
      res.status(404).json({message:"Customer Not Found"});
    }
  }));
});


//Reteive Customer
router.get("", (req, res, next) => {
  Customer.find()
    .then(documents => {
      res.status(200).json({
        message: 'Customer fetched successfully',
        customers: documents
      });
    });
});


//Delete Coustomer
router.delete("/:id", (req, res, next) => {
  Customer.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Coustomer Deleted"
    });
  });

});

module.exports = router;
