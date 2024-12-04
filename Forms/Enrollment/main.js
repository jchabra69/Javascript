// Variables globales
let provincias = []; // Cargaremos el archivo provincias.json
let authorizedPeopleCount = 0;

// Limites
const MAX_AUTHORIZED_PEOPLE = 5;

// Función para cargar datos del archivo JSON
async function loadProvinciasData() {
    try {
        const response = await fetch("provincias.json");
        if (!response.ok) throw new Error("Error al cargar provincias.");
        provincias = await response.json();
        populateProvinces();
    } catch (error) {
        console.error(error);
    }
}

// Rellenar el selector de provincias
function populateProvinces() {
    const provinceSelect = document.getElementById("province-select");
    provincias.forEach((provincia) => {
        const option = document.createElement("option");
        option.value = provincia.id; // Usa un identificador único
        option.textContent = provincia.label;
        provinceSelect.appendChild(option);
    });
}

// Manejar el cambio de provincia para rellenar municipios
function handleProvinceChange(event) {
    const selectedProvinceId = event.target.value;
    const selectedProvince = provincias.find(
        (provincia) => provincia.id === selectedProvinceId
    );

    const townSelect = document.getElementById("town-select");
    townSelect.innerHTML = "<option value=''>Seleccione un municipio</option>";

    if (selectedProvince) {
        selectedProvince.provinces.forEach((municipio) => {
            const option = document.createElement("option");
            option.value = municipio.id;
            option.textContent = municipio.label;
            townSelect.appendChild(option);
        });
    }
}

// Manejar el cambio de municipio para rellenar localidades
function handleTownChange(event) {
    const selectedTownId = event.target.value;
    const selectedProvince = provincias.find((provincia) =>
        provincia.provinces.some((municipio) => municipio.id === selectedTownId)
    );

    const selectedTown = selectedProvince.provinces.find(
        (municipio) => municipio.id === selectedTownId
    );

    const localitySelect = document.getElementById("locality-select");
    localitySelect.innerHTML = "<option value=''>Seleccione una localidad</option>";

    if (selectedTown) {
        selectedTown.towns.forEach((localidad) => {
            const option = document.createElement("option");
            option.value = localidad.id;
            option.textContent = localidad.label;
            localitySelect.appendChild(option);
        });
    }
}

// Añadir un bloque de persona autorizada
function addAuthorizedPerson() {
    if (authorizedPeopleCount >= MAX_AUTHORIZED_PEOPLE) {
        alert("No puedes añadir más de 5 personas.");
        return;
    }

    authorizedPeopleCount++;

    const container = document.getElementById("authorized-people-container");

    const personDiv = document.createElement("div");
    personDiv.className = "person-container";
    personDiv.innerHTML = `
        <h5>Persona ${authorizedPeopleCount}</h5>
        <div class="mb-3">
            <label>Nombre:</label>
            <input type="text" class="form-control person-name" required>
        </div>
        <div class="mb-3">
            <label>Primer apellido:</label>
            <input type="text" class="form-control person-first-lastname" required>
        </div>
        <div class="mb-3">
            <label>NIF/NIE/Pasaporte:</label>
            <input type="text" class="form-control person-id" required>
        </div>
        <div class="mb-3">
            <label>Teléfono:</label>
            <input type="tel" class="form-control person-phone" required>
        </div>
    `;
    container.appendChild(personDiv);
}

// Mostrar los datos ingresados
function handleSubmit(event) {
    event.preventDefault();

    const province = document.getElementById("province-select").selectedOptions[0].textContent;
    const town = document.getElementById("town-select").selectedOptions[0].textContent;
    const locality = document.getElementById("locality-select").selectedOptions[0].textContent;

    const people = [...document.querySelectorAll(".person-container")].map((container) => {
        return {
            name: container.querySelector(".person-name").value,
            firstLastname: container.querySelector(".person-first-lastname").value,
            id: container.querySelector(".person-id").value,
            phone: container.querySelector(".person-phone").value,
        };
    });

    console.log({ province, town, locality, people });
    alert(JSON.stringify({ province, town, locality, people }, null, 2));
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
    loadProvinciasData();

    document
        .getElementById("province-select")
        .addEventListener("change", handleProvinceChange);
    document
        .getElementById("town-select")
        .addEventListener("change", handleTownChange);
    document
        .getElementById("add-person-btn")
        .addEventListener("click", addAuthorizedPerson);
    document
        .getElementById("enrollment-form")
        .addEventListener("submit", handleSubmit);
});
