const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const navMenu = document.getElementById("nav-menu");

const doc = document


doc.addEventListener('scroll',(e)=>{
    navMenu.classList.remove('show-menu')
})



menuToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
})
menuClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
})