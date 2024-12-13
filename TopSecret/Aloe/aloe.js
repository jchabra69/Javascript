const vinos = []; //Inicialmente estará vacío
const carrito = [];
let totalCarrito = 0; 

//RECUERDA QUE SI EL ARRAY ES CONST, DEBEMOS HACER PUSH YA QUE NO SE PUEDE MODIFICAR PERO SI AGREGAR ELEMENTOS
//SI ES LET, el cargar sería directamente con vinos = ["{nombre: Producto 1,  precio: 10}, {nombre: Producto 2}", "2"]; 

//Uso este porque no me importa que no hayan cargado recursos como las imagenes etc
document.addEventListener("DOMContentLoaded", (e) => {

    cargarProductosArray();
    mostrarProductos();
});

let cargarProductosArray = function () {
    vinos.push(
        { nombre: "Aloe 1", precio: 20.99, stock: 10, imagen: "assets/img/foodplants/aloevera/aloe1.jpg" },
        { nombre: "Aloe 2", precio: 15.00, stock: 13, imagen: "assets/img/foodplants/aloevera/aloe2.jpg" },
        { nombre: "Aloe 3", precio: 10.00, stock: 30, imagen: "assets/img/foodplants/aloevera/aloe3.jpg" },
        { nombre: "Aloe 4", precio: 18.50, stock: 3, imagen: "assets/img/foodplants/aloevera/aloe4.jpg" },
        { nombre: "Aloe 5", precio: 5.00, stock: 10, imagen: "assets/img/foodplants/aloevera/aloe5.jpg" }
    );
}

const contenedorProductos = document.querySelector(".productos");

let mostrarProductos = function () {
    vinos.forEach((vino, index) => {

        let tarjetaDiv = document.createElement("div");
        tarjetaDiv.classList.add("card", "border-dark", `${"card" + index}`);

        let tarjetaImg = document.createElement("img");
        tarjetaImg.setAttribute("src", vino.imagen);
        tarjetaImg.setAttribute("alt", "Card Img");
        tarjetaImg.classList.add("card-img-top");

        tarjetaDiv.appendChild(tarjetaImg);

        let tarjetaBody = document.createElement("div");
        tarjetaBody.classList.add("card-body");

        let tarjetaTitle = document.createElement("h5");
        tarjetaTitle.classList.add("card-title");
        tarjetaTitle.textContent = vino.nombre;

        tarjetaBody.appendChild(tarjetaTitle);

        let tarjetaPrecio = document.createElement("p");
        tarjetaPrecio.textContent = "Precio: " + vino.precio + "€";
        tarjetaPrecio.classList.add("card-text", "precio");

        tarjetaBody.appendChild(tarjetaPrecio);

        let tarjetaStock = document.createElement("p");
        tarjetaStock.textContent = "Stock: " + vino.stock;
        tarjetaStock.classList.add("card-text");

        tarjetaBody.appendChild(tarjetaStock);

        let tarjetaCantidad = document.createElement("input");
        tarjetaCantidad.setAttribute("type", "number");
        tarjetaCantidad.setAttribute("min", "1");
        tarjetaCantidad.setAttribute("max", "10");
        tarjetaCantidad.setAttribute("placeholder", "Introduce una cantidad...");
        tarjetaCantidad.classList.add("form-control", "mb-2");

        tarjetaBody.appendChild(tarjetaCantidad);

        let tarjetaBoton = document.createElement("button");
        tarjetaBoton.setAttribute("type", "button");
        tarjetaBoton.setAttribute("id", "btnComprar");
        tarjetaBoton.classList.add("btn", "btn-primary");
        tarjetaBoton.textContent = "Comprar";

        tarjetaBody.appendChild(tarjetaBoton);

        tarjetaDiv.appendChild(tarjetaBody);

        contenedorProductos.appendChild(tarjetaDiv);
    });
}

