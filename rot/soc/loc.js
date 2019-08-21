var express = require('express');
var router = express.Router();
var passport = require('passport');
var str= require('passport-local').Strategy;

router.use(passport.initialize());
router.use(passport.session());
// var usr= require("../index");
// router.use('/', usr);

passport.use(new str(
function(usr,pss, cb) {

var uobj = {id:"min", ema:"minorhash@gmail.com",pss:"min"};

if(usr===uobj.ema && pss===uobj.pss){
return done(null, true);
}else{
return done(null, false, { message: 'log failed' });
}
}
));

// passport.serializeUser(function(usr, done) {
//   done(null, usr);
// });
// passport.deserializeUser(function(usr, done) {
//   done(null, usr);
// });

//router.get('/auth/facebook', passport.authenticate('facebook',{scope:["email"]}));

router.post('/',
  passport.authenticate('local', { failureRedirect: '/' }),
  function (req, res) {

var host=req.protocol+"://"+req.get("host")
  console.log("host:"+host)
  console.log("req:"+req.user)
res.redirect(host);
})//get

module.exports = router;
