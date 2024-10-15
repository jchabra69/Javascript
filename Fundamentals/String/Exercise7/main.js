
/*Write a JavaScript function to parameterize a string.*/

//g es para reemplazar x todas las ocurrencias
//Recuerda que este devuelve un nuevo string, no modifica el original

let string_parameterize = (string) => {

    let newStr = string.replace(/ /g, "-").toLowerCase();

    console.log(newStr);
};

string_parameterize("Robin Singh from USA.");