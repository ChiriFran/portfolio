const inicioBtn = document.getElementById('inicioBtn');
const acercaBtn = document.getElementById('acercaBtn');
const proyectosBtn = document.getElementById('proyectosBtn');
const contactoBtn = document.getElementById('contactoBtn');

const inicio = document.getElementById('intro');
const acerca = document.getElementById('acerca');
const proyectos = document.getElementById('proyectos');
const contacto = document.getElementById('contacto');


function mostrarInicio() {
    inicio.style.display = "block";
    acerca.style.display = "none";
    proyectos.style.display = "none"
    contacto.style.display = "none";

    inicio.classList.add('entrada');
}

function mostrarAcerca() {
    inicio.style.display = "none";
    acerca.style.display = "block";
    proyectos.style.display = "none"
    contacto.style.display = "none";

    acerca.classList.add('entrada');
    
}

function mostrarProyectos() {
    inicio.style.display = "none";
    acerca.style.display = "none";
    proyectos.style.display = "block"
    contacto.style.display = "none";

    proyectos.classList.add('entrada');
    
}

function mostrarContacto() {
    inicio.style.display = "none";
    acerca.style.display = "none";
    proyectos.style.display = "none"
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


proyectosBtn.addEventListener('click', () => {
    nav.classList.remove("navVisible")
    mostrarProyectos();
})

contactoBtn.addEventListener('click', () => {
    nav.classList.remove("navVisible")
    mostrarContacto();
})
