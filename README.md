    Reparación-Mantenimiento E Instalación de Electrodomésticos 

Este proyecto es para brindarle al cliente una empresa confiable donde su trabajo es garantizado, se maneja todo tipo de electrodomésticos, tanto T.V, neveras, estufas, etc. 

    1.	Introducción:

En la pagina principal se proyecta el logo, un boton llamado "Más información" donde este lleva a una pequeña presentacion de la empresa y su compromiso con los clientes.

    2. Redes Sociales:

En la parte inferior se obtiene las distintas redes sociales de la empresa, para que el cliente pueda comunicarse con nuestro servicio.

    3. Productos:

En la parte Superior contiene los diferecntes servicios, donde aparecen 4 produtos diferentes y su respectiva informacion.


Carpetas:

        1. En el contenido de la carptea Js, se puede observar todos los Js de manera organizada y con su respectiva información.

        2. La caperta Views, contiene los diferentes HTML que se manejaron para realizar la pagina web.

        3. La carpeta Css contiene los estilos que se utilizaron en toda la pagina. 
Codigo:
    
        document.addEventListener('DOMContentLoaded', function () {
            const contenedorAires = document.getElementById('aires');
            const contenedorAires1 = document.getElementById('aires1')
            cargarAires(aires,contenedorAires)
            cargarAires(aires1, contenedorAires1);
        });

        Esas lineas de codigo lo que hacen es cargar la informcion que se coloca en la constante.

Constante:

        //Aires acondicionados
    const aires = [
        {  
            "id": "Aire1",
            "about": "Instalado en un lugar central, el aire acondicionado central distribuye aire frío a través de conductos, ideal para edificios grandes.",
            "picture": "https://uniclima.net/wp-content/uploads/2022/06/01_main-6.jpg",
        "squarePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TjhY8w23uBPsXrc9sn7eJoo90FGGBdxMY2G4tgOrGQ&s",
            "name": "Aire Acondicionado Central"
        },
        {
            "id": "Aire2",
            "about": "Móvil y fácil de instalar, el aire acondicionado portátil es perfecto para habitaciones donde la instalación fija no es posible.",
            "picture": "https://f.fcdn.app/imgs/bf73bd/www.mdeofertas.uy/mdofuy/16dd/original/catalogo/JTSEEN254D-EP24094_JTSEEN254D-EP24094_3/1500-1500/aire-acondicionado-portatil-usb-enfriador-a-base-de-agua-aire-acondicionado-portatil-usb-enfriador-a-base-de-agua.jpg",
        "squarePic": "https://lh6.googleusercontent.com/proxy/z1befhMBrJU0vF9fH1iboI-X_1MocFRSgfw8ohV_g2fGZ8qsMZ3iW-F9bR-ZTuYbD7ZSjUO9GLLSTeeUwfvYYt4v4XJF5iZ7ML3a52ZVzoPpE3XA",
            "name": "Aire Acondicionado Portátil"
        }
    ]
    const aires1 =[
        {
            "id": "Aire3",
            "about": "Compuesto por una unidad interior y otra exterior, el aire acondicionado tipo split es eficiente y silencioso, ideal para espacios interiores.",
            "picture": "https://instrumentosdemedicion.org/wp-content/uploads/2023/06/Aire-Acondiconado-Split.jpg",
        "squarePic": "https://cdn.habitium.com/1947555-large_default/aire-acondicionado-de-tipo-split-con-temporizador-para-instalacion-en-pared-kl-fujitsu.jpg?width=240&",
            "name": "Aire Acondicionado Tipo Split"
        },
        {
            "id": "Aire4",
            "about": "Compacto y fácil de instalar en una ventana, el aire acondicionado de ventana es ideal para enfriar habitaciones individuales en hogares o apartamentos.",
            "picture": "https://codigocalderas.com/wp-content/uploads/2022/06/aire-acondicionado-ventana-1024x512.jpg",
        "squarePic": "https://www.raenco.com/pub/media/catalog/product/cache/025d7fd358df95e93d9e7acd753af033/3/0/3002006.jpg",
            "name": "Aire Acondicionado de Ventana"
        }
    ]

Se ingresa la información con sus respectivas imagenes.

Funcion Para llamar la constante y darle la función a los botones:

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


Si tienes alguna sugerencia o necesitas algun proyecto, no dudes en comunicarte al siguiente correo: rubiojuanfe.0216@gmail.com 