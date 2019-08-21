var express = require('express');
var router = express.Router();

var prv="twitter"
var str= require('passport-twitter').Strategy;
var cnf=require("./prf/tw.json")
var key={
    consumerKey: cnf.key,
    consumerSecret: cnf.sec,
    callbackURL: cnf.cb,
userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"
}
var psp=require("./lib/psp");psp(router,str,prv,key)

module.exports = router;
