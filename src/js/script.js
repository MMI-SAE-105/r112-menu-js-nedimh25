document.querySelector(".menu-btn").addEventListener("click", function () {
    const isOpen = this.getAttribute("aria-expanded") === "true";
    const isClosed = !isOpen;
    console.log("Le menu est fermé : ", isOpen, "Le menu est ouvert : ", isClosed);

    const nav = document.querySelector(".menu");

    // Alterner les attributs ARIA pour ouvrir ou fermer le menu
    nav.ariaHidden = isOpen ; 
    this.setAttribute("aria-expanded", isClosed ); 
});