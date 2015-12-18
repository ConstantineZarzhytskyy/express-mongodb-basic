var mongoose = require('mongoose');
var userModel = require('./mongodb-schema/user.model');
var connectionUTL = 'mongodb://<USERNAME>:<PASSROWD>@ds<PORT>.mongolab.com:<PORT>/<PROJECT-NAME>';

exports.connectToDataBase = function () {
  return mongoose.connect(connectionUTL);
};

exports.user = userModel;
