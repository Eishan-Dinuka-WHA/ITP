const mongoose = require('mongoose');
const inventorySchema = mongoose.Schema({
  IT01: { type: String, required: true},
  AV01: { type: String, required: true},
  AV02: {type: String, required: true},
  U1: {type: String, required: true},
  Date1: {type: String, required: true},
  Sup: {type: String, required: true}
});

module.exports = mongoose.model('Inventory', inventorySchema);
