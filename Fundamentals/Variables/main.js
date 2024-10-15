let number = 6;

console.log(number);

number = 77;
console.log(number);

number = "holiwis, ves? El lenguaje no es fuertemente tipado"

console.log(number);

number = [1, 4, 6, "abc", false]; //EN JAVA SERÍA IMPOSIBLE HACER ESTO

console.log(number);

//Los objetos se crean con Class, como en Java

let persona = {}; //Otra opción

console.log(typeof number); //type of dice de qué tipo es la variable

let hoy = new Date();
console.log(hoy);

//EL OBJETO NO PODRÁ CAMBIAR, PERO SI SUS ATRIBUTOS
const employee =  { name: "Jose", age: 30, joven : false

};

const salary = 1000;
employee.age = 31;

let employee2 = {name: "Peter", age: 21};

//NO COPIA, APUNTA A LA DIRECCIÓN DE MEMORIA EL OBJETO
//POR LO QUE DARÍA IGUAL QUE TUVIERAN DISTINTOS ATRIBUTOS
employee2.name = "Aa";

employee2 = employee;

console.log(employee);
console.log (employee2);
