function functionMenuBurger() {
    var x = document.getElementById("lp-n-links");
    var y = document.getElementById("icons_burger1");
    var z = document.getElementById("icons_burger2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    if (z.style.display === "block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
}