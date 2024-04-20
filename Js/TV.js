// Televisores
const Tv = [
    {
        "id": "Tv1",
        "about": "El televisor de pantalla plana ofrece imágenes nítidas y colores vibrantes, con resolución Full HD para una experiencia de visualización inmersiva, ideal para salas de estar y dormitorios.",
        "picture": "https://compucentro.co/wp-content/uploads/1661464311.jpg",
        "squarePic": "URL_IMAGEN",
        "name": "Televisor de Pantalla Plana"
    },
    {
        "id": "Tv2",
        "about": "Con tecnología LED y resolución 4K, este televisor ofrece una calidad de imagen excepcional con detalles ultra claros y colores realistas, perfecto para disfrutar de películas, deportes y juegos.",
        "picture": "https://lasus.com.co/91516-large_default/televisor-samsung-flat-led-smart-tv-43-pulgadas-uhd-4k-3840-x-2160-dvb-t2-bluetooth-airplay-2-bixby-hdmi-x.jpg",
        "squarePic": "URL_IMAGEN",
        "name": "Televisor LED 4K"
    }
];

const Tv1 = [
    {
        "id": "Tv3",
        "about": "El televisor inteligente viene con funciones inteligentes integradas, como acceso a servicios de transmisión en línea, control por voz y compatibilidad con dispositivos móviles, para una experiencia de entretenimiento completa.",
        "picture": "https://m.media-amazon.com/images/I/81B5mN7a6pL.jpg",
        "squarePic": "URL_IMAGEN",
        "name": "Televisor Inteligente"
    },
    {
        "id": "Tv4",
        "about": "El televisor curvo ofrece una experiencia de visualización envolvente, con un diseño elegante y características avanzadas como HDR para un contraste impresionante, ideal para cinéfilos y jugadores exigentes.",
        "picture": "https://exitocol.vtexassets.com/arquivos/ids/2053215/Tv-Led-80-Cms-32-Smart-Curv-1516955_c.jpg?v=637270328074230000",
        "squarePic": "URL_IMAGEN",
        "name": "Televisor Curvo"
    }
];


function crearEstructuraHTML(tv) {
    const divTv = document.createElement('div');
    divTv.classList.add('tv');

    const divTitulo1 = document.createElement('div');
    divTitulo1.classList.add('div-titulo1');

    const img = document.createElement('img');
    img.src = tv.picture;
    img.alt = tv.name;

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
    h2.textContent = tv.name;

    const p = document.createElement('p');
    p.textContent = tv.about;

    const imgSquare = document.createElement('img');
    imgSquare.src = tv.squarePic;
    imgSquare.alt = tv.name;

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);

    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);
    divModalContent.appendChild(imgSquare);

    divModal.appendChild(divModalContent);

    divTv.appendChild(divTitulo1);
    divTv.appendChild(divModal);

    return divTv;
}

function cargarTv(tv, contenedor) {
    tv.forEach(tv => {
        const elemento = crearEstructuraHTML(tv);
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
    const contenedorTv = document.getElementById('tv');
    const contenedorTv1 = document.getElementById('tv1');
    cargarTv(Tv, contenedorTv);
    cargarTv(Tv1, contenedorTv1);
});