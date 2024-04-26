// Estufas
const estufas = [
    {
        "id": "Estufa1",
        "about": "La estufa de gas proporciona un calor potente y rápido, ideal para calentar grandes espacios en poco tiempo, perfecta para usar en hogares o talleres.",
        "picture": "https://challengerco.vteximg.com.br/arquivos/ids/159258-1000-1000/SD6140_1.jpg?v=637668004471200000",
        "squarePic": "https://centrocomercialenlinea.com/wp-content/uploads/2021/06/estufa-2-puesto-gas-150x150.jpg",
        "name": "Estufa de Gas"
    },
    {
        "id": "Estufa2",
        "about": "Compacta y eficiente, la estufa eléctrica ofrece un calentamiento uniforme y control preciso de la temperatura, ideal para espacios más pequeños como dormitorios o salas de estar.",
        "picture": "https://abba.com.co/wp-content/uploads/2022/03/estufa-de-empotrar-abba-ce-4plx-4-puestos-electrica-acero-inoxidable-2.jpg",
        "squarePic": "https://www.homeelementsweb.com/wp-content/uploads/2021/10/estufa-electrica-negra-150x150.jpg",
        "name": "Estufa Eléctrica"
    }
];

const estufas1 = [
    {
        "id": "Estufa3",
        "about": "La estufa de pellets utiliza pellets de madera como combustible, ofreciendo una opción sostenible y eficiente energéticamente para calentar el hogar, con la ventaja de una llama visible y un control termostático.",
        "picture": "https://www.todochimeneas.com/blog/wp-content/uploads/2013/02/Estufa-Pellet-Ecoteck-Monica.jpg",
        "squarePic": "https://gruporp.es/3020-home_default/estufa-de-pellets-10kW-canalizable-amg-burn-12c-negro.jpg",
        "name": "Estufa de Pellets"
    },
    {
        "id": "Estufa4",
        "about": "La estufa de parafina es una opción portátil y fácil de usar, ideal para calefacción de emergencia en áreas sin acceso a la red eléctrica o gas, con bajo consumo de combustible y una llama limpia.",
        "picture": "https://www.outlet-piscinas.com/media/catalog/product/e/s/estufa-parafina-qlima-tectro-r-133-tc.jpg",
        "squarePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qJhiXeI_cAiMRyB6g_VT4D9tSRDAJ5_8KZRsTqrDDZNyhlFyhIjBJOTKd77JmBBpmR4&usqp=CAU",
        "name": "Estufa de Parafina"
    }
];


function crearEstructuraHTML(estufa) {
    const divEstufa = document.createElement('div');
    divEstufa.classList.add('estufa');

    const divTitulo1 = document.createElement('div');
    divTitulo1.classList.add('div-titulo1');

    const img = document.createElement('img');
    img.src = estufa.picture;
    img.alt = estufa.name;

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
    h2.textContent = estufa.name;

    const p = document.createElement('p');
    p.textContent = estufa.about;

    const imgSquare = document.createElement('img');
    imgSquare.src = estufa.squarePic;
    imgSquare.alt = estufa.name;

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);

    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);
    divModalContent.appendChild(imgSquare);

    divModal.appendChild(divModalContent);

    divEstufa.appendChild(divTitulo1);
    divEstufa.appendChild(divModal);

    return divEstufa;
}

function cargarEstufas(estufas, contenedor) {
    estufas.forEach(estufa => {
        const elemento = crearEstructuraHTML(estufa);
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
    const contenedorEstufas = document.getElementById('estufas');
    const contenedorEstufas1 = document.getElementById('estufas1');
    cargarEstufas(estufas, contenedorEstufas);
    cargarEstufas(estufas1, contenedorEstufas1);
});