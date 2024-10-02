
/* Write a JavaScript program to replace 
every character in a given string with the character
following it in the alphabet.*/

//First of all, I'll need the alphabet
const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
];

let string = prompt("Write something: ");

let transformCharactersNextLetter = function (string) {
    

    let newString = '';

    // Reading every char from the string
    for (let i = 0; i < string.length; i++) {

        // My alphabet is in caps, so I'll need to make this
        let currentChar = string[i].toUpperCase();

        //If we have that character in our alphabet
        if (alphabet.includes(currentChar)) {

            // Track the current position
            let posicion = alphabet.indexOf(currentChar);

            //Then sum it a step
            let next = posicion + 1;

            newString += alphabet[next]; 

        } else {

            return "I'm sorry, your string doesn't match our alphabet";
        }
    }

    return newString; 
}


document.write(`Original String: ${string} <br>

    <br>
    
    Your String has been transformed to have the following characters <br>

    <br>
    New String: ${transformCharactersNextLetter(string)}

    `);