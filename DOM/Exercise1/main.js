//Find elements in table.html

//a
const filterbyID = document.getElementById("age-table");

console.log(filterbyID);

//b
const allLabels = document.getElementsByTagName("label");

for (let label of allLabels) {

    console.log(label);

}

//c Returns the first td with the word age 
const allTds = document.getElementsByTagName("td");

const firstTdwithFilter = Array.from(allTds).find(td => td.textContent == "Age");

if (firstTdwithFilter) {
    console.log(firstTdwithFilter); // Imprime el <td> que contiene "Age"
}

//Cuando se devuelve una colección, hay que recorrerla para acceder al value
 /* for (let td of allTds) {

    if (td.textContent === "Age") {

        console.log(td);

    }

} */

const elementsThatName = document.getElementsByName("search");

console.log(elementsThatName);

for (let element of elementsThatName) {

    const input = element.querySelector("input");

    //Si hay un input, devuelveme el primero y ultimo
    if (input) {

        console.log(element.firstElementChild);
        console.log(element.lastElementChild)

    }

}

