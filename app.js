var express = require("express");
var app = express();

var ini=require("./lib/ini");ini(app,express)
var pat=require("./lib/pat");pat(app,express)
var i18=require("./lib/i18");i18(app,express)
var ses=require("./lib/ses");ses(app,express)

var rot=require("./lib/rot");rot(app,express)
var rot=require("./lib/art");rot(app,express)
var pal=require("./lib/pal");pal(app,express)

var soc=require("./lib/soc");soc(app,express)

module.exports = app;

