var express = require('express');
var router = express.Router();
var db = require('../models');

var User = db.User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
    .then(function (users) {
      res.json(users);
    });
});

router.post('/', function(req, res, next) {
  User.create({
    first_name: req.query.firstName,
    last_name: req.query.lastName,
    bio: req.query.bio,
    email: req.query.email
  })
    .then(function (user) {
      res.json(user);
    });
});

module.exports = router;
