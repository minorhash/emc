$(window).resize(function () {
var wd=$(window).width();

if(wd>500){

$(".gr").css("top","50%")
    .css("left","70%")
.css("font-size","5em")

}else if(wd<500){
$(".gr").css("top","50%")
    .css("left","50%")
.css("font-size","2em")

}//else if

console.log(wd)
})
