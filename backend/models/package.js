const mongoose = require('mongoose');
const packageSchema = mongoose.Schema({
  fname: { type: String, required: true},
  lname: { type: String, required: true},
  checkin: {type: String, required: true},
  checkout: {type: String, required: true},
  adults: {type: String, required: true},
  nofch: {type: String, required: true},
  des: {type: String, required: true}

});

module.exports = mongoose.model('Package', packageSchema);
