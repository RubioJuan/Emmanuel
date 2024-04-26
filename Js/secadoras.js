//Secadoras
const secadoras = [
    {
        "id": "Secadora1",
        "about": "Con una capacidad generosa y múltiples configuraciones de secado, la secadora de carga frontal es eficiente y su diseño ahorra espacio, ideal para hogares modernos.",
        "picture": "https://www.lg.com/content/dam/channel/wcms/co/images/lavadoras-y-secadoras/df22vv2sb_asselat_escb_co_c/450.jpg",
        "squarePic": "https://eljuri.store/12411-home_default/samsung-secadora-a-gas-carga-frontal-22-kg-blanca.webp",
        "name": "Secadora de Carga Frontal"
    },
    {
        "id": "Secadora2",
        "about": "Compacta y versátil, la secadora de carga superior es fácil de usar y se adapta a espacios más pequeños, perfecta para apartamentos y lavanderías con espacio limitado.",
        "picture": "https://www.alkosto.com/medias/883049622538-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1OTEyfGltYWdlL3dlYnB8YURrM0wyaGpaQzh4TkRNeU56Z3pNVFl5TlRjMU9DODRPRE13TkRrMk1qSTFNemhmTURBeFh6YzFNRmQ0TnpVd1NBfDEyZDllMWRkNDBkZmM5M2M5MWIyNGNkZTJjNTI0M2MwMjYyNzZmMjYyMDhjNzgxYWFhNTkyMzEwMmFiYjNkYjM",
        "squarePic": "https://images.ssstatic.com/lavadora-carga-superior-candy-cst-06le-1s-6kg-1000rpm-clase-e-76db-17-67-856417773_225x225.jpg",
        "name": "Secadora de Carga Superior"
    }
]

const secadoras1 = [
    {
        "id": "Secadora3",
        "about": "La secadora de gas natural ofrece un secado rápido y eficiente, con costos operativos más bajos que las secadoras eléctricas, ideal para aquellos que buscan un rendimiento potente y económico.",
        "picture": "https://whirlpoolco.vtexassets.com/arquivos/ids/157609/7MWGD6605MC-01--1-.jpg?v=638320508292170000",
        "squarePic": "https://realplaza.vtexassets.com/arquivos/ids/33041545-150-auto?v=638204696466930000&width=150&height=auto&aspect=true",
        "name": "Secadora de Gas Natural"
    },
    {
        "id": "Secadora4",
        "about": "Con funciones inteligentes y conectividad Wi-Fi, la secadora inteligente ofrece conveniencia y control remoto a través de dispositivos móviles, perfecta para aquellos que desean gestionar su lavandería desde cualquier lugar.",
        "picture": "https://img.global.news.samsung.com/co/wp-content/uploads/2022/05/Samsung_-FLWM4.png",
        "squarePic": "https://manuals.plus/wp-content/uploads/2022/04/GE-Profile-PFD95GSPTDS-7.8-cu.-ft.-Capacity-Smart-Front-Load-Gas-Dryer-with-Steam-and-Sanitize-Cycle-Featured-Image-150x150.png?ezimgfmt=rs:104x104/rscb1/ng:webp/ngcb1",
        "name": "Secadora Inteligente"
    }
]

// Función para crear la estructura HTML de una secadora
function crearEstructuraHTML(secadora) {
    const divSecadora = document.createElement('div');
    divSecadora.classList.add('secadora');

    const divTitulo1 = document.createElement('div');
    divTitulo1.classList.add('div-titulo1');

    const img = document.createElement('img');
    img.src = secadora.picture;
    img.alt = secadora.name;

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
    h2.textContent = secadora.name;

    const p = document.createElement('p');
    p.textContent = secadora.about;

    const imgSquare = document.createElement('img');
    imgSquare.src = secadora.squarePic;
    imgSquare.alt = secadora.name;

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);

    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);
    divModalContent.appendChild(imgSquare);

    divModal.appendChild(divModalContent);

    divSecadora.appendChild(divTitulo1);
    divSecadora.appendChild(divModal);

    return divSecadora;
}

// Función para cargar las secadoras en el contenedor adecuado
function cargarSecadoras(secadoras, contenedor) {
    secadoras.forEach(secadora => {
        const elemento = crearEstructuraHTML(secadora);
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

// Cargar las secadoras al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const contenedorSecadoras = document.getElementById('secadoras');
    const contenedorSecadoras1 = document.getElementById('secadoras1');
    cargarSecadoras(secadoras, contenedorSecadoras);
    cargarSecadoras(secadoras1, contenedorSecadoras1);
});
