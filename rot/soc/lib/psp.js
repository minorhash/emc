var pst= require('passport');
var psp=function(rt,sgy,prv,key){

rt.use(pst.initialize());
rt.use(pst.session());

pst.use(new sgy(key,
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);


}
));

pst.serializeUser(function(usr, done) {
  done(null, usr);
});
pst.deserializeUser(function(usr, done) {
  done(null, usr);
});

rt.get('/auth/'+prv, pst.authenticate(prv));

rt.get('/auth/'+prv+'/callback',
  pst.authenticate(prv, { failureRedirect: '/' }),
  function (req, res) {
console.log(req.hostname+":"+req.socket.localPort+req.originalUrl)
//res.redirect(req.hostname+":"+req.socket.localPort+req.originalUrl);
res.redirect("/")
});

}//fun

module.exports=psp
