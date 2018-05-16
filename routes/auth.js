var express = require('express');
var router = express.Router();
var passport = require('passport');

// Require controllers
var auth_controller = require('../controllers/auth');

/* GET home page. */

router.get('/', function(req, res, next){
  res.render('index', { user: req.user });
});

router.get('/auth', function(req, res, next) {
  passport.authenticate('instagram'),
  function(req, res){
    // The request will be redirected to Instagram for authentication, so this
    // function will not be called.
  }
});

router.get('/callback', 
  passport.authenticate('instagram', { failureRedirect: '/' }),
  function(req, res, next) {
    res.redirect('/');
  }
);

module.exports = router;
