//Aires acondicionados
const aires = [
    {
        
        "id": "Aire1",
        "about": "Instalado en un lugar central, el aire acondicionado central distribuye aire frío a través de conductos, ideal para edificios grandes.",
        "picture": "https://uniclima.net/wp-content/uploads/2022/06/01_main-6.jpg",
    "squarePic": "https://www.carriercca.com/imagebank/Carrier/01_central_air_conditioners/performance_series/24ACB7/01_main.jpg",
        "name": "Aire Acondicionado Central"
    },
    {
        "id": "Aire2",
        "about": "Móvil y fácil de instalar, el aire acondicionado portátil es perfecto para habitaciones donde la instalación fija no es posible.",
        "picture": "https://f.fcdn.app/imgs/bf73bd/www.mdeofertas.uy/mdofuy/16dd/original/catalogo/JTSEEN254D-EP24094_JTSEEN254D-EP24094_3/1500-1500/aire-acondicionado-portatil-usb-enfriador-a-base-de-agua-aire-acondicionado-portatil-usb-enfriador-a-base-de-agua.jpg",
    "squarePic": "https://http2.mlstatic.com/D_NQ_NP_669315-MLA50820222361_072022-O.webp",
        "name": "Aire Acondicionado Portátil"
    }
]
const aires1 =[
    {
        "id": "Aire3",
        "about": "Compuesto por una unidad interior y otra exterior, el aire acondicionado tipo split es eficiente y silencioso, ideal para espacios interiores.",
        "picture": "https://instrumentosdemedicion.org/wp-content/uploads/2023/06/Aire-Acondiconado-Split.jpg",
    "squarePic": "https://www.climadesign.com.ar/admin/upload_files/info_19ca14e7ea6328a42e0eb13d585e4c22/JPEG/20160229-121132_Imagenes-informativas-web.jpg",
        "name": "Aire Acondicionado Tipo Split"
    },
    {
        "id": "Aire4",
        "about": "Compacto y fácil de instalar en una ventana, el aire acondicionado de ventana es ideal para enfriar habitaciones individuales en hogares o apartamentos.",
        "picture": "https://codigocalderas.com/wp-content/uploads/2022/06/aire-acondicionado-ventana-1024x512.jpg",
    "squarePic": "https://http2.mlstatic.com/D_NQ_NP_730427-MCO46778312107_072021-O.webp",
        "name": "Aire Acondicionado de Ventana"
    }
]

// Función para crear la estructura HTML de un aire acondicionado
function crearEstructuraHTML(aire) {
    const divHola = document.createElement('div');
    divHola.classList.add('aire');

    const divTitulo1 = document.createElement('div');
    divTitulo1.classList.add('div-titulo1');

    const img = document.createElement('img');
    img.src = aire.picture; // Corregido para acceder a la propiedad picture
    img.alt = aire.name;

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
    h2.textContent = aire.name;

    const p = document.createElement('p');
    p.textContent = aire.about;

    const imgSquare = document.createElement('img');
    imgSquare.src = aire.squarePic; // Corregido para acceder a la propiedad squarePic
    imgSquare.alt = aire.name;

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);

    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);
    divModalContent.appendChild(imgSquare);

    divModal.appendChild(divModalContent);

    divHola.appendChild(divTitulo1);
    divHola.appendChild(divModal);

    return divHola;
}

// Función para cargar los aires acondicionados en el contenedor adecuado
function cargarAires(aires, contenedor) {
    aires.forEach(aire => {
        const elemento = crearEstructuraHTML(aire);
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

// Cargar los aires acondicionados al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const contenedorAires = document.getElementById('aires');
    const contenedorAires1 = document.getElementById('aires1')
    cargarAires(aires,contenedorAires)
    cargarAires(aires1, contenedorAires1);
});