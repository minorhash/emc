var express = require('express');
var router = express.Router();
let par=null,sum=null,red=null,email=null,usr=null
let sess=null,sar=null,adr=null
const adb=require("usrdb")
var cnf= require('./son/aid.json');
var pub=cnf.pub;
//var pub=cnf.pkl;
const getEma = (req, res, next)=> {
console.log("== get ema ==")
sess=req.session
var gema=require("../lib/gema");usr=gema(req.session)
mer=sess.mer
console.log(mer)
next()};

var getSum=function(req, res, next) {
if(sar){
    sum=[]
    for(var i=0;i<sar.length;i++){
sum.push(sar[i].pri*sar[i].uni)
}
if(sum.length!==0){
red=sum.reduce(function(total, num){ return total + num });
}else{console.log("no sum")}
}else{console.log("==no sar")}
next()}

var chk=function(req, res, next) {
    console.log("=== aid")
    console.log(red)
    console.log(sess)
    next()}

var cb=function(req, res ) {
var obj={par:par, sar:sar,usr:usr,pub:pub,sum:red,adr:adr}
res.render('paidy',obj);}
router.get('/paidy',[getEma,getSum,chk,cb] );
module.exports = router;
