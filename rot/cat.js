var express = require('express');var router = express.Router();
let par=null,sku=0
var usr=null,sess=null,skumer=null

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

const getEma = (req, res, next)=> {
var gses=require("./lib/gema");usr=gses(req.session)
next()};

var logOut=function(req, res, next) {
var logo=require("./lib/logo");logo(req.query.out)
next()}

var chk=function(req, res, next) {
    console.log("== cat==")
    console.log(par)
    if(sess)console.log(sess.soc)
    if(sess)console.log(sess.soc.nam)
    next()}

var cb=function(req, res ) {
var obj={ par:par,mer:skumer,usr:usr};res.render('category',obj);}
var arr=[getPar,getEma,logOut,chk,cb];router.get('/category-:id',arr);
module.exports = router;
