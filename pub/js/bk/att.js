$(function () {
var att= $(".burger").attr("aria-expanded")

if(att==false){

$(".gr").css("top","10%")

}else {
$(".gr").css("top","50%")
console.log("pan:"+att)

}//else if

})
