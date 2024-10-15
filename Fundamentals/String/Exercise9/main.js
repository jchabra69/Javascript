
/*
Write a JavaScript function that takes a string with both lowercase and upper case letters
as a parameter. It converts upper case letters to lower case, and lower case letters to
upper case.
*/

let text = prompt("Type something: ");

let swapcase = function (string) {
    let newText = "";

    for (let i = 0; i < string.length; i++) {

        if (string[i] === string[i].toUpperCase()) {

            newText += string[i].toLowerCase();

        } else {

            newText += string[i].toUpperCase();
        }
    }

    return newText;
}

console.log(swapcase("Hola"));

document.write(`Original String: ${text} <br>
    
    New String: ${swapcase(text)}
    
    `



);