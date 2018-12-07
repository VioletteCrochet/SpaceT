function functionMenuBurger() {
    var x = document.getElementById("lp-n-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

console.log(document.getElementById("first-link"));


document.getElementById("first-link").addEventListener('click', function () {
    var x = document.getElementById("lp-n-links");
    x.style.display = "none"
})