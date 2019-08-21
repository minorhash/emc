var db=require("scldb")
var namscl

module.exports=function(usr,nam){
if(usr){
    try{namscl=db.namScl(nam)
   return namscl
    }catch(e){console.log(e)}

}else{console.log("no usr")}

}
