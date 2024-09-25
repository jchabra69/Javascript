
let a, b, result;

num1 = parseInt(prompt('Type the first number '));
num2 = parseInt(prompt('Type the second number '));

//Convierto en un numero una variable si le pongo un + o - delante
result = num1 + num2;

//First off, display them in console with a line break
console.log(result + "\n" + "The link break is working!");

//After that, with alert
alert(result + "\n" + "The link break is working!");

//In addition, body
document.write("Solution: " + result + "<br> <br>" + "testing line break"); //WORKING

//Finally, an existing paragraph from the body
//Para objetos siempre usar const
const paragraph = document.querySelector("p");
paragraph.innerHTML = result;
