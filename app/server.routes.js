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

router.route('/users:userId')
    .get(function (req, res) {
      var id = req.params.userId;

      user.find({ _id: id }, function (err, user) {
        if (err) { res.send(err); }

        res.json(user);
      });
    })
    .put(function (req, res) {
      var userId = req.params.userId;
      var value = req.body.value;

      user.update({ _id: userId },
          {
            $set: {
              name: value.name,
              surname: value.surname,
              phone: value.phone,
              dob: value.dob
            }
          }, function (err) {
            if (err) { res.send(err); }

            res.end();
          });
    })
    .delete(function (req, res) {
      var userId = req.params.userId;

      user.remove({ _id: userId }, function (err) {
        if (err) { res.send(err); }

        res.end();
      });
    });

module.exports = router;
