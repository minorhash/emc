var but=$("button.navbar-toggler")
var exp=but.attr("aria-expanded")

$(function(){

console.log(exp)

but.click(function(){

if(exp==false){
exp=true
$(".gr").html("artist<br>camp")
$(".gr").fadeIn()
}else{
exp=false
$(".gr").fadeOut()

}
console.log(exp)

})
})
