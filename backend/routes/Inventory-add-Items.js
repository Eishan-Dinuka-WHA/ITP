const express = require("express");
const router = express.Router();

const Inventory = require('../models/inventory');


//Add Inventory
router.post("", (req, res, next) => {
  const inventory = new Inventory({
    IT01: req.body.IT01,
    AV01: req.body.AV01,
    AV02: req.body.AV02,
    U1: req.body.U1,
    Date1: req.body.Date1,
    Sup: req.body.Sup,
  });
  inventory.save();
  res.status(201).json({
    message: 'Item added successfully'
  });
});



//Reteive Inventory
router.get("", (req, res, next) => {
  Inventory.find()
    .then(documents => {
      res.status(200).json({
        message: 'Items fetched successfully',
        inventory: documents
      });
    });
});






//Delete Inventory
router.delete("/:id", (req, res, next) => {
  Inventory.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Item Deleted"
    });
  });

});

module.exports = router;
