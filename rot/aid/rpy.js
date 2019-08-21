var express = require('express');
var router = express.Router();
let par=null,sum=null,red=null,email=null,usr=null
let sess=null,sar=null,adr=null
const adb=require("usrdb")
var cnf= require('./son/rpy.json');
var pub=cnf.pub;

const getEma = (req, res, next)=> {
if(req.session ){
sess=req.session

if(sess.passport){
usr=sess.passport.user
}else{console.log("no pass")}

console.log(sess)
}else{console.log("no sess")}
next()};

var getSum=function(req, res, next) {
if(sess){
red=sess.red
}else{
console.log("get sum")
}
next()}

var getAdr=function(req, res, next) {
adr=adb.emaAdr(email)
next()}

var logOut=function(req, res, next) {
if(req.query.out=="yes"){
console.log(req.query)
sess=null
usr=null
}else{console.log("no out");}
next()}

var chk=function(req, res, next) {
    console.log("=== rpay")
    console.log(red)
    console.log(email)
    console.log(sess)
    next()}

var cb=function(req, res ) {
var obj={par:par, sar:sar,usr:usr,pub:pub,sum:red}
res.render('rpay',obj);}
router.get('/rpay',[getEma,getSum,logOut,chk,cb] );
module.exports = router;
