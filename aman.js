// console.log("aman")

let hour=document.getElementById("hour");
let second=document.getElementById("second");
let music=new Audio("ting.mp3");
let minute=document.getElementById("minute");

function rotate(){

let date =new Date();
let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();
let hr=30*h + m/2;
let sr=6*s;
let mr=6*m;
$("#hour").css("transform",`rotate(${hr}deg)`);
$("#second").css("transform",`rotate(${sr}deg)`);
$("#minute").css("transform",`rotate(${mr}deg)`);


console.log(sr);
if(sr%360==0){
music.play();}


}

setInterval("rotate()",1000);

