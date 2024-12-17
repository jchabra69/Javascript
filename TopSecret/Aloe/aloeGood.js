// Definimos los productos (vinos en este caso) con sus datos
const vinos = [
    { nombre: "Aloe 1", precio: 20.99, stock: 10, imagen: "assets/img/foodplants/aloevera/aloe1.jpg" },
    { nombre: "Aloe 2", precio: 15.00, stock: 13, imagen: "assets/img/foodplants/aloevera/aloe2.jpg" },
    { nombre: "Aloe 3", precio: 10.00, stock: 30, imagen: "assets/img/foodplants/aloevera/aloe3.jpg" },
    { nombre: "Aloe 4", precio: 18.50, stock: 3, imagen: "assets/img/foodplants/aloevera/aloe4.jpg" },
    { nombre: "Aloe 5", precio: 5.00, stock: 10, imagen: "assets/img/foodplants/aloevera/aloe5.jpg" }
];

// El carrito donde vamos metiendo los productos que "compramos"
const carrito = [];
let totalCarrito = 0; // Aquí vamos sumando el total del carrito

// Al cargar la página, vamos a mostrar los productos
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(); // Esta función muestra los productos en pantalla
});

// Función para mostrar los productos en el navegador
const mostrarProductos = () => {
    const contenedorProductos = document.querySelector(".productos"); // Esto es donde vamos a meter las tarjetas
    vinos.forEach((vino, index) => {
        // Creamos una tarjeta para cada producto
        const tarjetaDiv = document.createElement("div");
        tarjetaDiv.classList.add("card", "border-dark", `card${index}`);
        
        // Creamos la imagen del producto
        const tarjetaImg = document.createElement("img");
        tarjetaImg.setAttribute("src", vino.imagen);
        tarjetaImg.setAttribute("alt", "Card Img");
        tarjetaImg.classList.add("card-img-top");

        // Creamos el cuerpo de la tarjeta
        const tarjetaBody = document.createElement("div");
        tarjetaBody.classList.add("card-body");

        // Aquí metemos los datos del producto: nombre, precio, stock, cantidad y botón
        tarjetaBody.innerHTML = `
            <h5 class="card-title">${vino.nombre}</h5>
            <p class="card-text precio">Precio: ${vino.precio}€</p>
            <p class="card-text">Stock: ${vino.stock}</p>
            <input type="number" min="1" max="10" placeholder="Cantidad" class="form-control mb-2" />
            <button type="button" class="btn btn-primary">Comprar</button>
        `;

        // Añadimos la imagen y el cuerpo dentro de la tarjeta, y luego metemos la tarjeta en el contenedor
        tarjetaDiv.append(tarjetaImg, tarjetaBody);
        contenedorProductos.appendChild(tarjetaDiv);
    });
};

// Función que se ejecuta cuando le damos al botón "Comprar"
document.querySelector(".productos").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") { // Si lo que clicamos es un botón
        const tarjetaBody = e.target.closest('.card-body'); // Conseguimos el cuerpo de la tarjeta
        const precio = parseFloat(tarjetaBody.querySelector(".precio").textContent.split(":")[1]);
        const titulo = tarjetaBody.querySelector(".card-title").textContent;
        let cantidad = parseInt(tarjetaBody.querySelector(".form-control").value);

        // Si la cantidad no es válida, le decimos al usuario que está mal
        if (cantidad < 1 || cantidad > 10 || isNaN(cantidad)) {
            alert("La cantidad debe ser entre 1 y 10.");
            return;
        }

        // Buscamos si el producto ya está en el carrito
        const productoExistente = carrito.find(producto => producto.nombre === titulo);
        if (productoExistente) {
            // Si ya está, simplemente aumentamos la cantidad y recalculamos el total
            productoExistente.cantidad += cantidad;
            productoExistente.total = productoExistente.cantidad * precio;
        } else {
            // Si no está en el carrito, lo metemos como un nuevo producto
            carrito.push({ nombre: titulo, cantidad, precio, total: cantidad * precio });
        }

        // Recalculamos el total del carrito sumando todos los productos
        totalCarrito = carrito.reduce((total, producto) => total + producto.total, 0);
        document.querySelector(".totalHeader").textContent = `Total: ${totalCarrito.toFixed(2)}€`;

        // Actualizamos el carrito en la interfaz con los nuevos datos
        actualizarCarrito();
    }
});

// Función para actualizar el carrito y mostrarlo en pantalla
const actualizarCarrito = () => {
    const contenedorCarrito = document.querySelector(".carrito");
    contenedorCarrito.innerHTML = "";  // Limpiamos el carrito antes de mostrar los nuevos productos

    carrito.forEach((producto, index) => {
        // Creamos una fila para cada producto en el carrito
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.total.toFixed(2)}€</td>
            <td><button class="btn btn-danger" data-index="${index}">Eliminar</button></td>
        `;

        // Le añadimos el evento para eliminar productos
        const btnEliminar = fila.querySelector("button");
        btnEliminar.addEventListener("click", () => eliminarProducto(index, producto.cantidad, producto.precio));

        contenedorCarrito.appendChild(fila); // Añadimos la fila a la tabla
    });
};

// Función para eliminar productos del carrito
const eliminarProducto = (index, cantidad, precio) => {
    // Eliminamos el producto del carrito
    carrito.splice(index, 1);

    // Restamos el total del carrito
    totalCarrito -= cantidad * precio;
    document.querySelector(".totalHeader").textContent = `Total: ${totalCarrito.toFixed(2)}€`;

    // Actualizamos la vista del carrito
    actualizarCarrito();
};
