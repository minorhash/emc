module.exports=function(){
let red='\x1b[31m%s\x1b[0m'
let gr= '\x1b[32m%s\x1b[0m'
let yel='\x1b[33m%s\x1b[0m'
let bl= '\x1b[34m%s\x1b[0m'
let mag='\x1b[35m%s\x1b[0m'
let cyn='\x1b[36m%s\x1b[0m'

let brd='\x1b[41m%s\x1b[0m'
let bgr='\x1b[42m%s\x1b[0m'
let byl='\x1b[43m%s\x1b[0m'
let bbl='\x1b[44m%s\x1b[0m'
let bmg='\x1b[45m%s\x1b[0m'
let bcy='\x1b[46m%s\x1b[0m'

var col=[red,gr,yel,bl,mag,cyn,brd,bgr,byl,bbl,bmg,bcy]
return col
}
