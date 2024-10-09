/*
* Programa en JavaScript para crear una
* tabla HTML desde una cadena CSV (String)
*/

function csvTable(csv) {

    const table = document.createElement("table");

    const thead = table.appendChild(document.createElement("thead"));

    const tbody = table.appendChild(document.createElement('tbody'));

    csv.split('\n').forEach((line, index) => {

        let parent;
        let cellTag;

        if (index === 0) {
            parent = thead;
            cellTag = 'th';

        } else {
            parent = tbody;
            cellTag = 'td';
        }


        const tr = parent.appendChild(document.createElement('tr'));
        line.split(',').forEach((cell) => {

            const cellElement = tr.appendChild(document.createElement(cellTag));
            cellElement.appendChild(document.createTextNode(cell.trim()));
        });
    });

    return table;
}


document.body.appendChild(csvTable(csv));
