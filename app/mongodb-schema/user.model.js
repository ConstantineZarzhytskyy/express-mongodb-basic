var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  surname: String,
  phone: { type: String, default: '' },
  dob: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', userSchema);