
//Based on an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];

/* Create another array whose elements are
the square of each of the elements of the first array
*/

//Traditional function, it returns another array
let squares1 = function(array) {

    let squares = [];

    for (let i = 0; i < array.length; i++) {

        squares[i] = array[i] * array[i];

    }

    return squares;

      

};

//Mapping function
const squares2 = numbers.map(n => {

    let cuadrado = n * n;

    return cuadrado;


}

);

console.log("Traditional way: " +squares1(numbers));
console.log(`Modern way: ${squares2}  `);