var navbarIsDisplayed = false;
document.querySelector(".menu-icon").addEventListener("click", controlNavbar);
document.querySelector(".close-icon").addEventListener("click", controlNavbar);
function controlNavbar(){
    var navbar = document.getElementsByClassName("navmenu")[0];
    if(navbarIsDisplayed){
        document.querySelector(".menu-icon").style.display = "block";
        navbar.style.display = "none";
        navbarIsDisplayed = false;
    }else{
        document.querySelector(".menu-icon").style.display = "none";
        navbar.style.display = "block";
        navbarIsDisplayed = true;
    }
}