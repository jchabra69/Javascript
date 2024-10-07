
/*Write a JavaScript function to capitalize
the first letter of each word in a string.*/

let capitalize_words = (str) => {

    //I'm going to make an array of words according to the spaces
    let wordsArray = str.split(" ");

    //Then I'll capitalize the first letter of every word
    let capitalizedArray = wordsArray.map(word => {

        //If the word isn't empty
        if (word.length > 0) {

            //Capitalize the first character and convert it to a string
            //slice will give me all the left characters starting from 1, like +E + xercises
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
    });

    return capitalizedArray.join(" ");
};

console.log(capitalize_words("js string exercises"));
console.log(capitalize_words("meow meow meow"));