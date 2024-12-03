const tabla = document.querySelector(".miTabla");

// Single handler event
tabla.addEventListener("click", (e) => {

    if (e.target.tagName === "TD") {
        // Ponla verde
        e.target.classList.toggle("fila-activa");

        // If the Ctrl key is held down simultaneously it will change to red
        if (e.ctrlKey) {
            e.target.classList.add("fila-activa-ctrl");
        } else {
            e.target.classList.remove("fila-activa-ctrl");
        }

        // If Shift is pressed it will change to blue.
        if (e.shiftKey) {
            e.target.classList.add("fila-activa-shift");
        } else {
            e.target.classList.remove("fila-activa-shift");
        }

        // El nodoPadre es el <tr>
        const nodoPadre = e.target.parentNode;


        // Por lo tanto, si obtengo sus hijos, tengo los hermanos del td
        const tdsHermanos = Array.from(nodoPadre.children);

        // Limpia las clases de todas las celdas de la fila
        tdsHermanos.forEach(hermano => {
            hermano.classList.remove("fila-hermanos-activa");
        });

        // Aplica la clase "fila-hermanos-activa" a todos los hermanos menos al clicado
        tdsHermanos.forEach(hermano => {
            if (hermano !== e.target) {
                hermano.classList.add("fila-hermanos-activa");
            }
        });

        // Crear el objeto con la información de la celda, fila y columna
        const selectedCellInfo = {
            tag: e.target.tagName,          // Etiqueta de la celda
            id: e.target.id,                // ID de la celda
            textContent: e.target.textContent, // Contenido de la celda
            row: [],                        // Lista de contenidos de la fila
            column: []   ,                   // Lista de contenidos de la columna
            rowIndex: nodoPadre.rowIndex
        };

        // Fila
        const rowCells = Array.from(nodoPadre.children);
        selectedCellInfo.row = rowCells.map(cell => cell.textContent);

        // Columna
        const columnCells = Array.from(tabla.querySelectorAll(`td:nth-child(${e.target.cellIndex + 1})`));
        selectedCellInfo.column = columnCells.map(cell => cell.textContent)


        // Crea la cadena de texto con la información
        const displayText = `
            <strong>Row Number:</strong> ${selectedCellInfo.rowIndex}<br>
            <strong>Tag:</strong> ${selectedCellInfo.tag}<br>
            <strong>ID:</strong> ${selectedCellInfo.id || 'None'}<br>
            <strong>Text Content:</strong> ${selectedCellInfo.textContent}<br>
            <strong>Row Content:</strong>
            <ul>${selectedCellInfo.row.map(item => `<li>${item}</li>`).join('')}</ul>
            <strong>Column Content:</strong>
            <ul>${selectedCellInfo.column.map(item => `<li>${item}</li>`).join('')}</ul>
            <strong>Alive:</strong> ${selectedCellInfo.alive}<br>
        `;

        // Cambiar de <pre> a <div>
        const infoContainer = document.getElementById("selected-info");
        infoContainer.innerHTML = displayText

        // Ahora, si se clica cualquier elemento td, se lee toda la fila para cargarla en el formulario
        const nombre = rowCells[0].textContent;
        const apellido = rowCells[1].textContent;
        const edad = rowCells[2].textContent;
        const vivo = rowCells[3].textContent;

        // Rellena el formulario con los valores de la fila
        document.querySelector('#input-name').value = nombre;
        document.querySelector('#input-surname').value = apellido;
        document.querySelector('#input-age').value = edad;
        document.querySelector('#input-alive').checked = vivo.includes('check');
    }

    // Función de eliminar
    if (e.target.classList.contains("fa-trash") || e.target.closest(".btn-trash")) {
        // Encuentra la fila del botón clicado
        const fila = e.target.closest("tr");

        // Elimina la fila
        fila.remove();
    }

});



// Cuando el formulario es enviado
const formulario = document.querySelector('.form-group');

formulario.addEventListener('submit', (e) => {

    e.preventDefault(); // No tenemos backend

    // Obtén los valores del formulario
    const nombre = document.querySelector('#input-name').value;
    const apellido = document.querySelector('#input-surname').value;
    const edad = document.querySelector('#input-age').value;
    const vivo = document.querySelector('#input-alive').checked;

    // Encuentra la fila activa (la que fue seleccionada previamente)
    const filaActiva = document.querySelector(".fila-activa");

    // Si existe una fila activa, actualiza sus celdas
    if (filaActiva) {
        filaActiva.children[0].textContent = nombre;
        filaActiva.children[1].textContent = apellido;
        filaActiva.children[2].textContent = edad;
        filaActiva.children[3].innerHTML = vivo ? '<i class="fa-solid fa-check"></i>' : ''; // Añade el icono de check si está marcado
    } else {
        // Si no hay fila activa, muestra un mensaje
        alert('Por favor, selecciona una fila para editar.');
    }
});
