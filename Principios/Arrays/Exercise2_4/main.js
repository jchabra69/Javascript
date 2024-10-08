
/*
*
* Clone a one-dimensional array.
* Make changes to the cloned array. Check if
everything works as expected.
* */
let fruits = ["banana", "orange", "apple", "lemon", "strawberry", "watermelon", "grape"];

let clonedFruits = [...fruits];

// I make some changes
clonedFruits[1] = "blueberry";
console.log("Original Array: ", fruits);
console.log("Cloned Array: ", clonedFruits);


// Two-dimensional array
let originalArray = [
    ["banana", "orange"],
    ["apple", "lemon"],
    ["strawberry", "watermelon", "grape"]
];

// 2D Array
let clonedFruits2D = originalArray.map(innerArray => [...innerArray]);

// Modify the cloned array and one of the internal arrays
clonedFruits2D[0][1] = "blueberry";
originalArray[2][1] = "kiwi";

console.log("Original Array: ", originalArray);
console.log("Cloned Array: ", clonedFruits2D);
