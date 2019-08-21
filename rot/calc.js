var express = require('express');
var router = express.Router();
var db=require("merdb")
var mer,sess,usr

const getEma = (req, res, next)=> {
if(req.session ){
sess=req.session
usr=sess.usr
console.log(sess)
}else{console.log("no sess")}
next()};

var getIte=function(req, res, next) {
    mer=db.allMer()
    next()}

var chk=function(req, res, next) {
console.log(usr)
    next()}

var cb=function(req, res ) {
    var obj={ mer:mer,usr:usr}
    res.render('calc',obj);}//cb

var arr=[getEma,getIte,chk,cb];
router.get('/calc',arr)
module.exports = router;
