var top = window.scrollY;

if (top >= 0 && top <= 727) {   
                    
}
if (top >= 728 && top <= 1456) {
    document.getElementById(navLinkOne).className = "actif";
}
if (top >= 1456 && top <= 2184) {
    document.getElementById(navLinkTwo).className = "actif";
}

if (top >= 2184 && top <= 3000) {
    document.getElementById(navLinkThree).className = "actif";
}
