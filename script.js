const boutonTheme = document.querySelector("#bouton-theme");
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

