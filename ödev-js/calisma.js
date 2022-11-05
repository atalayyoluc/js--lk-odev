let ad=prompt("Adınızı Girin")
let adiniz=document.querySelector("#Ad")
adiniz.innerHTML=`Merhaba, ${ad.toUpperCase()}  ! Hoşgeldiniz`
 
function dateDondur(){
let dt=new Date()
let date=document.querySelector("#date");

let hour=dt.getHours();
let min=dt.getMinutes();
let sec=dt.getSeconds();
let day=dt.getDay();
let gun="";
if(day==1){
gun="Pazartesi"
}
else if(day==2){
gun="Salı" 
}
else if(day==3){
gun="Çarşamba"    
}
else if(day==4){
gun="Perşembe"    
}
else if(day==5){
gun="Cuma"
}
else if(day==6){
gun="Cumartesi";
}
else if(day==7){
gun="Pazar"
}

console.log(gun)
date.innerHTML=`${hour}:${min}:${sec}  ${gun}`
}
setInterval(dateDondur, 1000);  

