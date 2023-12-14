const menu = document.querySelector(".menu");
const navBar = document.querySelector("nav");

menu.addEventListener("click", ()=>{
    navBar.classList.toggle("hidden");
});



const navLinks = document.querySelectorAll(".hidden a");
const currentPath = window.location.pathname;

navLinks.forEach(link =>{

    if(currentPath.includes(link.getAttribute("href"))){
        link.classList.add("border-black");

    } else if(link.classList.contains("border-black")){
        link.classList.remove("border-black");
    }
});
