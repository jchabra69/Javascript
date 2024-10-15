/*
*
* Taking into account the current course:
- how many days have passed since September 15?
- how many mondays? Which ones?
*
* */

//Function to calculate a difference between two dates

let currentDate = new Date(); //Current date 15/10/2024
let specificDate = new Date("09/15/2024\"");

let compareDates = (date1, date2) => {

    //I have to subtract both dates
    let difference = date1.getTime() - date2.getTime(); //returns Unix time

    // Parse ms to days (1000 ms * 60 sec * 60 min * 24 hours)
    difference = Math.round(difference / (1000 * 60 * 60 * 24));

    return difference;

}

//Me queda por hacer lo de cuantos lunes han pasado y cuáles

console.log("Hay una diferencia de: " +compareDates(currentDate, specificDate) + " días");


