
//Hasta que la página no se haya cargado, no comienzo a cargar los elementos y usar las escuchas
document.addEventListener("DOMContentLoaded", () => {

    cargarTarjetas(pelis);
    genders.sort(); // Los géneros deben ordenarse alfabéticamente
    cargarGeneros(genders);
    cargarPaises(countries);
    cargarFechas();

    eventoDetalle();

});


// Lo he hecho todo con create pensando que íbamos a cargar las 500 películas
let cargarTarjetas = function (peliculas) {
    let contenedorTarjetas = document.querySelector(".card-container");

    // Limpia las tarjetas existentes
    contenedorTarjetas.innerHTML = "";

    peliculas.forEach((pelicula, index) => {
        // Como son muchos elementos dinámicos, voy a usar createElement en vez de innerHTML
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card");

        let img = document.createElement("img");
        img.classList.add("card-image");
        img.setAttribute("src", pelicula.Images[0]); // Accedo a la primera imagen del array

        let tituloTarjeta = document.createElement("div");
        tituloTarjeta.classList.add("card-title");
        tituloTarjeta.textContent = pelicula.Title;

        // Creo el boton detalle
        let botonDetalle = document.createElement("button");
        botonDetalle.classList.add("btn-detalle");
        botonDetalle.textContent = "Detalle";
        botonDetalle.setAttribute("data-index", index); // Asignamos el índice para saber qué película

        let generos = document.createElement("div");
        generos.classList.add("card-genres");
        generos.textContent = pelicula.Genre;

        // Agrega todos los elementos a la tarjeta
        tarjeta.append(img, tituloTarjeta, botonDetalle, generos);
        contenedorTarjetas.append(tarjeta);
    });
};

// DELEGACIÓN DE EVENTOS PARA METERLE LISTENER A TODOS LOS BOTONES DETALLES GENERADOS
let eventoDetalle = function() {

    let contenedorTarjetas = document.querySelector(".card-container");

    contenedorTarjetas.addEventListener("click", (event) => {

        if (event.target && event.target.classList.contains("btn-detalle")) {

            // Segun el indice que tenga el boton
            let index = event.target.getAttribute("data-index");
            let peliculaSeleccionada = pelis[index];

            // Muestra su JSON al recibir evento click
            mostrarJSON(peliculaSeleccionada);
        }
    });
};

// Función para mostrar el JSON de la película
let mostrarJSON = function (pelicula) {
    const jsonOutput = document.getElementById("json");
    const jsonSalida = document.getElementById("json-salida");

    jsonSalida.style.display = "block";

    //El texto del code será el json del objeto pelicula
    jsonOutput.textContent = JSON.stringify(pelicula, null, 2);
};


// Debo ordenar los géneros
let cargarGeneros = function (generos) {
    let contenedorGeneros = document.querySelector(".genres");

    // Recorre todos los géneros
    generos.forEach((genero) => {
        // Y hazles un template string mandando html al contenedor para crearlos
        let checkboxGenero = `
         <input class = "gender" type="checkbox" name="${genero}" id="${genero}">
         <label for="${genero}">${genero}</label>
        `;
        contenedorGeneros.innerHTML += checkboxGenero;

        // Esta vez lo hago con innerHTML porque no son muchos datos y no creo que cambien muchos los géneros del array
    });
};

// Aquí también usaré innerHTML porque son unos pocos options
let cargarPaises = function (paises) {
    let contenedorPaises = document.querySelector(".select-countries");

    paises.forEach((pais) => {
        let optionPais = `
        <option value="${pais}">${pais}</option>
        `;
        contenedorPaises.innerHTML += optionPais;
    });
};

// Se deben cargar en los dos select la fecha desde el 2000 hasta la actual
let cargarFechas = function () {

    //Desde
    let contenedorFechasIniciales = document.querySelector("#select-year-init");
    //Hasta
    let contenedorFechasFines = document.querySelector("#select-year-end");

    let currentYear = new Date().getFullYear();

    for (let year = 2000; year <= currentYear; year++) {

        let optionYear = `<option value="${year}">${year}</option>`;
        contenedorFechasIniciales.innerHTML += optionYear;
        contenedorFechasFines.innerHTML += optionYear;

    }
};

