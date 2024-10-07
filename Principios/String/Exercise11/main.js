/*Write a JavaScript function to uncommelize a string.*/


function uncamelize(str, delimiter = ' ') {

    let newStr = '';

    for (let i = 0; i < str.length; i++) {

        const char = str[i];

        // If the char is cap and isn't the first one, add the delimiter
        if (char === char.toUpperCase() && i !== 0) {

            newStr += delimiter; // Add the delimiter before the cap
        }

        newStr += char;
    }

    return newStr.toLowerCase(); //convert everything to lower case
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));