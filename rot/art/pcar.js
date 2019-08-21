var express = require('express');
var router = express.Router();
let uni=0,pri=0,sku=0
let skumer=null,ite=null,sar=null,sess=null,usr=null
var col=require("../lib/col")()

const getEma = (req, res, next)=> {
sess=req.session
var gema=require("../lib/gema");usr=gema(sess)
next()};

var logOut=function(req, res, next) {
var logo=require("../lib/logo");logo(req.query.out)
next()}

var posSku=function(req, res, next) {
sess=req.session
console.log(req.body)
sku=req.body.sku
console.log(sku)
var psku=require("../lib/psku");skumer=psku(req.body,sess)
sess.mer=skumer
next()}//pos sku

var chk=function(req, res, next) {
    console.log(col[7],"== p cart")
    if(skumer)console.log(skumer)
    if(sess)console.log(sess.mer)
    if(usr)console.log(usr.id)
    next()}

var cb=function(req, res ,next) {
var obj={usr:usr,mer:skumer}
res.render('cart',obj)}//cb

var arr=[getEma,logOut,posSku,chk,cb]
router.post('/cart',arr );
module.exports = router;
