var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt=require("jsonwebtoken")
var str= require('passport-line-auth').Strategy;
var cnf=require("./prf/lna.json")

router.use(passport.initialize());
router.use(passport.session());
passport.use(new str({
    channelID: cnf.key,
    channelSecret: cnf.sec,
    callbackURL: cnf.cb,
scope: ['profile', 'openid', 'email'],
botPrompt: 'normal'
},
function(accessToken, refreshToken, params,profile, cb) {
var email = jwt.decode(params.id_token)
return cb(null, profile);
console.log("== prof")
console.log(profile)
}
));

passport.serializeUser(function(user, done) {
done(null, user);
});

passport.deserializeUser(function(user, done) {
done(null, user);
});

router.get('/auth/line', passport.authenticate('line',{scope:["profile","openid","email"]}));

router.get('/auth/line/callback',
  passport.authenticate('line', { failureRedirect: '/' }),
  function (req, res) {

var host=req.protocol+"://"+req.get("host")
  console.log("host:"+host)
res.redirect(host);
})//get

module.exports = router;
