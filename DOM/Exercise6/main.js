

/* Create a function that requests the number of columns and rows of a table
and the HEIGHT and WIDTH (in pixels) of its cells.
*/

let createTable = function (numberColumns, numberRows, customHeight, customWidth) {

    //Crea la tabla
    const table = document.createElement("table");
    //Metela en el HTML
    document.body.appendChild(table);

    // Crea tantas filas como me digan
    for (let i = 0; i < numberRows; i++) {

        const rows = document.createElement("tr");

        // Crea las celdas dentro de cada fila, estas dependen del número de columnas también para rellenar todo
        for (let j = 0; j < numberColumns; j++) {

            // La primera fila son los encabezados, si ya no es la primera fila empieza a hacer tds
            const cells = i === 0 ? document.createElement("th") : document.createElement("td");

            //Estas celdas, tienen que tener una altura y ancho personalizado (en pixeles)
            cells.style.height = customHeight + "px";
            cells.style.width = customWidth + "px";

            //Contenido de la celda
            cells.textContent = "cell " +i;

            //
            rows.appendChild(cells);
        }
        // Agrega la fila a la tabla
        table.appendChild(rows);
    }
};

//When the page has loaded
window.addEventListener("load", function () {
    createTable(4, 8, 50, 100);

});

