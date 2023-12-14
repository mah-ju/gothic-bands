const menuFixo = document.querySelector(".menu-fixo");
const navBarFixa = document.querySelector(".nav-links");

menuFixo.addEventListener("click", ()=>{
    navBarFixa.classList.toggle("hidden");
});


const navLinksA = document.querySelectorAll(".nav-links a");
const currentPath = window.location.pathname;
navLinksA.forEach(link => {
    if(currentPath.includes(link.getAttribute("href"))){
        link.classList.add("border-black")
    } else if(link.classList.contains("border-black")){
        link.classList.remove("border-black")
    }
});