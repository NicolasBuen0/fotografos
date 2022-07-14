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

const btnUrbano = document.querySelector(".urbano");
const btnCasal = document.querySelector(".casal");
const btnMonocromatico = document.querySelector(".monocromatico");
const btns = document.querySelectorAll(".btns .btn");
const imagens = document.querySelectorAll(".imagens img");



function casal(event) {
    change(0, event);
}

function urbano(event) {
    change(6, event);
}

function monocromatico(event) {
    change(12, event);
}

function change(c, event) {
    removeClass(event)
    imagens.forEach((img) => {
        img.src = `img/${++c}.jpg`;
    })

}

function removeClass(event) {
    btns.forEach(btn => {
        btn.classList.remove("ativo");
    })
    let btnAtivo = event.currentTarget.classList.add("ativo");
}



btnUrbano.addEventListener("click", urbano);
btnCasal.addEventListener("click", casal);
btnMonocromatico.addEventListener("click", monocromatico);


/* Animacao containers */

const containers = document.querySelectorAll(".animar");
const windowHeight = window.innerHeight * 0.6;


function animar() {
    containers.forEach((container) => {
        const topo = container.getBoundingClientRect().top;
        const telaMetade = topo - windowHeight;
        if (telaMetade < 0) {
            container.classList.add("ativo");
        }

    })
}

window.addEventListener("scroll", animar);