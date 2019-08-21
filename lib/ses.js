var es = require('express-session');

var ses=function(app){
app.use(es({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie:{
  httpOnly: true,
  secure: false,
  maxage: 1000 * 60 * 30
  }
}));
}

module.exports=ses
