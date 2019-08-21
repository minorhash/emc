var cld=require("cloudinary")
var cnf=require("./cnf/cld")
//console.log(cnf)

cld.config({
cloud_name:cnf.nam,
api_key:cnf.key,
api_secret:cnf.sec
})

var ls=require("ls")
var dir='../../pub/img/'
var imgArr=[]

// for (let file of ls(dir+"*.png")) {
// imgArr.push(file.name)
// }
imgArr=["mboxx4","pstudio4"]
console.log(imgArr)

for(let i=0;i<imgArr.length;i++){
cld.v2.uploader.upload(dir+imgArr[i]+".png",
function(err, res) {console.log(res, err)});
}
