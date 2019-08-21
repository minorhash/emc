var db=require("merdb")
module.exports=function(rbod,sess){
    console.log("== psku")
if(rbod){
let sku=rbod.sku
    console.log(sku)
try{
mer=db.skuMer(sku)
    console.log(mer)
if(sess){
sess.mer=mer
}else{console.log("=== no pri")}
}catch(err){console.log(err)}

return mer

}else{console.log("== no bod")}
}//fun
