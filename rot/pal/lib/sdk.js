var sdk= require("paypal-rest-sdk")
var pal = require("mypal")
var mypal = pal.myPal()
var cnf=require("../son/pal.json")
sdk.configure({
  mode: cnf.sand,
  client_id:cnf.tid,
  client_secret:cnf.tsc
});

module.exports=sdk
