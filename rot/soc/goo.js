var express = require('express');
var router = express.Router();
//var usr


var passport = require('passport');
var str= require('passport-facebook').Strategy;
var cnf=require("./prf/goo.json")

router.use(passport.initialize());
router.use(passport.session());
// var usr= require("../index");
// router.use('/', usr);

passport.use(new str({
    clientID: cnf.key,
    clientSecret: cnf.sec,
    callbackURL: cnf.cb
},
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
}
));

passport.serializeUser(function(usr, done) {
  done(null, usr);
});
passport.deserializeUser(function(usr, done) {
  done(null, usr);
});

router.get('/auth/google', passport.authenticate('google',{scope:["profile"]}));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function (req, res) {

var host=req.protocol+"://"+req.get("host")
  console.log("host:"+host)
  console.log("req:"+req.user)
res.redirect(host);
})//get

module.exports = router;
