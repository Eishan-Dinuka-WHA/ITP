const express = require("express");
const router = express.Router();

const Attendance = require('../models/attendance');


//Add Attendance
router.post("", (req, res, next) => {
  const attendance = new Attendance({
    eid: req.body.eid,
    name: req.body.name,
    date: req.body.date,
    des: req.body.des,
    sta: req.body.sta,
    atime: req.body.atime,
    dtime: req.body.dtime
  });
  attendance.save();
  res.status(201).json({
    message: 'Attendance added successfully'
  });
});



//Reteive Attendance
router.get("", (req, res, next) => {
  Attendance.find()
    .then(documents => {
      res.status(200).json({
        message: 'Attendance fetched successfully',
        attendances: documents
      });
    });
});


//Delete Attendance
router.delete("/:id", (req, res, next) => {
  Attendance.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Attendance Deleted"
    });
  });

});

module.exports = router;
