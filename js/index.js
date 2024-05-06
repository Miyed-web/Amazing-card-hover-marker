let marker = document.querySelector(".marker");
let item= document.querySelectorAll(".card");
function indicator(e){
  marker.style.left = e.offsetLeft+"px";
  marker.style.top = e.offsetTop+"px";
}
item.forEach(i=>{
  i.addEventListener("touchmove",(e) =>{
    indicator(e.target)
  })
i.addEventListener("click",(e) =>{
    indicator(e.target)
  })
  i.addEventListener("touchstart",(e) =>{
    indicator(e.target)
  })
})