// Neveras
const Neveras = [
    {
        "id": "Nevera1",
        "about": "La nevera con congelador inferior ofrece un acceso más conveniente a los alimentos frescos, con un diseño moderno y elegante que se integra bien en cocinas contemporáneas.",
        "picture": "https://m.media-amazon.com/images/I/619Oc7WWNiL.jpg",
        "squarePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-d2WaMbF8LUwAQBr_xrbkY5l6r7jbPKGMukV5nIMoPA&s",
        "name": "Nevera con Congelador Inferior"
    },
    {
        "id": "Nevera2",
        "about": "Compacta y eficiente, la nevera de una puerta es ideal para espacios pequeños como cocinas de apartamentos o habitaciones de hotel, ofreciendo un almacenamiento conveniente de alimentos frescos.",
        "picture": "https://exhibirequipos.com/wp-content/uploads/2017/03/refrigerador-de-una-ala.jpg",
        "squarePic": "https://www.grupozingal.co/wp-content/uploads/2018/12/REFRIGERADORINDUSTRIAL1puerta1.png",
        "name": "Nevera de Una Puerta"
        
    }
];

const Neveras1 = [
    {
        "id": "Nevera3",
        "about": "La nevera de dos puertas ofrece amplio espacio de almacenamiento para alimentos frescos y congelados, con características como dispensador de agua y hielo, perfecta para familias grandes.",
        "picture": "https://www.fecoycia.com/wp-content/uploads/2019/01/084a-REFRIGERADOR-2-PUERTAS.jpg",
        "squarePic": "https://i.pinimg.com/236x/10/87/b5/1087b5aba5eb4aff82b46e7039ba55c5.jpg",
        "name": "Nevera de Dos Puertas"
    },
    {
        "id": "Nevera4",
        "about": "La nevera compacta es perfecta para espacios limitados como dormitorios de estudiantes o áreas de trabajo, ofreciendo almacenamiento básico de alimentos sin ocupar demasiado espacio.",
        "picture": "https://www.emergalia.com/scripts/timthumb/timthumb.php?src=images/articulos/416_675.jpg&h=560&w=560&a=c&q=100",
        "squarePic": "https://cdn.idealo.com/folder/Product/201243/4/201243432/s11_produktbild_mittelgross/cecotec-grandcooler-20000-silentcompress-black.jpg",
        "name": "Nevera Compacta"
    }
];


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
