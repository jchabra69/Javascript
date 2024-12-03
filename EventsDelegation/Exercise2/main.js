//It must detect which element the mouse is over
//Showing the current position of the mouse X, Y and so on
/*

The background colour of the element on which the mouse is located will be changed
and it will be changed again when it exits (uses the toggle method of classList).

*/

// Seleccionar el contenedor principal (en este caso, el body)
const elementoPadre = document.querySelector("body");

// Detectar el movimiento del ratón sobre cualquier elemento
elementoPadre.addEventListener("mousemove", (e) => {

    // Obtener los elementos donde mostraremos las coordenadas
    const spanCoordenadas = document.querySelector("#screenPos");
    const elementoActual = document.querySelector("#currentElement");
    const posDentroElemento = document.querySelector("#elementPos");

    // Mostrar las coordenadas globales del ratón
    spanCoordenadas.textContent = `(${e.clientX}, ${e.clientY})`;

    // Verificar si el ratón está sobre un elemento con la clase "box" o similar
    if (e.target !== elementoPadre) {
        elementoActual.textContent = e.target.className; // Mostrar la clase del elemento
        posDentroElemento.textContent = `(${e.offsetX}, ${e.offsetY})`; // Mostrar las coordenadas dentro del elemento
    }
});

// Detectar el ratón entrando y saliendo de los elementos
elementoPadre.addEventListener('mouseenter', (e) => {
    
        e.target.classList.add("active"); 
    
}); 

elementoPadre.addEventListener('mouseleave', (e) => {
    
        e.target.classList.remove("active");
    
})
