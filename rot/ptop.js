var express = require('express');
var router = express.Router();
var db=require("merdb")
var mer,sess,usr
var ema,pss

const getEma = (req, res, next)=> {

if(req.session ){
sess=req.session

if(sess.passport){
usr=sess.passport.user
}else{console.log("no pass")}
}else{console.log("no sess")}
next()};

const getUsr = (req, res, next)=> {
if(req.body){
ema=req.body.email
pss=req.body.pss
}

next()};


var getIte=function(req, res, next) {
    mer=db.allMer()
    next()}

var logOut=function(req, res, next) {
if(req.body.out=="yes"){
sess=null
usr=null
}else{console.log("no out");}
next()}

var chk=function(req, res, next) {
console.log("=== chk")
console.log(usr)
console.log(ema)
next()}

var cb=function(req, res ) {
    var obj={ mer:mer,usr:usr}
res.render('index',obj);}//cb

var arr=[getEma,getUsr,logOut,chk,cb];
router.post('/',arr)
module.exports = router;
