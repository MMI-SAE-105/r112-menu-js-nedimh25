document.querySelector(".menu-btn").addEventListener("click", function () {
    // Définir l'état actuel du menu
    const isOpen = this.getAttribute("aria-expanded") === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

    const nav = document.querySelector(".menu");
    const isHidden = nav.getAttribute("aria-hidden") === "true";

    // Alterner les attributs ARIA pour ouvrir ou fermer le menu
    nav.setAttribute("aria-hidden", !isHidden); 
    this.setAttribute("aria-expanded", isHidden); 
});