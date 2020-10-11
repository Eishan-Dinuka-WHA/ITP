const express = require("express");
const router = express.Router();

const Employee = require('../models/employee');


//Add Employee
router.post("", (req, res, next) => {
  const employee = new Employee({
    uname: req.body.uname,
    fname: req.body.fname,
    lname: req.body.lname,
    address: req.body.address,
    nic: req.body.nic,
    dob: req.body.dob,
    gender: req.body.gender,
    mno: req.body.mno,
    edd: req.body.edd,
    apn: req.body.apn,
    joind: req.body.joind,
    dept: req.body.dept,
    dcs: req.body.dcs,
    empty: req.body.empty,
    sal: req.body.sal,
    password: req.body.password,
    rpassword: req.body.rpassword
  });
  employee.save();
  res.status(201).json({
    message: 'Employee added successfully'
  });
});

// Update the Employee
router.put("/:id",(req,res,next)=>{
  const employee = new Employee({
    _id:req.body.eid,
    uname: req.body.uname,
    fname: req.body.fname,
    lname: req.body.lname,
    address: req.body.address,
    nic: req.body.nic,
    dob: req.body.dob,
    gender: req.body.gender,
    mno: req.body.mno,
    edd: req.body.edd,
    apn: req.body.apn,
    joind: req.body.joind,
    dept: req.body.dept,
    dcs: req.body.dcs,
    empty: req.body.empty,
    sal: req.body.sal,
    password: req.body.password,
    rpassword: req.body.rpassword
  });
  Employee.updateOne({_id: req.params.id}, employee).then(result=> {
    console.log(result);
    res.status(200).json({message:"Updated Successful"});
  });
});

router.get("/:id",(req, res,next)=>{
  Employee.findById(req.params.id.then(employee => {
    if(employee){
      res.status(200).json(employee);
    }else{
      res.status(404).json({message:"Employee Not Found"});
    }
  }));
});


//Reteive Employee
router.get("", (req, res, next) => {
  Employee.find()
    .then(documents => {
      res.status(200).json({
        message: 'Employee fetched successfully',
        employees: documents
      });
    });
});



//Delete Coustomer
router.delete("/:id", (req, res, next) => {
  Employee.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Employee Deleted"
    });
  });

});

module.exports = router;
