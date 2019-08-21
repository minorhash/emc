var express = require('express'),router = express.Router();
var mer,sess,usr,lang,namsoc
var db=require("scldb")

const getEma = (req, res, next)=> {
sess=req.session
var gema=require("./lib/gema");usr=gema(sess)
if(usr){var aut=require("./lib/auth");
aut(usr,usr.username);
}else{
console.log("=== no usr")}
next()};

var logOut=function(req, res, next) {
var logo=require("./lib/logo");logo(req.query.out)
next()}

var gUa=function(req,res,next){
lang=(req.headers["accept-language"].split(",")[1]).split(";")[0]
console.log(lang)
next()}

var chk=function(req, res, next) {
if(usr)namsoc=db.namSoc(usr.username)
sess.soc=namsoc
console.log(namsoc)

console.log("=== top chk")
if(usr) console.log(usr.id)
console.log(req.hostname+req.originalUrl)
next()}

var cb=function(req, res ) {var obj={ mer:mer,usr:usr,lang:lang}
    res.render('index',obj);}//cb

var arr=[getEma,logOut,gUa,chk,cb];
router.get('/',arr)
module.exports = router;
