const boutonTheme = document.querySelector("#bouton-theme");
const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");

console.log(boutonTheme);
console.log("script.js loaded");
boutonTheme.addEventListener("click", function () {
document.body.classList.toggle("sombre");
    if (document.body.classList.contains("sombre")) {
        boutonTheme.textContent = "Mode clair";
    } else {
        boutonTheme.textContent = "Mode sombre";
    }
});

curseur.addEventListener("input", function () {
    console.log(curseur.value);
    document.body.style.fontSize = curseur.value + "%";
    valeurTaille.textContent = curseur.value + " %";

});
