module.exports=function(mer){
let mypal=require("./pson")();
tran=mypal.transactions[0]

if(mer){
tran.amount.details.subtotal =mer.pri
tran.amount.details.tax=Math.round(mer.pri*.08)
tran.amount.details.shipping=0
tran.amount.total =(Math.round(mer.pri*1.08))
return tran
}else{console.log("==no red")}
}
