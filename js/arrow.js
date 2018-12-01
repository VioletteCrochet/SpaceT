function functionArrow() {
    //récuperer la hauteur de ma page
    var h = window.scrollMaxY + document.body.offsetHeight;
    console.log(h);
    (h);
    //récuper la hauteur de ma fenetre
    var hauteur = window.innerHeight;
    console.log(hauteur);

    if (h >= 808) {
        window.scrollTo(0, 808);
    } else if (hauteur >= 1536) {
        window.scrollTo(0, 1536);
    } else if (hauteur >= 2264) {
        window.scrollTo(0, 2264);
    } else if (hauteur > 2264) {
        window.scrollTo(0, 80);
    }
}