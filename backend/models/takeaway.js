const mongoose = require('mongoose');
const takeawaySchema = mongoose.Schema({
  fname: { type: String, required: true},
  lname: { type: String, required: true},
  venue: {type: String, required: true},
  address: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  when: {type: String, required: true},
  time: {type: String, required: true},
  payment: {type: String, required: true}
});

module.exports = mongoose.model('Restaurant', takeawaySchema);
