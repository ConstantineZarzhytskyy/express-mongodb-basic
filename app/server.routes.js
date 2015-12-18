var express = require('express');
var router = express.Router();
var config = require('./server.config.js');
var user = config.user;

config.connectToDataBase();

router.route('/users')
    .get(function (req, res) {
      user.find(function (err, users) {
        if (err) { res.send(err); }

        res.json(users);
      });
    });

module.exports = router;
