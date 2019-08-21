var express = require('express');
var router = express.Router();
var adb=require("usrdb")
var par,email,usr,pss
var mailusr,sess

var getPar=function(req, res, next) {
    par=req.params.id
    sess=req.session
    next()}

const getEma = (req, res, next)=> {
if(req.body){
email =req.body.email
mailusr = adb.mailUsr(email);
if(mailusr){
usr=mailusr.name
sess.usr=usr
}

}else{console.log("no post")}
next()};

const getUsr = function(req, res, next) {
if (sess) {
usr = sess.usr;
} else  {
console.log("no sess")

}next()};

var logOut=function(req, res, next) {
if(req.body.out=="yes"){
sess=null
usr=null
}else{console.log("no out");}
next()}

var chk=function(req, res, next) {
    console.log(par)
    console.log(email)
    console.log(mailusr)
    console.log(usr)
    console.log(sess)
    next()}

var cb=function(req, res) {
var obj={ par:par,usr:usr}
res.render('log',obj);
}
router.post('/log-:id',[getPar,getEma,logOut,chk,cb] );
module.exports = router;
