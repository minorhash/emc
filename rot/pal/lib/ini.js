var express = require('express');
var router = express.Router();
var cn=require("console")
var par=null,sess=null,sar=null
var usr=null,mer=null,red=0,tax=0,sum=0
// pal
var mypal=require("./mypal")
var tran=mypal.transactions[0]
var sdk=require("./sdk")

