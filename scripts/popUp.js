const modal = document.getElementById('modal');
/* const botonAbrirCv = document.getElementById('BotonAbrirModal');
const botonCerrarCv = document.getElementById('botonCerrarModal'); */

botonAbrirModal.addEventListener('click', () => {
    modal.showModal();
})

botonCerrarModal.addEventListener('click', () => {
    modal.close();
})

botonCerrarModal2.addEventListener('click', () => {
    modal.close();
})

modal.addEventListener('click', e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close()
    }
})

const modalAcerca = document.getElementById('modalAcerca');

botonAbrirModalAcerca.addEventListener('click', () => {
    modalAcerca.showModal();
})

botonCerrarModalAcerca.addEventListener('click', () => {
    modalAcerca.close();
})


modalAcerca.addEventListener('click', e => {
    const dialogDimensionsAcerca = modalAcerca.getBoundingClientRect()
    if (
        e.clientX < dialogDimensionsAcerca.left ||
        e.clientX > dialogDimensionsAcerca.right ||
        e.clientY < dialogDimensionsAcerca.top ||
        e.clientY > dialogDimensionsAcerca.bottom
    ) {
        modalAcerca.close()
    }
})
