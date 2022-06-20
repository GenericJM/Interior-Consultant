
"use strict"
const  menu=document.querySelector(".fa-bars");
const  responsiveUl=document.querySelector(".header__ul");

const mq=matchMedia("(max-width: 650px)")
if(mq.matches){
  responsiveUl.hidden=true;
}
mq.addEventListener("change", ()=>{
    if(mq.matches) {
        responsiveUl.hidden=true;
    }
    else{ 
        responsiveUl.removeAttribute("hidden");
        menu.classList.replace("fa-xmark","fa-bars");
    };
});
menu.addEventListener("click",()=>{
    if(responsiveUl.hidden){
        responsiveUl.removeAttribute("hidden");
        menu.classList.replace("fa-bars","fa-xmark");
    }else{
        responsiveUl.hidden=true;
        menu.classList.replace("fa-xmark","fa-bars");
    }
    
})

