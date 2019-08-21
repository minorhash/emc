var arr=["index","mypage","ptop","cat","gcar","pcar"]

var farr=function(app){
    for (var i=0;i<arr.length;i++){
        arr[i]=require("../rot/"+arr[i])
        app.use("/",arr[i])
    }
}

module.exports=farr
