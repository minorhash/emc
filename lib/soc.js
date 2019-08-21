var soc=function(app){

var arr=["ln","fb","tw"]
for (var i=0;i<arr.length;i++){
arr[i]= require("../rot/soc/"+arr[i]);
app.use("/", arr[i]);
}
}

module.exports=soc
