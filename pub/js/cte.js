$(window).resize(function () {
var wd=$(window).width();

if(wd>500){

$("#gor1").css("display","block")

}else if(wd<500){
$("#gor1").css("display","none")

}

console.log(wd)
})

