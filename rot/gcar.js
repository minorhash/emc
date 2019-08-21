var express = require('express'),router = express.Router();
let par=null,sku=0,skumer=null,rsku=0,rset=0
let sess=null,sar=null,usr=null

const getEma = (req, res, next)=> {
sess=req.session
var gses=require("./lib/gema");usr=gses(sess)
next()};

var logOut=function(req, res, next) {
var logo=require("./lib/logo");logo(req.query.out)
next()}

var getSku=function(req, res, next) {
var gsku=require("./lib/gsku");skumer=gsku(sess)
next()}

var chk=function(req, res, next) {console.log("== gcar");
if(usr)console.log(usr.id)
if(sess)console.log(sess.mer)
if(skumer)console.log(skumer)
if(sess.soc)console.log(sess.soc)
next()}
var cb=function(req, res ) {
var obj={ par:par,sku:sku,usr:usr,mer:skumer}
    res.render('cart',obj);}
var arr=[getEma,getSku,chk,cb];router.get('/cart',arr);
module.exports = router;
