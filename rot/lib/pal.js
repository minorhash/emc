var sdk= require("paypal-rest-sdk")
var cnf=require("./son/pal.json")
var pson = require("mypal")
var mypal=pson.myPal()
var tran=mypal.transactions[0]

module.exports=function(){
return tran
}//mod

