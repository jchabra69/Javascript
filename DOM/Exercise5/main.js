
//Create an array with the RGB values of some colours
const rgbColors = [
    [255, 0, 0],      // Rojo
    [0, 255, 0],      // Verde
    [0, 0, 255],      // Azul
    [255, 255, 0],    // Amarillo
    [0, 255, 255],    // Cian
    [255, 0, 255],    // Magenta
    [128, 0, 0],      // Marrón oscuro
    [0, 128, 0],      // Verde oscuro
    [0, 0, 128],      // Azul oscuro
    [192, 192, 192],  // Gris claro
    [255, 165, 0],    // Naranja
    [75, 0, 130],     // Índigo
    [255, 105, 180],  // Rosa intenso
    [0, 0, 0],        // Negro
    [255, 255, 255]   // Blanco
];

/*Create a function that goes through all the cells of a table
and assigns, consecutively, to each cell one of the colours of the array
*/

let highlightTable = function () {

    const table = document.querySelector(".colorfulTable");
    const myRows = table.tBodies[0].rows;

    let index = 0;  // Track of colors

    
    for (let i = 0; i < myRows.length; i++) {

        const row = myRows[i];

        const color = rgbColors[index % rgbColors.length];

        // Apply the color
        row.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

        // Next color
        index++;
    }
}

window.addEventListener('load', function() {
    highlightTable();  // Call the function without needing a parameter
});
