var express = require('express');
var router = express.Router();
var usr

const getEma = (req, res, next)=> {
if(req.session ){
sess=req.session
if(sess.passport ){
usr=sess.passport.user
}else{
res.redirect("/")
}

}else{console.log("no sess")}
next()};

const chk= (req, res, next)=> {
console.log("=== chk===")
console.log(usr)
next()};

/* GET users listing. */

var cb=function(req, res, next) {
if(sess.passport){
  res.render('usr', {usr:usr });
  }else{

  res.render('usr', {usr:null});
  }
}//cb
router.get('/',[getEma,chk,cb] );

module.exports = router;
