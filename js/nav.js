function linkOne() {

    document.getElementById("navLinkOne").className = "actif";
    document.getElementById("navLinkTwo").className -= "actif";
    document.getElementById("navLinkThree").className -= "actif";
}
function linkTwo() {
    document.getElementById("navLinkOne").className -= "actif";
    document.getElementById("navLinkTwo").className = "actif";
    document.getElementById("navLinkThree").className -= "actif";
}
function linkThree() {
    document.getElementById("navLinkOne").className -= "actif";
    document.getElementById("navLinkTwo").className -= "actif";
    document.getElementById("navLinkThree").className = "actif";
}
