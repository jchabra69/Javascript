/*
Write a JavaScript function
to convert a string into camel case.
*/

let camelize = function(string) {

    let camel = "";
    let capitalizeNext = false;

    // remove leading/trailing spaces
    string = string.trim();

    for (let i = 0; i < string.length; i++) {
        
        if (string[i] === " ") {

            capitalizeNext = true;

        } else {

            if (capitalizeNext) {

                camel += string[i].toUpperCase();

                capitalizeNext = false;

            } else {

                camel += string[i].toLowerCase();
            }
        }
    }

    return camel.charAt(0).toUpperCase() + camel.slice(1); //The first character is uppercase
}

// Test Data
console.log(camelize("JavaScript exercises"));    
console.log(camelize("JavaScriptExercises"));     
console.log(camelize("  multiple   spaces  "));
console.log(camelize("hello world what"));
