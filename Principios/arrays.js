//.MAP

const lista = [1, 2, 3, 4, 5, 8];
//Devuelve la lista alterada, MAP HACE COPIA SIN ALTERAR EL ARRAY ORIGINAL

//PARA LAMBDA, SE SUELE PONER UNA LETRA COMO E MÁS QUE UN NOMBRE COMPLETO PARA LA VARIABLE
const listaDouble = lista.map(e => {

    let numero = e * 2;
    numero += 8;
    return numero;

});

//const listaDouble = lista.map(e=>e); //devuelve la lista igual


//.FILTER

//console.log(listaDouble);
console.log(lista);

//Const listaResult= lista.filter(e=>)
    //LAMBDA

const listaResult = lista.filter(e => !(e%2)); //DEVUELVE LOS PARES, SIN ! DEVUELVE LOS IMPARES

console.log(listaResult);

// FUNCTION

/* const listaResult2 = lista.filter(e => {
    if (e%2) {
        console.log("en then ...",e);
        return true;
    }else {
        return false;

    }
}) */


//MÉTODO FIND

let buscarElemento = lista.find(e => e >2);

console.log(typeof buscarElemento);

//METODO FIND INDEX, puedes buscar por funciones.
let encontrado = lista.findIndex(e=>e>2);
console.log('encontrado', encontrado);
console.log(typeof encontrado);

//METODO INDEXOF, unicamente elementos 
let encontrado2 = lista.indexOf();
console.log('encontrado2', encontrado2);
console.log(typeof encontrado2);


//reducer
const array1 = [1,2,3,4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, current)=> accumulator + current, initialValue);
console.log(sumWithInitial);
