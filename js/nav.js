function functionNavLigne() {
    var x = document.getElementById("pagePresentation");
    var y = document.getElementById("pageActualités");
    var z = document.getElementById("pageContact");

    if (top >= 0 && top <= 727) {
        x.style = "pas ligne en bas"
        y.style = "pas ligne en bas"
        z.style = "pas ligne en bas"
    }
    if (top >= 728 && top <= 1456) {
        x.style = "ligne en bas"
        y.style = "pas ligne en bas"
        z.style = "pas ligne en bas"
    }
    if (top >= 1456 && top <= 2184) {
        x.style = "pas ligne en bas"
        y.style = "ligne en bas"
        z.style = "pas ligne en bas"
    }
    if (top >= 2184 && top <= 3000) {
        x.style = "pas ligne en bas"
        y.style = "pas ligne en bas"
        z.style = "ligne en bas"
    }
}