// Delegación de eventos para las compras
contenedorProductos.addEventListener("click", (e) => {

    if (e.target.id === "btnComprar") {
        const tarjetaBody = e.target.closest('.card-body');

        if (tarjetaBody) {
            let precio = tarjetaBody.querySelector(".precio").textContent.substring(8);
            let titulo = tarjetaBody.querySelector(".card-title").textContent;
            let cantidad = tarjetaBody.querySelector(".form-control").value;

            // Convertimos la cantidad a un número para las comparaciones
            cantidad = parseInt(cantidad);

            // Verificamos que la cantidad no sea mayor que 10
            if (cantidad > 10) {
                alert("La cantidad no puede ser mayor a 10.");
                return;  // No agregamos el producto si la cantidad supera 10
            }

            // Verificamos que la cantidad sea al menos 1
            if (cantidad < 1 || isNaN(cantidad)) {
                alert("La cantidad debe ser al menos 1.");
                return;  // No agregamos el producto si la cantidad es menor a 1
            }

            // Calculamos el total de esta entrada (cantidad * precio)
            let totalEntrada = cantidad * parseFloat(precio);

            // Actualizamos el total acumulado del carrito
            totalCarrito += totalEntrada;

            // Llamamos a la función para mostrar la entrada en el carrito
            mostrarEntradaCarrito(titulo, cantidad, precio);

            // Actualizamos el total en el encabezado
            let totalHeader = document.querySelector(".totalHeader");
            totalHeader.textContent = `Total: ${totalCarrito.toFixed(2)}€`; // Mostramos el total con 2 decimales
        }
    }
});

// Función para mostrar la entrada en el carrito (puedes reutilizarla de tu código actual)
let mostrarEntradaCarrito = function (titulo, cantidad, precio) {
    const contenedorCarrito = document.querySelector(".carrito");

    // El carrito será una tabla de objetos vinos que se van a comprar
    let tabla = document.createElement("table");
    let encabezadoTabla = document.createElement("thead");
    let cuerpoTabla = document.createElement("tbody");

    const encabezados = ["Nombre", "Cantidad", "Total"]; // Encabezados de la tabla

    let filaEncabezado = document.createElement("tr");

    encabezados.forEach(elementoArray => {
        let encabezado = document.createElement("th");
        encabezado.textContent = elementoArray;
        filaEncabezado.appendChild(encabezado);
    });

    encabezadoTabla.appendChild(filaEncabezado);

    let filaDatos = document.createElement("tr");

    encabezados.forEach((elementoArray, index) => {
        let campoDato = document.createElement("td");
        
        if (index === 0) {
            campoDato.classList.add("productoNombre");
            campoDato.textContent = titulo;
        } else if (index === 1) {
            campoDato.classList.add("productoCantidad");
            campoDato.textContent = cantidad;
        } else if (index === 2) {
            campoDato.classList.add("productoTotal");
            campoDato.textContent = (cantidad * parseFloat(precio)).toFixed(2); // Mostramos el total de esta entrada
        }

        filaDatos.appendChild(campoDato);
    });

    cuerpoTabla.appendChild(filaDatos);
    tabla.append(encabezadoTabla, cuerpoTabla);

    contenedorCarrito.appendChild(tabla);
}

const actualizarCarrito = function (contenedorCarrito) {
    contenedorCarrito.innerHTML = '';  // Limpiar el carrito actual antes de mostrarlo de nuevo

    let tabla = document.createElement("table");
    tabla.classList.add("table", "table-bordered");

    let encabezadoTabla = document.createElement("thead");
    let cuerpoTabla = document.createElement("tbody");

    const encabezados = ["Nombre", "Cantidad", "Total", "Acciones"];

    let filaEncabezado = document.createElement("tr");
    encabezados.forEach(elementoArray => {
        let encabezado = document.createElement("th");
        encabezado.textContent = elementoArray;
        filaEncabezado.appendChild(encabezado);
    });

    encabezadoTabla.appendChild(filaEncabezado);
    tabla.appendChild(encabezadoTabla);

    carrito.forEach((producto, index) => {
        let filaDatos = document.createElement("tr");

        let campoNombre = document.createElement("td");
        campoNombre.textContent = producto.nombre;
        filaDatos.appendChild(campoNombre);

        let campoCantidad = document.createElement("td");
        campoCantidad.textContent = producto.cantidad;
        filaDatos.appendChild(campoCantidad);

        let campoTotal = document.createElement("td");
        campoTotal.textContent = producto.total.toFixed(2) + "€";
        filaDatos.appendChild(campoTotal);

        let campoAcciones = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.setAttribute("data-index", index);
        campoAcciones.appendChild(btnEliminar);
        filaDatos.appendChild(campoAcciones);

        cuerpoTabla.appendChild(filaDatos);
    });

    tabla.appendChild(cuerpoTabla);
    contenedorCarrito.appendChild(tabla);
}

// Delegación de eventos para eliminar productos
document.querySelector(".carrito").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
        let index = e.target.getAttribute("data-index");
        carrito.splice(index, 1); // Elimina el producto del carrito
        actualizarCarrito(document.querySelector(".carrito")); // Actualiza el carrito en la interfaz
    }
});
