const mongoose = require('mongoose');
const reservationSchema = mongoose.Schema({
  cname: { type: String, required: true},
  birthday: { type: String, required: true},
  gender: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  country: {type: String, required: true},
  state: {type: String, required: true},
  city: {type: String, required: true},
  street: {type: String, required: true},
  cchoise: {type: String, required: true},
  pcode: {type: String, required: true},
  edate: {type: String, required: true},
  ddate: {type: String, required: true},
  mnumber: {type: String, required: true}

});

module.exports = mongoose.model('Reservation', reservationSchema);
