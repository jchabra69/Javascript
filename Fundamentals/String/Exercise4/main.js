/*
Write a JavaScript function to extract a 
specified number of characters from a string.
*/

let string = prompt("Type something");
let size = parseInt(prompt("Now, give me a size to extract a numbers of characters until there"));

let truncateString = function(string, tamano) {

  return string.substr(0, tamano);

}

document.write(`Original String: ${string} <br>

    <br>

    You've asked for: ${size} characeters, here you are <br>

    ${truncateString(string, size)}

    `);