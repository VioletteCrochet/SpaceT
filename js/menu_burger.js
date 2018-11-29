function myFunction() {
    var x = document.getElementById("lp-n-links");
    var n = document.getElementById("nav");
    if (x.style.display === "block") {
        n.style.backgroundColor = "transparent";
        x.style.display = "none";
    } else {
        x.style.display = "block";
        n.style.backgroundColor = "white";
    }
}