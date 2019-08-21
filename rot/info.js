var express = require('express'),router = express.Router();
var mer,sess,usr,lang
var col=require("./lib/col")

const getEma = (req, res, next)=> {
sess=req.session
var gses=require("./lib/gema");usr=gses(sess)
next()};

var logOut=function(req, res, next) {
var logo=require("./lib/logo");logo(req.query.out)
next()}

var gUa=function(req,res,next){
lang=(req.headers["accept-language"].split(",")[1]).split(";")[0]
console.log(lang)
next()}

var chk=function(req, res, next) {
console.log(sess)
console.log(col()[7],col().length)
console.log(col()[6],"=== top chk")
if(usr) console.log(col()[7],usr.id)
console.log(req.hostname+req.originalUrl)
next()}

var cb=function(req, res ) {var obj={ mer:mer,usr:usr,lang:lang}
    res.render('info',obj);}//cb

var arr=[getEma,logOut,gUa,chk,cb];
router.get('/info',arr)
module.exports = router;
