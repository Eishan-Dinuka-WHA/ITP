const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
  fname: { type: String, required: true},
  lname: { type: String, required: true},
  address: {type: String, required: true},
  email: {type: String, required: true},
  phoneno: {type: String, required: true},
  date: {type: String, required: true},
  time1: {type: String, required: true},
  time2: {type: String, required: true}
});

module.exports = mongoose.model('event', eventSchema);
