var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require('morgan');
var fav= require('express-favicon');

var ini=function(app,exp){
app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));
    app.use(fav(__dirname+"../pub/favicon.ico"))
}

module.exports=ini
