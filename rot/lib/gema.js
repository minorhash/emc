module.exports=function(rss){
if(rss){
sess=rss
if(sess.passport){
usr=sess.passport.user
return usr
}
}else{console.log("no sess")}
}//fun

