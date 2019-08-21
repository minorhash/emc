let d=new Date()
let dt=d.getDate()
let m=d.getMonth()
let y=d.getUTCFullYear()
let ymt=null

if(m<10 && dt<10){
ymd=y.toString()+"0"+m.toString()+"0"+dt.toString()
}else if(m<10 && dt>=10){
ymd=y.toString()+"0"+m.toString()+dt.toString()
}else if(m>=10 && dt<10){
ymd=y.toString()+m.toString()+"0"+dt.toString()
}else if(m>=10 && dt>=10){
ymd=y.toString()+m.toString()+dt.toString()
}

let num=Number(ymt)
// console.log(ymd)
// console.log(num)

const mid="#dat"
const fun=function(){
$(mid).append(num);
}
$(fun)
