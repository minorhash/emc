$(window).resize(function () {
var wd=$(window).width();

if(wd>500){

$("#img1").attr("width",900)
    .attr("height",707)


}else if(wd<500){
$("#img1").attr("width",300)
.attr("height",100)

}//else if

if(wd>500){

$("#img2").css("display","block")
$("#img3").css("display","block")


}else if(wd<500){
$("#img2").css("display","none")
$("#img3").css("display","none")

}

console.log(wd)
})
