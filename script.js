const boutonTheme = document.querySelector("#bouton-theme");
const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");
const heure = new Date().getHours();
const salutation = document.querySelector("#salutation");
const POIDS_PAGE_MO = 2;
const champPages = document.querySelector("#pages-par-jour");
const resultat = document.querySelector("#resultat");

document.querySelector("#bouton-calculer").addEventListener("click", function () {
    const pages = Number(champPages.value);
    const goParAn = Math.round(pages * POIDS_PAGE_MO * 365 / 1000);

    let message = "Environ " + goParAn + " Go par an.";
    if (goParAn < 10) {
        message = message + " C'est raisonnable !";
    } else if (goParAn < 100) {
        message = message + " Ça commence à peser.";
    } else {
        message = message + " C'est énorme !";
    }

    resultat.textContent = message;
});
let score = 0;
const reponses = document.querySelectorAll(".reponse");
const affichageScore = document.querySelector("#score");

for (const bouton of reponses) {
    bouton.addEventListener("click", function () {
        if (bouton.classList.contains("juste")) {
            bouton.classList.add("vert");
            score = score + 1;
            affichageScore.textContent = "Score : " + score;
        } else {
            bouton.classList.add("rouge");
        }
        bouton.disabled = true;
    });
}


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
    document.body.style.fontSize = curseur.value + "%";
    valeurTaille.textContent = curseur.value + " %";

});
if (heure < 12) {
    salutation.textContent = "Bonjour, bonne lecture !";
} else if (heure < 18) {
    salutation.textContent = "Bon après-midi, bonne lecture !";
} else {
    salutation.textContent = "Bonsoir, bonne lecture !";
}
