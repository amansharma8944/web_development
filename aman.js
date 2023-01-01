// let tt=true;
let tt;
let jump=document.querySelector(".player");
let jumpbool=true;
let asdf=document.getElementsByClassName("gameover");


let dragon=document.querySelector(".dragon"); // dragon

dragon.classList.add("move");


let aman=100;

document.onkeydown=(e)=>{
    // console.log(e.which);
    if (e.which==38 ) {
    jump.classList.add("jumpp");
    setTimeout(() => {
        jump.classList.remove("jumpp");
        
    }, 500);
    }
  if (e.which==39) {


let jumpx=parseInt(window.getComputedStyle(jump).getPropertyValue("left"));
console.log(jumpx);
if (jumpx>1200) {
    
  
    // console.log("hello");
}
else{
    jump.style.left=jumpx+120+"px";
}



// jump.style.left=jumpx+110+"px";

}
  if (e.which==37) {


let jumpx=parseInt(window.getComputedStyle(jump).getPropertyValue("left"));
if (jumpx<=0) {
    
    jump.style.left=jumpx+"px";
}
else{
    jump.style.left=jumpx-120+"px";
}



}
}

let xx=parseInt(window.getComputedStyle(jump).getPropertyValue("left"));
setInterval(()=>{
    let xx=parseInt(window.getComputedStyle(jump).getPropertyValue("left"));

},1000)


let idd=setInterval(() => {
    let xx=parseInt(window.getComputedStyle(jump).getPropertyValue("left"));
    let yy=parseInt(window.getComputedStyle(jump).getPropertyValue("bottom"));
    let ox=parseInt(window.getComputedStyle(dragon).getPropertyValue("left"));
    let oy=parseInt(window.getComputedStyle(dragon).getPropertyValue("bottom"));
// console.log(xx,ox);
// console.log(yy,oy);
let offsetx=Math.abs(ox-xx);
let offsety=Math.abs(yy-oy);
// console.log("offsety  "+offsety);

if(offsety<100 && offsetx<100 )
{
    console.log("gameover");
    asdf[0].style.visibility="visible";


// clearTimeout(idd);
dragon.classList.remove("move");


}


}, 1);
let score=0;

let scoore=document.getElementsByClassName("score");

// console.log(scoore);



setInterval(()=>{
    let ox=parseInt(window.getComputedStyle(dragon).getPropertyValue("left"));
    
    if (ox<-200 && tt ) {
        score++;
        tt=false;
    }

scoore[0].innerHTML="YOUR SCORE IS "+score;





},100);


// let tt=true;
setInterval(() => {
 tt=true;   
}, 1000);