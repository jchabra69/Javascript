let data = [];  // Variable global para almacenar los datos

// Función para obtener los datos
async function obtenerDatos() {
    try {
        const response = await fetch("provincias.json");

        if (!response.ok) {
            throw new Error("Could not find any data.");
        }

        data = await response.json();  // Guardamos los datos globalmente
        if (Array.isArray(data) && data.length > 0) {
            // Ordenar por defecto (alfabéticamente)
            ordenarDatos(data, "alpha", "asc");
            cargarComunidades(data);
        } else {
            console.error("No se encontraron comunidades.");
        }
    } catch (error) {
        console.error(error);
    }
}

// Debo asegurarme de que por defecto esté ordenado alfabéticamente todo
function ordenarDatos(data, criterio = 'alpha', orden = 'asc') {

    const comparador = (a, b) => {
        let result = 0;

        if (criterio === 'alpha') {
            result = a.label.localeCompare(b.label);
        } else if (criterio === 'towns') {
            // Aquí se compara el número de pueblos (towns.length)
            result = a.towns.length - b.towns.length;
        }

        // Si el orden es descendente, invertir el resultado
        return orden === 'asc' ? result : -result;
    };

    // Ordena comunidades
    data.sort(comparador);

    // Ordena provincias dentro de cada comunidad
    data.forEach(comunidad => {
        comunidad.provinces.sort(comparador);

        // Ordena pueblos dentro de cada provincia
        comunidad.provinces.forEach(province => {
            province.towns.sort(comparador);
        });
    });
}

// Función para crear el acordeón de la comunidad
function crearAcordeonComunidad(comunidad, index) {

    let acordeon = `
        <div class="accordion-item">
            <h2 class="accordion-community" id="flush-heading${index}">
                <!-- Debo mostrar el total de provincias -->
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                    ${comunidad.label} <br>
                    ${comunidad.provinces.length} provincias
                </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
    `;

    comunidad.provinces.forEach((province, provinceIndex) => {
        acordeon += crearAcordeonProvincia(province, provinceIndex, index);
    });

    acordeon += `</div></div></div>`;
    return acordeon;
}

// Función para crear el acordeón de la provincia
function crearAcordeonProvincia(province, provinceIndex, communityIndex) {

    const totalPueblos = province.towns.length;

    let provinciaAcordeon = `
        <div class="accordion-item">
            <h2 class="accordion-province" id="flush-heading${communityIndex}-${provinceIndex}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse${communityIndex}-${provinceIndex}" aria-expanded="false" aria-controls="flush-collapse${communityIndex}-${provinceIndex}">
                    ${province.label} <span class="btn btn-primary btn-circle">${totalPueblos}</span>
                </button>
            </h2>
            <div id="flush-collapse${communityIndex}-${provinceIndex}" class="accordion-collapse collapse" aria-labelledby="flush-heading${communityIndex}-${provinceIndex}"
                data-bs-parent="#flush-collapse${communityIndex}">
                <div class="accordion-body">
    `;

    province.towns.forEach((town, townIndex) => {
        provinciaAcordeon += crearAcordeonPueblo(town, townIndex, communityIndex, provinceIndex);
    });

    provinciaAcordeon += `</div></div></div>`;
    return provinciaAcordeon;
}

// Función para crear el acordeón del pueblo
function crearAcordeonPueblo(town, townIndex, communityIndex, provinceIndex) {
    return `
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${communityIndex}-${provinceIndex}-${townIndex}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse${communityIndex}-${provinceIndex}-${townIndex}" aria-expanded="false" aria-controls="flush-collapse${communityIndex}-${provinceIndex}-${townIndex}">
                    ${town.label}
                </button>
            </h2>
            <div id="flush-collapse${communityIndex}-${provinceIndex}-${townIndex}" class="accordion-collapse collapse" aria-labelledby="flush-heading${communityIndex}-${provinceIndex}-${townIndex}"
                data-bs-parent="#flush-collapse${communityIndex}-${provinceIndex}">
                <div class="accordion-body">
                    ...
                </div>
            </div>
        </div>
    `;
}

// Función para renderizar las comunidades
function cargarComunidades(data) {

    const contenedorAcordeones = document.querySelector(".accordion");
    let acordeonesHTML = '';

    data.forEach((comunidad, index) => {
        acordeonesHTML += crearAcordeonComunidad(comunidad, index);
    });

    // Insertar todo el contenido al DOM de una sola vez
    contenedorAcordeones.innerHTML = acordeonesHTML;
}

// Tengo que hacer delegación de eventos ahora para ver si quieren ordenar
const contenedorOrdenar = document.querySelector(".container-sort");

contenedorOrdenar.addEventListener("change", (event) => {

    const sortBy = document.getElementById('sort-select').value;  // Obtenemos el tipo de orden
    const sortMode = document.getElementById('sort-mode').value; // Obtenemos el modo de orden

    // Aquí reordenamos los datos según la selección y luego los recargamos
    ordenarDatos(data, sortBy, sortMode);
    cargarComunidades(data);  // Volver a renderizar los acordeones después de ordenar
});

// Llamada para obtener y mostrar los datos
obtenerDatos();
