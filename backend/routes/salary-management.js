const express = require("express");
const router = express.Router();

const Salary = require('../models/salary');


//Add salary
router.post("", (req, res, next) => {
  const salary = new Salary({
    ename: req.body.ename,
    etype: req.body.etype,
    dept: req.body.dept,
    des: req.body.des,
    toh: req.body.toh,
    twd: req.body.twd,
    payd: req.body.payd,
    bsal: req.body.bsal,
    owork: req.body.owork,
    bonus: req.body.bonus,
    epf: req.body.epf,
    welf: req.body.welf,
    stamp: req.body.stamp,
    dloan: req.body.dloan,
    fadvan: req.body.fadvan,
    ins: req.body.ins,
    tde: req.body.tde,
    gpay: req.body.gpay,
    npay: req.body.npay

  });
  salary.save();
  res.status(201).json({
    message: 'salary added successfully'
  });
});



//Reteive Salary
router.get("", (req, res, next) => {
  Salary.find()
    .then(documents => {
      res.status(200).json({
        message: 'Salary fetched successfully',
        salarys: documents
      });
    });
});


//Delete Coustomer
router.delete("/:id", (req, res, next) => {
  Salary.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Salary Deleted"
    });
  });

});

module.exports = router;
