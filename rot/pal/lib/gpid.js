module.exports=(reqq,pri)=>{
pid = reqq.paymentId
payid = reqq.PayerID
var det={subtotal:null,tax:null,shipping:null}
    det.subtotal=pri
    det.tax=Math.round(pri*.08)
    det.shipping=0
    sum=pri*1.08
payJson= {
payer_id: payid,
transactions: [{amount: {currency: "JPY",total: sum,details:det}}],
}
return payJson
}
