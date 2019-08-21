var arr=["pal","suc","can"]

var farr=function(app){
    for (var i=0;i<arr.length;i++){
        arr[i]=require("../rot/pal/"+arr[i])
        app.use("/",arr[i])
    }
}

module.exports=farr
