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


/* Galeria */

const btnUrbano  = document.querySelector(".urbano");
const btnCasal  = document.querySelector(".casal");
const imagens  = document.querySelectorAll(".imagens img");

function urbano(){
change(6);
}

function casal(){
change(0);
}

function change(c){
    imagens.forEach((img)=>{
    img.src=`img/${++c}.jpg`;
})
}

btnUrbano.addEventListener("click", urbano);
btnCasal.addEventListener("click", casal);