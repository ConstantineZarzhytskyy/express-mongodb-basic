var mongoose = require('mongoose');
var connectionUTL = 'mongodb://<USERNAME>:<PASSROWD>@ds<PORT>.mongolab.com:<PORT>/<PROJECT-NAME>';

exports.connectToDataBase = function () {
  return mongoose.connect(connectionUTL);
};