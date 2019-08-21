var express = require('express');
var router = express.Router();
var usr

const getEma = (req, res, next)=> {
if(req.session ){
sess=req.session
usr=sess.passport.user.username

}else{console.log("no sess")}
next()};

const chk= (req, res, next)=> {
console.log(usr)
next()};

/* GET users listing. */

var cb=function(req, res, next) {
if(sess.passport){
  res.render('usr', { name: sess.passport.user.displayName,usr:usr });
  }else{

  res.render('usr', { name: "no name",usr:usr });
  }
}//cb
router.get('/',[getEma,chk,cb] );

module.exports = router;
