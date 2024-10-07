
/*
*
* Using the function every, check if one array is exactly the same as another.
*
* */

const fruits = ["Apples", "Grapes", "Bananas", "Watermelons"]; //equal
const fruits2 = ["Apples", "Grapes", "Bananas", "Watermelons"]; //equal
const fruits3 = ["Apples", "Grapes", "Bananas", "Watermelons", "Strawberries"]; //different

function arraysAreEqual(array1, array2) {

    // //If I don't make this, I might have problems with the every
    if (array1.length !== array2.length) {

        return false;

    }

    // Use every to compare each element in both arrays

    return array1.every((element, index) => element === array2[index]);
}

console.log("Are these Arrays equals?");
console.log("First Array: " +fruits);
console.log("Second Array " +fruits2);
console.log(arraysAreEqual(fruits, fruits2) +"\n"); // true

console.log("Are these Arrays equals?");
console.log("First Array: " +fruits);
console.log("Second Array " +fruits3);

console.log(arraysAreEqual(fruits, fruits3)); // false
