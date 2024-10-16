
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header_nav = document.querySelector(".header");
const navbar = document.querySelector(".navbar")

const mobile_list = document.querySelector(".mobile-list");

const toggleNavbar = () => {
    header_nav.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => toggleNavbar(
    // document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden'
     navbar.style.translateX = navbar.style.translateX === '0' ? '-100px' : '0'
));

mobile_list.addEventListener("click", () => toggleNavbar(
    navbar.style.translateX = navbar.style.translateX === '0' ? '-100px' : '0'
 ));
 


