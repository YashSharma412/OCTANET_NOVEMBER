const closeBtn = document.getElementById("close_Btn");
const mobile_nav = document.getElementById("nav__mobile");
const menu_open = document.getElementById("nav_menu");

closeBtn.addEventListener('click', (event)=>{
    event.stopPropagation();
  console.log("close btn");
  mobile_nav.style.display = "none";
})

console.log(menu_open);
menu_open.addEventListener('click', ()=>{
    mobile_nav.style.display = "flex";
})