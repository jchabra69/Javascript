// Al cargar la página se mostrarán los nombres de todos los países
document.addEventListener("DOMContentLoaded", () => {

    // El array continentes contiene el array de países
    // Por lo tanto debo ordenarlo y mostrarlo en la tabla

    let copiaOrdenada = []; // Creamos una copia para evitar la modificación directa del array original

    // Primero debo leer los continentes
    companies.forEach(continent => {

        // console.log(continent.countries); // Ver el array de países por continente (comentado)

        // Agregamos todos los países a la copia del array
        copiaOrdenada.push(...continent.countries);

        // No es necesario ordenar dentro de forEach, lo hacemos después de agregar todos los países
        let paisesOrdenados = copiaOrdenada.sort((a, b) => a.name.localeCompare(b.name));

        // Llamar a la función para cargar los países ordenados
        cargarPaises(paisesOrdenados);

        /* Entonces leo los países
        continent.countries.forEach(country => {
        })*/

    })

})



//Como los tr pueden ser dinamicos por el nº de paises, es mejor crearlos desde JS
let cargarPaises = function (countries) {

    let cuerpoTabla = document.querySelector(".cuerpo-tabla");

    //Ahora por tantos paises haya, crea una fila
    countries.forEach(country => {

        //Crea la  fila
        let filaPais = document.createElement("tr");
        filaPais.classList.add("filaPais");

        cuerpoTabla.append(filaPais);

        //Y en esa fila, carga un pais
        let campoPais = document.createElement("td");
        campoPais.classList.add("campo-pais");

        //Si no uso textContent, se junta todo y no crea bien el td
        campoPais.textContent = country.name

        //RECUERDA QUE EL TD VA DENTRO DEL TR!, EN ESTE CASO LO LLAMO filaPais
        filaPais.append(campoPais);

        //En la 2ª columna de la tabla debo mostrar el total de compañias que tiene ese país
        let campoNumeroCompanies = document.createElement("td");
        campoNumeroCompanies.classList.add("campo-companies");

        campoNumeroCompanies.textContent = country.companies.length;

        filaPais.append(campoNumeroCompanies);

        //Finalmente muestro los nombres de las compañias
        let campoNombreCompany = document.createElement("td");

        //Tengo que recorrer las compañias del pais
        country.companies.forEach(company => {

            //campoNombreCompany.textContent = JSON.stringify(company);

            //Debo coger el texto antes de los :, recuerda que company es un objeto
            campoNombreCompany.textContent = Object.keys(company)[0];
            /*Object.keys devuelve un arreglo de todas las claves del objeto, al leer en la pos0 me va a devolver la primera jejej */

        })



        filaPais.append(campoNombreCompany);

    })

}

// Función para limpiar la tabla antes de cargar nuevos datos
function limpiarTabla() {
    let cuerpoTabla = document.querySelector(".cuerpo-tabla");
    cuerpoTabla.innerHTML = ''; // Esto borra todo el contenido dentro del tbody
}

// Delegación de eventos para el filtrado
const criterios = document.querySelector(".container-filtros");

criterios.addEventListener("change", e => {

    console.log(e.target.value);

    // Filtrar los países según el continente seleccionado
    let paisesFiltrados = [];

    // Limpiar la tabla antes de cargar los nuevos países
    limpiarTabla();

    // Filtrar los países por el continente seleccionado
    companies.forEach(continent => {

        // Comparar el continente seleccionado con el continente en los datos (ignorando mayúsculas/minúsculas)
        //IMPORTANTE ACCEDER A LA KEY CONTINENT, continent es nuestro primer elemento
        if (continent.continent === e.target.value) {
            paisesFiltrados = continent.countries;
        }
    });

    // Ordenar los países filtrados
    paisesFiltrados = paisesFiltrados.sort((a, b) => a.name.localeCompare(b.name));

    // Cargar los países filtrados en la tabla
    cargarPaises(paisesFiltrados);
});

// Delegación de eventos para los botones de ocultar columnas
const toggleButtonsContainer = document.getElementById("toggle-buttons");

toggleButtonsContainer.addEventListener("click", (e) => {
    // Verificar que se haya hecho clic en un botón
    if (e.target.tagName === "BUTTON") {
        const columnIndex = e.target.getAttribute("data-column"); // Obtener el índice de la columna

        // Llamar a la función para ocultar o mostrar la columna correspondiente
        toggleColumnVisibility(parseInt(columnIndex));
    }
});

// Función para alternar la visibilidad de una columna
function toggleColumnVisibility(columnIndex) {
    const rows = document.querySelectorAll("#table-companies tbody tr");
    const header = document.querySelectorAll("thead th");

    // Alternar visibilidad de la columna correspondiente en los encabezados
    header[columnIndex].classList.toggle("hidden");

    rows.forEach(row => {
        const cell = row.children[columnIndex];
        cell.classList.toggle("hidden"); // Utiliza la clase 'hidden' que ya has definido
    });
}




