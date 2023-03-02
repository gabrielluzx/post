var navbarIsDisplayed = false;
document.getElementById("menu-icon").addEventListener("click", controlNavbar);
document.getElementById("close-icon").addEventListener("click", controlNavbar);
function controlNavbar(){
    var navbar = document.getElementById("navbar");
    if(navbarIsDisplayed){
        navbar.style.display = "none";
        navbarIsDisplayed = false;
    }else{
        navbar.style.display = "block";
        navbarIsDisplayed = true;
    }
}