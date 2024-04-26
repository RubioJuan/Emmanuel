// Lavadoras
const lavadoras = [
    {
        "id": "Lavadora1",
        "about": "Lavadora de carga frontal con capacidad para 8 kg de ropa, eficiente en consumo de agua y energía.",
        "picture": "https://fullhogar.com.co/wp-content/uploads/2023/05/WM22VV2S6B-6.jpg",
        "squarePic": "https://www.lg.com/cac/images/lavadoras-y-secadoras/md07562604/260.jpg",
        "name": "Lavadora de Carga Frontal"
    },
    {
        "id": "Lavadora2",
        "about": "Lavadora-secadora con capacidad para 10 kg de lavado y 6 kg de secado, ideal para hogares con poco espacio.",
        "picture": "https://www.lg.com/content/dam/channel/wcms/co/images/lavadoras-y-secadoras/wd16eg2s6_aesecol_escb_co_c/gallery/Medium_01.jpg",
        "squarePic": "https://www.tiendalgonline.com/69722-home_default/lg-lavadora-secadora.jpg",
        "name": "Lavadora Secadora"
     
    }
]
const Lavadoras1 = [
    {
        "id": "Lavadora3",
        "about": "Lavadora de carga superior con sistema de lavado por agitación, perfecta para espacios reducidos.",
        "picture": "https://electroluxco.vtexassets.com/arquivos/ids/161489/XS0BZL8B59JA20WQ.jpg?v=637931682942400000",
        "squarePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8daShedTCaeSO01LEo3NzJ9nK-ki18MD7P7rNSvLwg&s",
        "name": "Lavadora de Carga Superior"
    },
    {
        "id": "Lavadora4",
        "about": "Lavadora de carga frontal con capacidad extra grande para 12 kg de ropa, perfecta para familias grandes.",
        "picture": "https://falabella.scene7.com/is/image/FalabellaCO/63561425_9?wid=800&hei=800&qlt=70",
        "squarePic": "https://mipuntomovil.com/75757-home_default/lavadora-otsein-ot-12101de1-37-carga-frontal-capacidad-de-lavado-10-kilos-1200-rpm-clase-energetica-ae.jpg",
        "name": "Lavadora de Carga Frontal Extra Grande"
    }
]


function crearEstructuraHTML(lavadora) {
    const divLavadora = document.createElement('div');
    divLavadora.classList.add('lavadora');

    const divTitulo1 = document.createElement('div');
    divTitulo1.classList.add('div-titulo1');

    const img = document.createElement('img');
    img.src = lavadora.picture;
    img.alt = lavadora.name;

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
    h2.textContent = lavadora.name;

    const p = document.createElement('p');
    p.textContent = lavadora.about;

    const imgSquare = document.createElement('img');
    imgSquare.src = lavadora.squarePic;
    imgSquare.alt = lavadora.name;

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);

    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);
    divModalContent.appendChild(imgSquare);

    divModal.appendChild(divModalContent);

    divLavadora.appendChild(divTitulo1);
    divLavadora.appendChild(divModal);

    return divLavadora;
}

function cargarLavadoras(lavadoras, contenedor) {
    lavadoras.forEach(lavadora => {
        const elemento = crearEstructuraHTML(lavadora);
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
    const contenedorLavadoras1 = document.getElementById('lavadoras1');
    const contenedorLavadoras = document.getElementById('lavadoras');
    cargarLavadoras(lavadoras, contenedorLavadoras);
    cargarLavadoras(Lavadoras1,contenedorLavadoras1)
});