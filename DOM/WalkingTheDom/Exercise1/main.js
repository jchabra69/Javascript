//Show the tag and id + FAMILY

//Navegar con el DOM sin saber el HTML
//Si hay un elemento que no existe, se controla

/*Given these html structures, by clicking the highlighted nodes show the tag and id of:
1. The father
2. All the siblings
3. The previous sibling
4. The next sibling
5. The grandfather
6. Grandfather's siblings
7. Father's siblings
8. Cousins
9. Children
10. Grandchildren*/

//Para empezar, vamos a tratar todo como un elemento, me da igual su tipo

//Se debe enseñar la familia de div id = "child2
//La familia de <h4>Child 3</h4>
//Y por último, la familia de <td> Jon </td>

let allSiblings = function(element) {

    const result = [];
    let node = element.parentNode.firstChild;  // Comienza con el primer hijo del nodo padre, así puedes ver los previos y siguientes

    while (node) {
        if (node !== element && node.nodeType === Node.ELEMENT_NODE)
            result.push(node);  // Solo agrega los elementos hermanos al array
        node = node.nextElementSibling;  // Avanza solo por los hermanos de tipo elemento
    }

    return result;
}

let familyDiv = function () {

    const container = document.querySelector("#child2"); //# para ID
    const siblingsHTML = allSiblings(container).map(sibling => sibling.outerHTML).join("\n"); //Mapea el toString para mostrar el hermano y juntar todo ese HTMl en cadena

    //Si quisiera acceder a los hermanos anteriores, sería algo como container.previousElementSibling.previousElementSibling

    console.log(
        `The father: ${container && container.parentElement ? `${container.parentElement.nodeName} ${container.parentElement.id || 'No tiene ID'}` : "Este elemento no tiene un padre."} \n
        All the siblings: ${allSiblings(container).map(sibling => sibling.outerHTML).join("\n") || "Este elemento no tiene hermanos."} \n
        The previous sibling: ${container.previousElementSibling ? container.previousElementSibling.outerHTML : "Este elemento no tiene hermano anterior."} \n
        The next sibling: ${container.nextElementSibling ? container.nextElementSibling.outerHTML : "Este elemento no tiene hermano siguiente."} \n
        The grandfather: ${container.parentElement && container.parentElement.parentElement ? container.parentElement.parentElement.outerHTML : "Este elemento no tiene abuelo."} \n
        
        Grandfather's siblings: ${container.parentElement && container.parentElement.parentElement
            ? allSiblings(container.parentElement.parentElement).map(sibling => sibling.outerHTML).join("\n")
            : "Este elemento no tiene hermanos del abuelo."} \n
            
        Father's siblings: ${container.parentElement
            ? allSiblings(container.parentElement).map(sibling => sibling.outerHTML).join("\n")
            : "Este elemento no tiene hermanos del padre."} \n
            
        Cousins: ${container.parentElement && container.parentElement.parentElement
            ? allSiblings(container.parentElement.parentElement).map(sibling =>
                allSiblings(sibling).map(child => child.outerHTML).join("\n")
            ).join("\n")
            : "Este elemento no tiene primos."} \n
            
        Children: ${container && container.children.length > 0
            ? Array.from(container.children).map(child => child.outerHTML).join("\n")
            : "Este elemento no tiene hijos."} \n
            
        Grandchildren: ${container && container.children.length > 0
            ? Array.from(container.children).map(child =>
                child.children.length > 0
                    ? Array.from(child.children).map(grandchild => grandchild.outerHTML).join("\n")
                    : ""
            ).join("\n")
            : "Este elemento no tiene nietos."} \n`
    );
}

let showFamily = function(element) {
    if (!element) {
        console.log("Este elemento no existe.");
        return;
    }

    console.log(
        `El padre: ${element && element.parentElement
            ? `${element.parentElement.nodeName} ${element.parentElement.id || 'No tiene ID'}`
            : "Este elemento no tiene un padre."} \n
        Todos los hermanos: ${allSiblings(element).map(sibling => sibling.outerHTML).join("\n") || "Este elemento no tiene hermanos."} \n
        Hermano anterior: ${element.previousElementSibling ? element.previousElementSibling.outerHTML : "Este elemento no tiene hermano anterior."} \n
        Hermano siguiente: ${element.nextElementSibling ? element.nextElementSibling.outerHTML : "Este elemento no tiene hermano siguiente."} \n
        El abuelo: ${element.parentElement && element.parentElement.parentElement
            ? element.parentElement.parentElement.outerHTML
            : "Este elemento no tiene abuelo."} \n
        
        Hermanos del abuelo: ${element.parentElement && element.parentElement.parentElement
            ? allSiblings(element.parentElement.parentElement).map(sibling => sibling.outerHTML).join("\n")
            : "Este elemento no tiene hermanos del abuelo."} \n
            
        Hermanos del padre: ${element.parentElement
            ? allSiblings(element.parentElement).map(sibling => sibling.outerHTML).join("\n")
            : "Este elemento no tiene hermanos del padre."} \n
            
        Primos: ${element.parentElement && element.parentElement.parentElement
            ? allSiblings(element.parentElement.parentElement).map(sibling =>
                allSiblings(sibling).map(child => child.outerHTML).join("\n")
            ).join("\n")
            : "Este elemento no tiene primos."} \n
            
        Hijos: ${element && element.children.length > 0
            ? Array.from(element.children).map(child => child.outerHTML).join("\n")
            : "Este elemento no tiene hijos."} \n
            
        Nietos: ${element && element.children.length > 0
            ? Array.from(element.children).map(child =>
                child.children.length > 0
                    ? Array.from(child.children).map(grandchild => grandchild.outerHTML).join("\n")
                    : ""
            ).join("\n")
            : "Este elemento no tiene nietos."} \n`
    );
}


window.addEventListener("load", function() {

    //familyDiv();

    const containerH4 = Array.from(document.querySelectorAll("h4")).find(h4 => h4.textContent.includes("Child 3"));

    // Buscar <td> que contiene el texto "Jon"
    const containerTd = Array.from(document.querySelectorAll("td")).find(td => td.textContent.includes("Jon"));

    showFamily(containerTd);

});


