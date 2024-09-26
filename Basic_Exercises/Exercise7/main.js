// main.js

// Define an array of fruits
let fruits = ["Apple", "Orange", "Banana", "Strawberry", "Grapes", "Watermelon"];

// Display the list of fruits in the paragraph
const fruitList = document.getElementById("fruitList");
fruitList.innerHTML = fruits.join(", "); // Join the array elements into a string

// Select the button
const button = document.getElementById("posFruit");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Prompt the user to enter a fruit
    let asked = prompt("Type the name of the fruit to see the position:");

    // Check if the fruit is in the array
    if (fruits.includes(asked)) {
        document.write(`<br>The fruit ${asked} occupies the position ${fruits.indexOf(asked)}.`);
    } else {
        document.write(`<br>The fruit ${asked} is not in the list.`);
    }
});
