//Show the tag and id + FAMILY

let highlightNode = function() {

    /* Quiero que cuando pulse un elemento del html, muestre su tag
    id y su familia, el padre, los hermanos etc
*/  

    const allElements = document.getElementsByTagName("*");

    allElements[0].addEventListener("click", function(event) {

        event.target.classList.toggle("highlight");

        event.preventDefault();

    })

   /* 
   MIRAR EN CASA DELEGACIÓN DE EVENTOS
   */
}

let init = function() {

    highlightNode();

}