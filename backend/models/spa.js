const mongoose = require('mongoose');
const spaSchema = mongoose.Schema({
  fname: { type: String, required: true},
  lname: { type: String, required: true},
  age: {type: String, required: true},
  gender: {type: String, required: true},
  pnumber: {type: String, required: true},
  condition: {type: String, required:true},
  cpackage: {type: String, required: true},

});

module.exports = mongoose.model('Spa', spaSchema);
