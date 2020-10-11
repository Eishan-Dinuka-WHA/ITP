const mongoose = require('mongoose');
const salarySchema = mongoose.Schema({
  ename: { type: String, required: true},
  toh: {type: String, required: true},
  twd: {type: String, required: true},
  payd: {type: String, required: true},
  bonus: {type: String, required: true},
  bsal: {type: String, required: true},
  welf: {type: String, required: true},
  owork: {type: String, required: true},
  epf: {type: String, required: true},
  stamp: {type: String, required: true},
  dloan: {type: String, required: true},
  fadvan: {type: String, required: true},
  ins: {type: String, required: true},
  tde: {type: String, required: true},
  gpay: {type: String, required: true},
  npay: {type: String, required: true}

});

module.exports = mongoose.model('Salary', salarySchema);
