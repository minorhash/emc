$(window).resize(function () {
var wd=$(window).width();

if(wd>500){

    $(".ex7 #map1").append("<img>",{id:"img1",src:"img/pstudio.png"})
    $(".ex7 #map2").append("<img>",{id:"img2",src:"img/mboxx.png"})

}else if(wd<500){

$(".ex7 p").css("position","relative")
$(".ex7 p").css("width","80%")
$(".ex7 p").css("left","2%")
$(".ex7 p").css("margin","auto")

$("#map1 img").remove()
$("#map2 img").remove()

}//else if

console.log(wd)
})
