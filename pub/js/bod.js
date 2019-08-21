$("body").append("<div id=cnt></div>")

var cnt=$("#cnt")
cnt.addClass("container-fluid")
cnt.append("<div id=row></div>")
var row=$("#row")
row.append("<div id=col1></div>")
var col1=$("#col1")

col1.after("<div id=col2></div>")
var col2=$("#col2")

col1.append("<p id=dud>dude</p>")
$("p#dud").addClass("bg-info p-2")

