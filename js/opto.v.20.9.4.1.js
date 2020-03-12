window.onscroll = function() {
    c();
    console.log("scroll");
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function c() {
    console.log("m")
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } 
    else {
        navbar.classList.remove("sticky");
    }
}