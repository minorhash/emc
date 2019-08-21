var express = require('express');
var router = express.Router();
var adb=require("usrdb")
var par=null,email=null,usr=null,sku=null
var sess=null,pid=null,pal=null
var fav=null,mer=null,fst=null,fst2=null,fav3=null

var getPar=function(req, res, next) {
par=req.params.id
next()}

const getEma = (req, res, next)=> {
if(req.session ){
sess=req.session

if(sess.passport){
usr=sess.passport.user
}else{console.log("no pass")}

console.log(sess)
}else{console.log("no sess")}
next()};

var logOut=function(req, res, next) {
if(req.query.out=="yes"){
sess=null
usr=null
}else{console.log("no out");}
next()}

var chk=function(req, res, next) {
console.log("== log get==")
console.log(par)
console.log("sess:"+sess)
next()}

var cb=function(req, res) {
var obj={ par:par,usr:usr}
res.render('log',obj);}

var arr=[getPar,getEma,logOut,chk,cb]
router.get('/log-:id',arr);
module.exports = router;
