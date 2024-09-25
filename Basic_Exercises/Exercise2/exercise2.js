
//Values
let n1, n2;

//Functions
let sum = function (a, b) {

    return a + b;

}

let sub = function (a, b) {

    return a / b;

}

let multi = function (a, b) {

    return a * b;

}

let rest = function (a, b) {

    return a - b;

}

let isGreater = function (a, b) {

    return a > b;

}

n1 = parseInt(prompt("Type the first number"));
n2 = parseInt(prompt("Type the second number"));

//the output message should look like: 1 + x is Result
//Using template strings
//TENGO QUE USAR LAS COMILLAS RARAS
document.write(`The result of ${n1} plus ${n2} is: ${sum(n1, n2)} <br> <br>

The result of ${n1} minus ${n2} is: ${rest(n1, n2)} <br> <br>

The result of ${n1} minus ${n2} is: ${rest(n1, n2)} <br> <br>

The result of ${n1} by ${n2} is: ${multi(n1, n2)} <br> <br>

The result of ${n1} between ${n2} is: ${sub(n1, n2)} <br> <br>

Is greater ${n1} than ${n2}? ${isGreater(n1, n2)}

`);



