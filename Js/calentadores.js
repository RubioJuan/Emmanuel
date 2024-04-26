// Calentadores
const calentadores = [
    {
        "id": "CalentadorDeAgua1",
        "about": "El calentador de agua instantáneo proporciona agua caliente al instante sin necesidad de un tanque de almacenamiento, ideal para ahorrar espacio y energía en hogares pequeños o apartamentos.",
        "picture": "https://http2.mlstatic.com/D_NQ_NP_658979-CBT53523325780_012023-O.webp",
        "squarePic": "https://m.media-amazon.com/images/S/aplus-media-library-service-media/695e9e51-0af3-48a0-9266-51677fc9be48.__CR0,0,150,300_PT0_SX150_V1___.jpg",
        "name": "Calentador de Agua Instantáneo"
    },
    {
        "id": "CalentadorDeAgua2",
        "about": "El calentador de agua a gas ofrece un suministro continuo de agua caliente mediante un sistema de calentamiento eficiente y rápido, perfecto para hogares con alta demanda de agua caliente.",
        "picture": "https://h2otek.com/tienda/wp-content/uploads/2021/04/7556-1.jpg",
        "squarePic": "https://www.cyberpuerta.mx/img/product/M/CP-RHEEM-HRT-CHL08PLP-479a7b.jpg",
        "name": "Calentador de Agua a Gas"
    }
];

const calentadores1 = [
    {
        "id": "CalentadorDeAgua3",
        "about": "El calentador de agua eléctrico utiliza resistencias eléctricas para calentar el agua en un tanque de almacenamiento, ofreciendo una solución fácil de instalar y mantener, ideal para hogares sin acceso a gas natural.",
        "picture": "https://static.globalimageserver.com/south-america/rheemco/media/uploads/2022/09/IMAGEN-1-CALENTADOR-ELECTRICO-PLUS-ALTA-.png",
        "squarePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-gtp5TLG7jGLXGsqRcwGxdyLQ7akyar5FANhqtQH7KP_jta0smmdNMPUhRrGLblXWpE&usqp=CAU",
        "name": "Calentador de Agua Eléctrico"
    },
    {
        "id": "CalentadorDeAgua4",
        "about": "El calentador de agua solar aprovecha la energía del sol para calentar el agua, reduciendo los costos de energía y la huella de carbono, ideal para regiones con abundante luz solar.",
        "picture": "https://www.tmsmx.com/wp-content/uploads/2019/11/Calentadores-solares-Epcon-de-tubos-al-vacio-180-1.jpg",
        "squarePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrKvGJ6Z0QmJ_ufuBDT4VZnl6h8WJDt6NHH47emYdPQ&s",
        "name": "Calentador de Agua Solar"
    }
];

function crearEstructuraHTML(calentador) {
    const divCalentador = document.createElement('div');
    divCalentador.classList.add('calentador');

    const divTitulo1 = document.createElement('div');
    divTitulo1.classList.add('div-titulo1');

    const img = document.createElement('img');
    img.src = calentador.picture;
    img.alt = calentador.name;

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
    h2.textContent = calentador.name;

    const p = document.createElement('p');
    p.textContent = calentador.about;

    const imgSquare = document.createElement('img');
    imgSquare.src = calentador.squarePic;
    imgSquare.alt = calentador.name;

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);

    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);
    divModalContent.appendChild(imgSquare);

    divModal.appendChild(divModalContent);

    divCalentador.appendChild(divTitulo1);
    divCalentador.appendChild(divModal);

    return divCalentador;
}

function cargarCalentadores(calentador, contenedor) {
    calentador.forEach(calentador => {
        const elemento = crearEstructuraHTML(calentador);
        contenedor.appendChild(elemento);

        const button = elemento.querySelector('.ver');
        button.addEventListener('click', () => {
            const modal = elemento.querySelector('.modalContainer');
            modal.style.display = 'block';
        });

        const spanClose = elemento.querySelector('.close');
        spanClose.addEventListener('click', () => {
            const modal = elemento.querySelector('.modalContainer');
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            const modal = elemento.querySelector('.modalContainer');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const contenedorCalentadores = document.getElementById('calentadores');
    const contenedorCalentadores1 = document.getElementById('calentadores1');
    cargarCalentadores(calentadores, contenedorCalentadores);
    cargarCalentadores(calentadores1, contenedorCalentadores1);
});