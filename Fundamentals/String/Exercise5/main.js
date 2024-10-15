/*
Write a JavaScript function to convert a 
string into abbreviated form
*/

let string = prompt("Type something");

let abbreviator = function (string) {

    let abbreviated = "";
    let spaceFound = false;

    // Read the string 
    for (let i = 0; i < string.length; i++) {

        //If you find a space
        if (string[i] === " ") {

            abbreviated += " " + string[i + 1].toUpperCase() +"."; // Add the first letter after the space (probably surname)
            spaceFound = true;
            i++; //We skip this symbol

        } else {

            if (!spaceFound) {

                //While you haven't found the space yet, write every character
                abbreviated += string[i];
            }
        }
    }

    return abbreviated;
}

document.write(`Original String: ${string} <br><br>

    Abbreviation: ${abbreviator(string)} <br>`);
