$(function () {
$("p").eq(0).addClass("gr")
$(".gr").css("font-size","5em")
$(".gr").css("top","50%")
    $(".gr").html("artist<br>camp")
var top=$(".gr").css("top")
var siz=$(".gr").css("font-size")
var fam=$(".gr").css("font-family")
console.log(top+", "+siz+","+fam)
})

