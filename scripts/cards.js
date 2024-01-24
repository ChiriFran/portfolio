const inicioBtn = document.getElementById('inicioBtn');
const acercaBtn = document.getElementById('acercaBtn');
const contactoBtn = document.getElementById('contactoBtn');

const inicio = document.getElementById('intro');
const acerca = document.getElementById('acerca');
const contacto = document.getElementById('contacto');


function mostrarInicio() {
    inicio.style.display = "block";
    acerca.style.display = "none";
    contacto.style.display = "none";

    inicio.classList.add('entrada');
}

function mostrarAcerca() {
    inicio.style.display = "none";
    acerca.style.display = "block";
    contacto.style.display = "none";

    acerca.classList.add('entrada');
    
}

function mostrarContacto() {
    inicio.style.display = "none";
    acerca.style.display = "none";
    contacto.style.display = "block";

    contacto.classList.add('entrada');
}

inicioBtn.addEventListener('click', () => {
    nav.classList.remove("navVisible")
    mostrarInicio();
})

acercaBtn.addEventListener('click', () => {
    nav.classList.remove("navVisible")
    mostrarAcerca();
})

contactoBtn.addEventListener('click', () => {
    nav.classList.remove("navVisible")
    mostrarContacto();
})