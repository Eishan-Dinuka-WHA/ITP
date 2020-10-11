const mongoose = require('mongoose');
const attendanceSchema = mongoose.Schema({
  name: { type: String, required: true},
  date: { type: String, required: true},
  des: {type: String, required: true},
  sta: {type: String, required: true},
  atime: {type: String, required: true},
  dtime: {type: String, required: true}

});

module.exports = mongoose.model('attendance', attendanceSchema);
