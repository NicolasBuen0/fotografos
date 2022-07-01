/* menu mobile */
const btnMobile = document.querySelector("#btn-mobile");

function toggleMenu(event) {
    if (event.type == "touchstart") event.preventDefault()
    const nav = document.querySelector("nav");
    nav.classList.toggle("ativo")
}
btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu)


/* Animacao */
new SimpleAnime();