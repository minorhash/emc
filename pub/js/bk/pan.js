$(function(){
var pan=$("a").eq(1).attr("aria-expanded")
var top=$("p.gr").css("top")

$("a").eq(1).on("click",function(){

if(pan=="false"){
    pan="true"
    top="60%"
}else{
    pan="false"
    top="20%"
}

console.log(pan)
console.log(top)
$("p.gr").css("top",top)
$("a").eq(1).attr("aria-expanded",pan)

})


})

