let main=document.querySelector(".main");
let btn=document.getElementById("submit");
let thanks=document.querySelector(".thanks");
let rating=document.querySelector("#rating");
let buttons=document.querySelectorAll("li");
btn.addEventListener("click",()=>{
       thanks.classList.remove("hidden");
       main.style.display="none";
})

buttons.forEach((bton)=>{
       bton.addEventListener("click",()=>{
              rating.innerHTML=bton.innerHTML;
              rating.style.fontSize="10px";
              // rating.style.backgroundColor="inherit";
              rating.style.color="hsl(25, 97%, 53%)";
       })
})