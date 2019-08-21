var express = require('express');
var router = express.Router();
var db=require("scldb")
var mer,sess,usr,gpal,nam

const getEma = (req, res, next)=> {
sess=req.session
var gema=require("./lib/gema");usr=gema(sess)
    sess?soc=sess.soc:console.log("== no sess")
next()};

var gPal=function(req, res, next) {
    sess.soc?nam=sess.soc.nam:console.log("== no sess")
    try{gpal=db.getPal(nam)}catch(e){    }
    next()}

var chk=function(req, res, next) {
console.log(sess)
    next()}

var cb=function(req, res ) {
    var obj={ mer:mer,soc:soc,usr:usr}
    res.render('mypage',obj);}//cb

var arr=[getEma,gPal,chk,cb];
router.get('/mypage',arr)
module.exports = router;
