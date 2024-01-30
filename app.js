const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector(".navbar__menu")
const navLogo = document.querySelector("#navbar__logo")

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")

}

menu.addEventListener("click", mobileMenu)

const highlightMenu = () => {
    const elem = document.querySelector(".highlight")
    const HomeMenu = document.querySelector("#home-page")
    const aboutMenu = document.querySelector("#about-page")
    const ServicesMenu = document.querySelector("#services-page")
    let scrollPos = window.scrollY

    if(window.innerWidth > 960 && scrollPos < 600) {
        HomeMenu.classList.add("highlight")
        aboutMenu.classList.remove("highlight")
        return
    } else if (window.innerWidth > 960 && scrollPos < 2200){
        aboutMenu.classList.add("highlight")
        HomeMenu.classList.remove("highlight")
        ServicesMenu.classList.remove("highlight")
        return
    } else if (window.innerWidth > 960 && scrollPos < 3400){
        ServicesMenu.classList.add("highlight")
        aboutMenu.classList.remove("highlight")
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove("highlight")
    }
}

window.addEventListener("scroll", highlightMenu)
window.addEventListener("click", highlightMenu)


const hideMobileMenu = () =>{
    const menuBars =document.querySelector(".is-active")
    if(window.innerWidth <= 950  && menuBars) {
        menu.classList.toggle("is-active")
        menuLinks.classList.remove("active")
    }
}

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);