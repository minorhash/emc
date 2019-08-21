var db=require("scldb")
var namsoc

module.exports=function(usr,nam){
if(usr){

try{
db.insSoc(usr.id,usr.provider,usr.username,usr.displayName)
}catch(e){}

try{
db.insDet(usr.id,usr.photos[0].value,usr._json.email,usr._json.description)
}catch(e){}

console.log(usr.username)
console.log(usr.provider)
try{namsoc=db.namSoc(nam)}catch(e){}
if(!namsoc){

if(usr.provider=="twitter"){
db.insSoc(usr.id,usr.provider,usr.username,usr.displayName)
db.insDet(id,usr.photos[0].value,usr._json.email,usr._json.description)

}else if(usr.provider=="facebook"){
db.insSoc(usr.id,usr.name.familyName,usr.givenName)

}else if(usr.provider=="google"){
db.insSoc(usr.id,usr.nam,usr.dis)
}

}else{
namsoc=db.namSoc(nam)
console.log("exist!")}
return namsoc

}else{console.log("no usr")}
}//exp
