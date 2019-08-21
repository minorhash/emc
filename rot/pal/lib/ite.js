var ite={name:null,sku:null,quantity:null,price:null,currency: "JPY"}
module.exports=function(tran,mer){
if(tran)tran.item_list.items=[]
if(mer){
        ite.name=mer.tit
        ite.sku=mer.sku
        ite.price=mer.pri
 tax=Math.round(mer.pri*.08)
        ite.tax=tax
       ite.quantity=1
tran.item_list.items.push(ite)
return tran
}else{console.log("==no mer")}
}//mod
