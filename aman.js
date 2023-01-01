let box=document.getElementsByClassName("box");
let xx='x';
let aman=new Audio("ting.mp3");
document.getElementsByClassName("info")[0].innerText="Turn Of X";
console.log(document.getElementsByClassName("info")[0].innerText)
// console.log(document.getElementsByClassName("info").innerText)
function turn(){
    if(xx=='x'){
        xx='o'
    //  return xx;
    }
    else{
        xx='x';
        // return xx;

    }
}
let stepp=0;
let gameover=false;

let win=[[0,1,2,26,-104,180],[3,4,5, 26,-301,180],[6,7,8,26 ,-509,180],[0,3,6,321,218,90],[1,4,7,287,21,90],[2,5,8,290,-181,90],[0,4,8,227,224,45],[2,4,6,229,-198,136]];
// win.forEach(element => {
//     console.log(element);
//     console.log(element[0]);
// });
let draw=true;
let isgameover=false;
let newline=$(".line");


function checkwin(){
    let boxtext=document.getElementsByClassName("boxtext");
    //console.log(boxtext[0].innerText+"  ->");
    win.forEach(e => {
        // console.log(boxtext[e[0]].innerText +" "+boxtext[e[1]].innerText+" "+boxtext[2].innerText);
        if (boxtext[e[0]].innerText===boxtext[e[1]].innerText&& boxtext[e[1]].innerText===boxtext[e[2]].innerText && boxtext[e[1]].innerText!=='') {
            document.getElementsByClassName("info")[0].innerText=`${boxtext[e[0]].innerText}  wins`;
          $(".line").css({"transform":`rotate(${e[5]}deg) translate(${e[3]}px,${e[4]}px)`,"height":"18px"});
          aman.src="gameover.mp3";
    aman.play();
                                 
            
        //  console.log(   document.getElementsByClassName("info")[0].innerText);
          
            $(".imgboc img").css("width","125px");
            console.log("gameover");
            // console.log(boxtext[e[0]]);
           draw=false;
           gameover=true;


        }

    });
}


let q=$("#reset").click(()=>{
    window.location.reload(true);

});
// q.addEventListener("click",()=>{


// })
Array.from(box).forEach(element=>{
let boxtext=element.querySelector(".boxtext");

   element.addEventListener("click",()=>{
  


if(boxtext.innerText===''){
    boxtext.innerText=xx;
    stepp++;
    // console.log(stepp);
    aman.play();
    turn();
    checkwin();
    // console.log(document.getElementsByClassName("info")[0].innerText)
    if(!gameover){
    document.getElementsByClassName("info")[0].innerText=`Turn Of  `;
    $(".info").append(`<u><b>${xx}</b></u>`);

}
if(draw&& stepp>=9){

    document.getElementsByClassName("info")[0].innerText="DRAW";
}

    // console.log("amandeep");

    
}
         

    

   })
})




// let boxx=document.getElementsByClassName("boxtext");
// console.log(boxx);
// console.log(boxx[0].innerText);
// console.log("helloamandeepsharma")