let buscarPeliculas = function () {
    let busquedaTexto = document.querySelector("#busqueda").value.toLowerCase(); // Tomamos el texto del input de búsqueda
    let buscarPorTitle = document.querySelector("#title").checked; // Comprobamos si se seleccionó el checkbox de 'Title'
    let buscarPorDirector = document.querySelector("#director").checked; // Comprobamos si se seleccionó el checkbox de 'Director'
    let buscarPorActors = document.querySelector("#actors").checked; // Comprobamos si se seleccionó el checkbox de 'Actors'

    // Obtener el valor seleccionado del select de países
    let paisSeleccionado = document.querySelector(".select-countries").value;

    // Coge los géneros que haya activado el usuario.
    let generosSeleccionados = Array.from(document.querySelectorAll(".genres input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value);

    // Lee los años que ha puesto el usuario
    let yearStart = document.querySelector("#select-year-init").value;
    let yearEnd = document.querySelector("#select-year-end").value;

    // Buscamos las películas según lo qyue haya escrito el usuario y los checkboxes
    let peliculasFiltradas = pelis.filter(pelicula => {

        let titleMatch = buscarPorTitle && pelicula.Title.toLowerCase().includes(busquedaTexto); // Si se busca por título

        let directorMatch = buscarPorDirector && pelicula.Director.toLowerCase().includes(busquedaTexto); // Si se busca por director

        let actorsMatch = buscarPorActors && pelicula.Actors.toLowerCase().includes(busquedaTexto); // Si se busca por actores

        // Comprueba si alguno de los paises coincide
        let countryMatch = paisSeleccionado === "all" || pelicula.Country.includes(paisSeleccionado);

        // Comprueba si alguno de los coincides está en el objeto peli
        let genresMatch = generosSeleccionados.length === 0 || generosSeleccionados.some(genero => pelicula.Genre.toLowerCase().includes(genero.toLowerCase()));

        // Filtra por año si se especifica
        let yearMatch = true;

        //Desde -- Hasta
        if (yearStart && yearEnd) {
            yearMatch = pelicula.Year >= yearStart && pelicula.Year <= yearEnd;

        } else if (yearStart) {

            yearMatch = pelicula.Year >= yearStart;

        } else if (yearEnd) {

            yearMatch = pelicula.Year <= yearEnd;
        }

        // Si no se ha seleccionado ningún checkbox, busca en todos los campos
        if (!buscarPorTitle && !buscarPorDirector && !buscarPorActors) {

            titleMatch = pelicula.Title.toLowerCase().includes(busquedaTexto);

            directorMatch = pelicula.Director.toLowerCase().includes(busquedaTexto);

            actorsMatch = pelicula.Actors.toLowerCase().includes(busquedaTexto);
        }

        return (titleMatch || directorMatch || actorsMatch) && countryMatch && genresMatch && yearMatch; // Si hay alguna coincidencia, ponemoss la bandera a true para seguir adelante
    });

    // Entonces llamo a cargarTarjetas para generar las cards de este array filtrado acorde a nuestra búsqueda
    cargarTarjetas(peliculasFiltradas);
};

// Delegación de eventos para el botón Find
document.querySelector(".advanced-search").addEventListener("click", function (event) {

    if (event.target && event.target.tagName === "BUTTON") {

        buscarPeliculas(); // SI SE HA HECHO CLICK, LLAMA A LA FUNCIÓN QUE BUSCA Y CARGA LAS TARJETAS O NO
    }
});

document.querySelector(".genres").addEventListener("change", function (event) {

    if (event.target && event.target.id === "allGenders") {

        // Coge todos los checkboxes con la clase .gender
        document.querySelectorAll(".gender").forEach(checkbox => {
            checkbox.checked = event.target.checked; // Y activalos a marcados
        });
    }
});
