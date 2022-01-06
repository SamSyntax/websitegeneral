 var navbar = document.getElementById("navbar");
            var menu = document.getElementById("menu");

            window.onscroll = function(){
                if(window.pageYOffset >= menu.offsetTop){
                    navbar.classList.add("sticky");
                }
                else{
                    navbar.classList.remove("sticky");
                }
            }

const navToggle = document.querySelector(".bars");
const primaryNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
    }

    else{
        primaryNav.setAttribute("data-visible", false);
    }
});