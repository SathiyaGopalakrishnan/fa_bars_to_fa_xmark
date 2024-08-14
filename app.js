let btn= document.querySelector(".toggle");
let icon=document.querySelector(".fa-bars");

btn.onclick=function(){
    if (icon.classList.contains("fa-bars")){
console.log("true")
  icon.classList.replace("fa-bars","fa-xmark");
    }
    else{
        console.log("false");
        icon.classList.replace("fa-xmark","fa-bars");
    }
}
