// Función para cargar la tabla de animales
function loadTable(animalsList) {
    const tableBody = document.getElementById('animalsTableBody');
    tableBody.innerHTML = '';  // Limpiar la tabla antes de cargar

    animalsList.forEach((animal, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${animal.name}</td>
            <td>${animal.species}</td>
            <td>${animal.foods.likes.join(', ')}</td>
            <td>${animal.foods.dislikes.join(', ')}</td>
            <td>
                <button class="btn btn-warning btn-sm" data-action="edit" data-index="${index}">Editar</button>
                <button class="btn btn-danger btn-sm" data-action="delete" data-index="${index}">Eliminar</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Función para editar un animal
function editAnimal(index) {
    const animal = animals[index];
    const newName = prompt("Nuevo nombre", animal.name);
    if (newName) {
        animal.name = newName;
        loadTable(animals);
    }
}

// Función para eliminar un animal
function deleteAnimal(index) {
    animals.splice(index, 1);
    loadTable(animals);
}

// Función para añadir un nuevo animal
function addAnimal() {
    const name = prompt("Nombre del nuevo animal");
    if (name) {
        const species = prompt("Especie del animal");
        const likes = prompt("Alimentos que le gustan (separados por coma)");
        const dislikes = prompt("Alimentos que no le gustan (separados por coma)");

        animals.push({
            name,
            species,
            foods: {
                likes: likes.split(',').map(item => item.trim()),
                dislikes: dislikes.split(',').map(item => item.trim())
            }
        });

        loadTable(animals);

    }
}

// Función para ordenar animales por nombre
function sortAnimals() {
    animals.sort((a, b) => a.name.localeCompare(b.name));
    loadTable(animals);
}

// Función para filtrar gatos
function filterCats() {
    const filtered = animals.filter(animal => animal.species === 'cat');
    loadTable(filtered);
}

// Delegación de eventos para botones
document.getElementById('animalsTable').addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    const index = event.target.dataset.index;

    if (action === 'edit') {
        editAnimal(index);
    } else if (action === 'delete') {
        deleteAnimal(index);
    }
});

// Delegación de eventos para los botones principales
document.getElementById('btnAdd').addEventListener('click', addAnimal);
document.getElementById('btnSort').addEventListener('click', sortAnimals);
document.getElementById('btnFilter').addEventListener('click', filterCats);

// Aseguramos que el código se ejecute cuando la página haya cargado
window.onload = function() {
    loadTable(animals);
};