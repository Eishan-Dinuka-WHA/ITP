const mongoose = require('mongoose');
const packageSchema = mongoose.Schema({
  fname: { type: String, required: true},
  lname: { type: String, required: true},
  bdate: {type: String, required: true},
  pamount: {type: String, required: true},
  aservice: {type: String, required: true},
  vduration: {type: String, required: true},
  scharges: {type: String, required: true},
  des: {type: String, required: true}

});

module.exports = mongoose.model('Package', packageSchema);
