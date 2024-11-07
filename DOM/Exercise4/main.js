/*
Create a page with a text field and a button that each time...
*/

let doesExistList = function () {

    return document.querySelector("ol") !== null;

}

//Then let's make myFunction - handler

//Cuando el botón se presione, se almacenará en la lista lo que haya escrito el usuario
//Especificamente en la parte superior de una lista ordenada HTML
let handler = function () {

    //RECUERDA QUE PARA LOS INPUT SE COGE POR .value
    //let text = document.querySelector(".textBox").innerText;
    let text = document.querySelector(".textBox").value;

    //Si no existe
    if (!doesExistList()) {

        //Crea la lista
        const ol = document.createElement("ol");
        ol.className = "sortedList"; //útil para luego
        //Que risa, si no hago esto obviamente la ol no saldrá en el body
        document.body.appendChild(ol);


     //Si ya está creada, identificala y agregale
    }

        const existentList = document.querySelector(".sortedList")

        //Simplemente agrega un li por cada value que pongan
        //Pero ese value se pone al principio de la lista
        const newItem = document.createElement("li");
        newItem.textContent = text;

        existentList.insertBefore(newItem, existentList.firstChild);

}


//Let's search my button
const button = document.querySelector(".bWrite").addEventListener("click", handler);