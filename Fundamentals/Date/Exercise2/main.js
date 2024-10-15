
//Write a function that receives a date and displays the corresponding day of the week as a String

//The format would be like day-month-year

let example = new Date(); //create an object with the current date

console.log("Objeto fecha normal: " +example);

const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

//it will receive an objet date which will be transformed into a string
let displayDateString = function (date) {

    //return date.toDateString(); okk but I need day this format: day-month-year (all number)
    return date.getDate() + '-' + (months[date.getMonth()]) + '-' + date.getFullYear();

    //getDay devuelve el número del día de la semana, del 0 al 6 puedo USAR date.getDate que si lo devuelve bien
    //getMonth es lo mismo pero el primer mes empieza desde 0 hasta 11
    //Para coger el nombre del mes debo hacer un array
}

console.log("Objeto fecha parseado a String: " +displayDateString(example));
