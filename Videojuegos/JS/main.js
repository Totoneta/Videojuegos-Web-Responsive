/* Navbar */
const imgmenu = document.querySelector(".img-navbar-izquierda");
const menuvertical = document.querySelector(".menu-vertical");

imgmenu.addEventListener("click", () => {
    menuvertical.classList.toggle("showhide")
});

/* Videojuegos.html */

/* Líneas horizontales de los videojuegos */

const videojuegosItems = document.querySelector(".videojuegos");

/* Crea los Videojuegos individualmente */

function mostrarVideojuegos(videojuegos) {
    videojuegos.forEach((e) => {

        const divVideojuego = document.createElement("div");
        divVideojuego.classList.add("videojuego");

        const imgVideojuego = document.createElement("img");
        const titulo = document.createElement("h3");
        const descripcion = document.createElement("p");
        const precio = document.createElement("span");


        imgVideojuego.src = e.imagen;
        titulo.innerHTML = `<h3>Título: ${e.nombre}</h3>`;
        precio.innerHTML = `<h3>Precio promedio: ${e.preciopromedio}</h3>`;
        descripcion.innerHTML = `<h3>Descripción: ${e.descripcion}</h3>`;

        divVideojuego.appendChild(imgVideojuego);
        divVideojuego.appendChild(titulo);
        divVideojuego.appendChild(precio);
        divVideojuego.appendChild(descripcion);
        videojuegosItems.appendChild(divVideojuego);

        /* Ventanas Emergentes de Videojuegos */
        const divVentana = document.createElement("div");

        /* Cerrar Ventana */
        const cerrarContainer = document.createElement("div");
        const cerrarVentana = document.createElement("img");

        const imgVentana = document.createElement("img");
        const precioVentana = document.createElement("p");
        const tituloVentana = document.createElement("h3");
        const descripcionVentana = document.createElement("p");
        const tipsVentana = document.createElement("p");
        const ambienteVentana = document.createElement("p");
        divVentana.classList.add("videojuego-ventana");
        cerrarContainer.classList.add("cerrar-ventana");

        /* Descripción ventana */
        cerrarVentana.src = '/Images/cerrar.svg';
        imgVentana.src = e.imagen;
        tituloVentana.innerHTML = `<h3>Título: ${e.nombre}</h3>`;
        precioVentana.innerHTML = `<h3>Precio promedio: ${e.preciopromedio}</h3>`;
        descripcionVentana.innerHTML = `<h3>Descripción: ${e.descripcion}</h3>`;
        tipsVentana.innerHTML = `<h3>Tips para mejorar rápido: ${e.tips}</h3>`;
        ambienteVentana.innerHTML = `<h3>Calidad Social: ${e.social}</h3>`;

        /* Añadir img de CerrarVentana a Contenedor p/ cerrar la ventana */
        cerrarContainer.appendChild(cerrarVentana);


        /* Añadir toda la ventana */
        divVentana.appendChild(cerrarContainer);
        divVentana.appendChild(imgVentana);
        divVentana.appendChild(tituloVentana);
        divVentana.appendChild(precioVentana);
        divVentana.appendChild(descripcionVentana);
        divVentana.appendChild(tipsVentana);
        divVentana.appendChild(ambienteVentana);

        /* Qué se muestre clickeando */
        divVideojuego.addEventListener("click", () => {
            document.body.appendChild(divVentana);
        });

        /* Cerrar ventana con button "x" */
        cerrarVentana.addEventListener("click", () => {
            document.body.removeChild(divVentana);
        })
    });
}
mostrarVideojuegos(videojuegos);
































