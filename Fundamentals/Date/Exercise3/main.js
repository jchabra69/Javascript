
/* Write a function to display the current day and time in the following format
Tuesday. Now: 10PM 30:38
*/

const currentDate = new Date();

console.log(currentDate);

//0-6
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let displayDateInMyFormat = function (date) {

    return days[date.getDay()] + ".Now:" +date.toLocaleTimeString('en-US', {hour: 'numeric', hour12: true}) + ":" + date.getMinutes() + ":" + date.getSeconds();

    /* La solución de la hora encontrada en https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
    También puedo hacer una expresión regular

    Ya que date.getHours() lo devuelve en formato militar 24h
    * */
}

console.log(displayDateInMyFormat(currentDate));