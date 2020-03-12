window.onscroll = function() {a()};

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function a() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}