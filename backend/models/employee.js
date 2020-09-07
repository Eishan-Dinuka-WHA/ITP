const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
  uname: { type: String, required: true},
  fname: { type: String, required: true},
  lname: {type: String, required: true},
  address: {type: String, required: true},
  nic: {type: String, required: true},
  dob: {type: String, required: true},
  gender: {type: String, required: true},
  mno: {type: String, required: true},
  edd: {type: String, required: true},
  apn: {type: String, required: true},
  joind: {type: String, required: true},
  dept: {type: String, required: true},
  dcs: {type: String, required: true},
  empty: {type: String, required: true},
  sal: {type: String, required: true},
  password: {type: String, required: true},
  rpassword: {type: String, required: true}

});

module.exports = mongoose.model('Employee', employeeSchema);
