/*

Request for a person's age, if it is between 18 and 120 show a positive message, otherwise show a
different type of message.

*/

let age = parseInt(prompt("How old are you?"));

if (age >= 18 && age <= 120) {

    document.write("Woah, you're the prime of life")

} else {

    document.write("Hell, you're dead");

}