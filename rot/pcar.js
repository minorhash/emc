var express = require('express');
var router = express.Router();
let uni=0,pri=0,sku=0
let skumer=null,ite=null,sar=null,sess=null,usr=null
var col=require("./lib/col")()

const getEma = (req, res, next)=> {
sess=req.session
var gses=require("./lib/gema");usr=gses(sess)
next()};

var logOut=function(req, res, next) {
var logo=require("./lib/logo");logo(req.query.out)
next()}

var posSku=function(req, res, next) {
sess=req.session
sku=req.body.sku
var psku=require("./lib/psku");skumer=psku(req.body,sess)
sess.mer=skumer
next()}//pos sku

var getSku=function(req, res, next) {
var gsku=require("./lib/gsku");skumer=gsku(sess)
next()}

var chk=function(req, res, next) {
    console.log("=== p cart")
    if(sess)console.log(sess.mer)
    sess.soc?console.log(sess.soc):console.log("== no soc")
    if(usr)console.log("usr id:"+usr.id)
    next()}

var cb=function(req, res ,next) {
var obj={usr:usr,mer:skumer}
res.render('cart',obj)}//cb
var arr=[getEma,logOut,posSku,getSku,chk,cb]
router.post('/cart',arr );
module.exports = router;
