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
if(req.session){
sess=req.session
usr=sess.usr
if(usr){
email=usr.email
}else{
usr=null
console.log("no usr")}
}else if(req.body){
usr=req.body.email

sess.usr=usr
console.log("no sess")}
next()};

var chk=function(req, res, next) {
console.log(par)
console.log("sess:"+sess)
next()}

var cb=function(req, res) {
var obj={ par:par,usr:usr}
res.render('log',obj);}

var arr=[getPar,getEma,chk,cb]
router.get('/log-:id',arr);
module.exports = router;
