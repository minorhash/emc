var express = require("express")
var router = express.Router()
var paypal = require("paypal-rest-sdk")
// === db
var adb = require("scldb")

var sess=undefined,sar=undefined
var usr=undefined,email=undefined,name=undefined
var pid=undefined,payid=undefined,exeJson=undefined
var red=0,sum=0
var suma=undefined,item=undefined,ist=undefined

var sdk=require("./lib/sdk")
// === get
const getEma = (req, res, next)=> {
sess=req.session
var gses=require("../lib/gema");usr=gses(req.session)
mer=sess.mer
next()};

var getPid= function(req, res, next) {
    var payj=require("./lib/gpid")
payj(req.query,mer.pri)
// console.log("=== get pid===")
// pid = req.query.paymentId
// payid = req.query.PayerID
// var det={subtotal:null,tax:null,shipping:null}
//     det.subtotal=mer.pri
//     det.tax=Math.round(mer.pri*.08)
//     det.shipping=0
//     sum=mer.pri*1.08
// exeJson = {
// payer_id: payid,
// transactions: [{amount: {currency: "JPY",total: sum,details:det}}],
// }
// console.log(sum)
// console.log(det)
next()}

// var getSum=function(req, res, next) {
// if(sar){
// suma=[]
// for(var i=0;i<sar.length;i++){
// suma.push(sar[i].pri*sar[i].uni)
// }
// if(suma.length!==0){
// red=suma.reduce(function(total, num){ return total + num });
// sum=Math.round(red*1.08)+650
//     console.log("=== sum")
//     console.log(sum)

// }else{console.log("no suma")}
// }else{console.log("no sar")}
// next()}

var exePal= function(req, res,next) {
console.log("=== exe pal ===")
var utc = new Date().toJSON().slice(0,10)

paypal.payment.execute(pid, exeJson, function(err, pay) {
if (err) {console.log("=== exe fail");
console.log(err.response.details)
//res.redirect("cancel")
}else {
console.log("=== suc===")
item=    pay.transactions[0].item_list.items
ist=    JSON.stringify(pay.transactions[0].item_list.items)

//if(usr)    try{adb.insPal(usr.name,pay.id,sum,ist,utc)}    catch(er){console.log(e);return}
name=sess.soc.nam
try{adb.insPal(name,pay.id,sum,ist,utc)}    catch(e){console.log(e);return}
if(pay)console.log(pay)
console.log(pay.id)
console.log(item)
console.log(ist)

}//else
})//exec
next()}//exePal

var senEma = function(req, res, next) {
console.log('=== senEma =======================================');
    var ua=req.acceptsLanguages("en")
    var mail=require("./js/mpal.js");
    try{mail(email,pal,ua)}
    catch(err){console.log(err)}
next()};

var chk= function(req, res, next) {
console.log("=== suc ===")
if(usr)console.log(usr.id)
if(usr)console.log(usr.nam)
next()}

var cb= function(req, res, next) {
var obj={usr:usr,title:"buyer",pid: pid,payid:payid,item:item,red:red}
res.render("success",obj)}

var arr=[getEma,getPid,chk,exePal,cb]
router.get("/success", arr)
module.exports = router
