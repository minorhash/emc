var express = require('express');
var router = express.Router();
var db=require("merdb")
let par=null
let sku=0,uni=0,red=0,sum=0
let skumer=null,ite=null
// sar==sess.arr
let sar=null,sess=null,usr=null

const getEma = (req, res, next)=> {
if(req.session){
sess=req.session
sar=sess.sar

if(sess.passport){
usr=sess.passport.user
}else{console.log("no pass")}

console.log(sess)
}else{console.log("no sess")}
next()};

var posSku=function(req, res, next) {
sar=[]
if(req.body){
sku=req.body.sku
uni=req.body.uni
skumer=db.skuMer(sku)
ite={sku:null,pri:null}
if(sku){
    ite.sku=sku
    ite.pri=skumer.pri
    console.log(ite)
}else{console.log("no sku")}

}else{console.log("no body")}

if(sess){
sar.push(ite)
}else{
console.log("=== no sar")
//sess.sar=sar
}

//sst=JSON.stringify(sar)
// if(email){
// try{adb.inTmp(email,sst)}
// catch(err){console.log(err)}
// }

//res.redirect("cart")
next()}//pos sku

var getSum=function(req, res, next) {
console.log("==get sum")
    sum=[]
    for(var i=0;i<sar.length;i++){
sum.push(sar[i].pri)
}
if(sum.length!==0){
red=sum.reduce(function(total, num){ return total + num });
sess.red=red

}else{console.log("no sum")}
next()}//get sum

var chk=function(req, res, next) {
    console.log("==p cart")
    console.log(sku)
    console.log(sar)
    console.log(sess)
    next()}

var cb=function(req, res ,next) {
var obj={ par:par,usr:usr,sku:sku,mer:skumer,sar:sar,red:red}
res.render('cart',obj)}//cb

var arr=[getEma,posSku,getSum,chk,cb]
router.post('/cart',arr );
module.exports = router;
