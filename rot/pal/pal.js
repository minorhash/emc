var express = require('express');
var router = express.Router();
var cn=require("console")
var par=null,sess=null,sar=null
var usr=null,mer=null,red=0,tax=0,sum=0

const getEma = (req, res, next)=> {
console.log("== get ema ==")
sess=req.session
var gema=require("../lib/gema");usr=gema(req.session)
mer=sess.mer
next()};

var logOut=function(req, res, next) {
var logo=require("../lib/logo");logo(req.query.out)
next()}

var gTra=function(req, res, next) {
console.log("== get pal==")
mypal=require("./lib/mypal")
tran=mypal.transactions[0]
sum=require("./lib/sum")
if(mer)sum(mer.pri,tran)
next()}

var putIte=function(req, res, next) {
var ite=require("./lib/ite")(tran,mer)
next()}

var chk=function(req, res, next) {
cn.log("==pal chk==")
cn.log(tran)
if(tran)cn.log(tran.item_list)
next()}

var crPal = function(req, res) {
var sdk=require("./lib/sdk")
var pal=function(usr,sdk,mypal){
if(usr){
sdk.payment.create(mypal, function(err, pay) {
    if(err){
cn.log(err.response.details)
       res.redirect("cancel")
}else{
cn.log(pay.links[1].href)
res.redirect(pay.links[1].href)
} //else
})//create
}else{res.redirect("/")}//usr
}//fun

pal(usr,sdk,mypal)
}//cr pal

var cb=function(req, res ) {
    var obj={par:par, sar:sar,usr:usr,mer:mer,tran:tran};
    res.render('paypal',obj);}
var arr=[getEma,gTra,putIte,chk,crPal];router.get('/paypal',arr)
module.exports = router;
