//Neveras acondicionados
const Neveras = [
    {
        "id": "Secadora1",
        "about": "Con una capacidad generosa y múltiples configuraciones de secado, la secadora de carga frontal es eficiente y su diseño ahorra espacio, ideal para hogares modernos.",
        "picture": "https://f.fcdn.app/imgs/bf73bd/www.mdeofertas.uy/mdofuy/16dd/original/catalogo/JTSEEN254D-EP24094_JTSEEN254D-EP24094_3/1500-1500/aire-acondicionado-portatil-usb-enfriador-a-base-de-agua-aire-acondicionado-portatil-usb-enfriador-a-base-de-agua.jpg",
        "squarePic": "https://images-na.ssl-images-amazon.com/images/I/71xXmN2JTZL._AC_SX679_.jpg",
        "name": "Secadora de Carga Frontal"
    },
    {
        "id": "Secadora2",
        "about": "Compacta y versátil, la secadora de carga superior es fácil de usar y se adapta a espacios más pequeños, perfecta para apartamentos y lavanderías con espacio limitado.",
        "picture": "https://f.fcdn.app/imgs/bf73bd/www.mdeofertas.uy/mdofuy/16dd/original/catalogo/JTSEEN254D-EP24094_JTSEEN254D-EP24094_3/1500-1500/aire-acondicionado-portatil-usb-enfriador-a-base-de-agua-aire-acondicionado-portatil-usb-enfriador-a-base-de-agua.jpg",
        "squarePic": "https://m.media-amazon.com/images/I/71jVdO+OXrL._AC_SL1500_.jpg",
        "name": "Secadora de Carga Superior"
    }
]

const Neveras1 = [
    {
        "id": "Secadora3",
        "about": "La secadora de gas natural ofrece un secado rápido y eficiente, con costos operativos más bajos que las secadoras eléctricas, ideal para aquellos que buscan un rendimiento potente y económico.",
        "picture": "https://f.fcdn.app/imgs/bf73bd/www.mdeofertas.uy/mdofuy/16dd/original/catalogo/JTSEEN254D-EP24094_JTSEEN254D-EP24094_3/1500-1500/aire-acondicionado-portatil-usb-enfriador-a-base-de-agua-aire-acondicionado-portatil-usb-enfriador-a-base-de-agua.jpg",
        "squarePic": "https://images-na.ssl-images-amazon.com/images/I/81TSvmisIgL._AC_SL1500_.jpg",
        "name": "Secadora de Gas Natural"
    },
    {
        "id": "Secadora4",
        "about": "Con funciones inteligentes y conectividad Wi-Fi, la secadora inteligente ofrece conveniencia y control remoto a través de dispositivos móviles, perfecta para aquellos que desean gestionar su lavandería desde cualquier lugar.",
        "picture": "https://f.fcdn.app/imgs/bf73bd/www.mdeofertas.uy/mdofuy/16dd/original/catalogo/JTSEEN254D-EP24094_JTSEEN254D-EP24094_3/1500-1500/aire-acondicionado-portatil-usb-enfriador-a-base-de-agua-aire-acondicionado-portatil-usb-enfriador-a-base-de-agua.jpg",
        "squarePic": "https://m.media-amazon.com/images/I/71d7tmEsfJL._AC_SL1500_.jpg",
        "name": "Secadora Inteligente"
    }
]

// Función para crear la estructura HTML de una nevera
function crearEstructuraHTML(nevera) {
    const divNevera = document.createElement('div');
    divNevera.classList.add('nevera');

    const divTitulo1 = document.createElement('div');
    divTitulo1.classList.add('div-titulo1');

    const img = document.createElement('img');
    img.src = nevera.picture;
    img.alt = nevera.name;

    const br = document.createElement('br');

    const button = document.createElement('button');
    button.textContent = 'Ver';
    button.classList.add('ver');

    const divModal = document.createElement('div');
    divModal.classList.add('modalContainer');

    const divModalContent = document.createElement('div');
    divModalContent.classList.add('modal-content');

    const spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.textContent = 'X';

    const h2 = document.createElement('h2');
    h2.textContent = nevera.name;

    const p = document.createElement('p');
    p.textContent = nevera.about;

    const imgSquare = document.createElement('img');
    imgSquare.src = nevera.squarePic;
    imgSquare.alt = nevera.name;

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);

    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);
    divModalContent.appendChild(imgSquare);

    divModal.appendChild(divModalContent);

    divNevera.appendChild(divTitulo1);
    divNevera.appendChild(divModal);

    return divNevera;
}

// Función para cargar las neveras en el contenedor adecuado
function cargarNeveras(neveras, contenedor) {
    neveras.forEach(nevera => {
        const elemento = crearEstructuraHTML(nevera);
        contenedor.appendChild(elemento);

        // Event listener para mostrar el modal al hacer clic en "Ver"
        const button = elemento.querySelector('.ver');
        button.addEventListener('click', () => {
            const modal = elemento.querySelector('.modalContainer');
            modal.style.display = 'block';
        });

        // Event listener para cerrar el modal al hacer clic en la "X"
        const spanClose = elemento.querySelector('.close');
        spanClose.addEventListener('click', () => {
            const modal = elemento.querySelector('.modalContainer');
            modal.style.display = 'none';
        });

        // Event listener para cerrar el modal al hacer clic fuera de él
        window.addEventListener('click', (event) => {
            const modal = elemento.querySelector('.modalContainer');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Cargar las neveras al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const contenedorNeveras = document.getElementById('neveras');
    const contenedorNeveras1 = document.getElementById('neveras1');
    cargarNeveras(Neveras, contenedorNeveras);
    cargarNeveras(Neveras1, contenedorNeveras1);
});
