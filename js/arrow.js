function functionArrow() {

    //récuperer la hauteur de ma page
    var h = window.scrollMaxY + document.body.offsetHeight;

    //récuper la hauteur de ma fenetre
    var hauteur = window.innerHeight;

    // Récuperer la balise felche du fichier html
    var x = document.getElementById("fleche");

    // Récuperer la valeur px du body en fonction du haut de la fenetre de l'utilisateur
    var top = window.scrollY;
    console.log(top);

    if (top >= 0 && top <= 727) {
        window.scrollTo(0, 728)
    }
    if (top >= 728 && top <= 1456) {
        window.scrollTo(0, 1456)
    }
    if (top >= 1456 && top <= 2184) {
        window.scrollTo(0, 2184)
        x.style.transform = "rotate(180deg)"
    }
    if (top >= 2184 && top <= 3000) {
        window.scrollTo(0, 0)
        x.style.transform = "rotate(0deg)"
    }
}