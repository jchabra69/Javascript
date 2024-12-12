/*Escribe una función que muestre el número de propiedades del objeto y que
devuelva la suma de todos los salarios utilizando Object.values y el bucle for...of*/

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Susana": 300,
    "Luis": 500,
    "David": 100,
    "Paco": 333,

};


let leerKeysValores = function (array) {

    let sumaValores = 0;  // IMPORTANTE
    
    let numClaves = Object.keys(array).length;

    // Mostrar nº personas y la suma de los salarios
    for (let [key, value] of Object.entries(array)) {

        // Si el valor es un número, sumamos
        if (!isNaN(value)) {

            sumaValores += parseFloat(value);
        }

        // LA KEY SIEMPRE ES STRING, NO HAY QUE HACER EL CHECKING
        console.log(); 
    }

    console.log(`La suma de los salarios es: ${sumaValores}`);
    console.log(`Hay un total de ${numClaves} claves`)
};


leerKeysValores(salaries);