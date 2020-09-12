const mongoose = require('mongoose');
const supplierSchema = mongoose.Schema({
  sname: { type: String, required: true},
  cname: { type: String, required: true},
  badd: {type: String, required: true},
  btele: {type: String, required: true},
  web: {type: String, required: true},
  email: {type: String, required: true},
  pcode: {type: String, required: true},
  stype: {type: String, required: true},
  pdes: {type: String, required: true},
  semail: {type: String, required: true},
  smnumber: {type: String, required: true},


});

module.exports = mongoose.model('Supplier', supplierSchema);
//create tables and colums in database
