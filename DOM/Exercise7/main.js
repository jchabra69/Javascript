

/* Create a function that requests the number of columns and rows of a table
and the HEIGHT and WIDTH (in pixels) of its cells.
*/

//Ahora hay que estilizar las columnas (Primera fila de la tabla con su th)
//Es impar la fila? Si no lo es, es par


let createTable = function (numberColumns, numberRows, customHeight, customWidth) {

    //Crea la tabla
    const table = document.createElement("table");
    table.className = "myCustomTable";
    //Metela en el HTML
    document.body.appendChild(table);

    // Crea tantas filas como me digan
    for (let i = 0; i <= numberRows; i++) {

        const rows = document.createElement("tr");

        rows.className = "normalRow";

        // Crea las celdas dentro de cada fila, estas dependen del número de columnas también para rellenar todo
        for (let j = 0; j <= numberColumns; j++) {

            // La primera fila son los encabezados, si ya no es la primera fila empieza a hacer tds
            const cells = i === 0 ? document.createElement("th"): document.createElement("td");

            cells.textContent = i === 0 ? "Columna" +j : "cell " +i;
            cells.className = i === 0 ? "header" : "registers";

            //Solo para las columnas, aplica
            if (i === 0) {

                //Si es par, le pones un rojo yo k se
                if (j % 2 === 0) {
                    cells.style.backgroundColor = "lightcoral";
                //En otro caso, es impar, así que metele un azul
                } else {
                    cells.style.backgroundColor = "lightblue"; // Apply blue for odd columns
                }
            }

            //Estas celdas, tienen que tener una altura y ancho personalizado (en pixeles)
            cells.style.height = customHeight + "px";
            cells.style.width = customWidth + "px";

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

