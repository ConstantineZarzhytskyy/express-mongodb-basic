var express = require('express');
var router = express.Router();
var config = require('./server.config.js');
var user = config.user;

config.connectToDataBase();

/*API HERE*/

module.exports = router;
