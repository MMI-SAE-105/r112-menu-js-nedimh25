document.querySelector(".menu-btn").addEventListener("click", function () {
    const nav = document.querySelector(".menu");
    const isHidden = nav.getAttribute("aria-hidden") === "true";

    nav.setAttribute("aria-hidden", !isHidden); 
    this.setAttribute("aria-expanded", isHidden); 
});