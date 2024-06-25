/* Index */
const imgmenu = document.querySelector(".img-navbar-izquierda");
const menuvertical = document.querySelector(".menu-vertical");

imgmenu.addEventListener("click", () => {
    menuvertical.classList.toggle("showhide")
});





/* Videojuegos */
/* Líneas horizontales de los videojuegos */
const videojuegosTodos = document.querySelector(".videojuegos")
const contenedorVideojuegoslineauno = document.querySelector(".videojuegos-linea-uno");
const contenedorVideojuegoslineados = document.querySelector(".videojuegos-linea-dos");
const contenedorVideojuegoslineatres = document.querySelector(".videojuegos-linea-tres");

/* Mostrar en líneas de 4 de largo*/
videojuegos.forEach((videojuego, index) => {
    if (index <= 3) {
        mostrarVideojuego(videojuego, contenedorVideojuegoslineauno);
    } else if (index >= 4 && index < 8) {
        mostrarVideojuego(videojuego, contenedorVideojuegoslineados);
    } else if (index >=9 && index <=12) {
        mostrarVideojuego(videojuego, contenedorVideojuegoslineatres);
    };
});

/* Crea los Videojuegos individualmente */
function mostrarVideojuego(videojuego, contenedor) {
    const divVideojuego = document.createElement("div");
    const imgVideojuego = document.createElement("img");
    const titulo = document.createElement("h3");
    const descripcion = document.createElement("p");
    const precio = document.createElement("span");
    
    divVideojuego.classList.add("videojuego");
    
    imgVideojuego.src = videojuego.imagen;
    titulo.innerHTML = "<h3>Título: </h3>" + videojuego.nombre;
    precio.innerHTML = "<h3>Precio promedio: </h3>" + videojuego.preciopromedio;
    descripcion.innerHTML = "<h3>Descripción: </h3>" + videojuego.descripcion;
    
    divVideojuego.appendChild(imgVideojuego);
    divVideojuego.appendChild(titulo);
    divVideojuego.appendChild(precio);
    divVideojuego.appendChild(descripcion);
    contenedor.appendChild(divVideojuego);
    
    /* Ventanas Emergentes de Videojuegos */
    const divVentana = document.createElement("div");
    const cerrarVentana = document.createElement("button");
    const imgVentana = document.createElement("img");
    const precioVentana = document.createElement("p");
    const tituloVentana = document.createElement("h3");
    const descripcionVentana = document.createElement("p");
    const tipsVentana = document.createElement("p");
    const ambienteVentana = document.createElement("p");
    divVentana.classList.add("videojuego-ventana");
    cerrarVentana.classList.add("cerrar-ventana");

    /* Descripción ventana */
    cerrarVentana.textContent = "x"
    imgVentana.src = videojuego.imagen;
    tituloVentana.innerHTML = "<h3>Título: </h3>" + videojuego.nombre;
    precioVentana.innerHTML = "<h3>Precio promedio: </h3>" + videojuego.preciopromedio;
    descripcionVentana.innerHTML = "<h3>Descripción: </h3>" + videojuego.descripcion;
    tipsVentana.innerHTML = "<h3>Tips para mejorar rápido: </h3>" + videojuego.tips;
    ambienteVentana.innerHTML = "<h3>Calidad Social: </h3>" + videojuego.social;

    /* Añadir toda la ventana */
    divVentana.appendChild(cerrarVentana);
    divVentana.appendChild(imgVentana);
    divVentana.appendChild(tituloVentana);
    divVentana.appendChild(precioVentana);
    divVentana.appendChild(descripcionVentana);
    divVentana.appendChild(tipsVentana);
    divVentana.appendChild(ambienteVentana);

    /* Qué se muestre clickeando */
    divVideojuego.addEventListener("click", (e) => {
        document.body.appendChild(divVentana);
    });

    /* Cerrar ventana con button "x" */
    cerrarVentana.addEventListener("click", () => {
        document.body.removeChild(divVentana);
    })
}
































