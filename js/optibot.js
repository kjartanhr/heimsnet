window.onload = function() {
    // List onloads here
    b();
}

function b() {
    var ch = window.innerHeight;
    var nh = document.getElementById("head").clientHeight;
    document.getElementById("hero").style.height = ch - nh+"px";
}