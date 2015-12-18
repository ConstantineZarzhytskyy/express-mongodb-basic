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
    })
    .post(function (req, res) {
      var value = req.body.user;
      var collection = new user();

      collection.name = value.name;
      collection.surname = value.surname;

      collection.save(function(err, user) {
        if (err) { res.send(err); }

        res.json(user);
      });
    });

module.exports = router;
