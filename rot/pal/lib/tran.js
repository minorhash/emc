module.exports=(red,tran)=>{
tran.amount.details.subtotal =red
tran.amount.details.tax=Math.round(red*.08)
tran.amount.details.shipping=0
tran.amount.total =Math.round(red*1.08)
console.log(tran)
return tran
}
