/*Make a function that displays
in the document the phrase "Heading h followed by the h number"*/

//Es decir, tengo que hacer headers que contengan la palabra Heading

//Clase = ., id = #, etiqueta = "p, h"
const allHeadings = document.querySelectorAll(".header");

allHeadings.forEach((element, index) => element.innerText = `Heading ${index}`);


/* let displayTextHeadings = function(existentHeadings) {

    //in para recorrer indices
    for (let i = 0; i < existentHeadings.length; i++) {

        let headingNumber = document.createTextNode(i);
        existentHeadings[i].innerText = "Heading ";
        existentHeadings[i].appendChild(headingNumber);

    }

}
*/
//displayTextHeadings(allHeadings);