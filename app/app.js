const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const TopBar = document.getElementById("top-bar");
const HomePage = document.getElementById("home-page");
const Footer = document.getElementById("footer");

const mediaSize = window.matchMedia("(min-width: 600px)")



menuBtn.addEventListener("click", function () {
    if (menu.style.right === "0%") {
        menu.style.right = "-60%";
        menuBtn.innerHTML = '<img src="./assets/images/icon-menu.svg" alt="">';
        TopBar.classList.remove("opacity");
        HomePage.classList.remove("opacity");
        Footer.classList.remove("opacity");
        document.body.style.overflow = "visible";
        TopBar.style.overflow = "hidden";
    } else {
        menu.style.right = "0%";
        menuBtn.innerHTML = '<img src="./assets/images/icon-menu-close.svg" alt="">';
        TopBar.classList.add("opacity");
        HomePage.classList.add("opacity");
        Footer.classList.add("opacity");
        document.body.style.overflow = "hidden";
        TopBar.style.overflow = "visible";
    }
})
mediaSize.addEventListener("change", function(e) {
    if(e.matches) {
        if (menu.style.right === "0%") {
                TopBar.classList.remove("opacity");
                HomePage.classList.remove("opacity");
                Footer.classList.remove("opacity");
            }
    } else {
        if(menu.style.right === "0%") {
            TopBar.classList.add("opacity");
            HomePage.classList.add("opacity");
            Footer.classList.add("opacity");
        } else {
            TopBar.classList.remove("opacity");
            HomePage.classList.remove("opacity");
            Footer.classList.remove("opacity");
        }
        
    }
})
