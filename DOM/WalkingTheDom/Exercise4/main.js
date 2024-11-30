
/*Create an image viewer, to do this, an image will be displayed
on our page, along with two buttons "Next" and "Previous"*/

let contador = 1; // Mover el contador fuera de las funciones para que se mantenga su valor

let nextImage = function () {
    const img = document.querySelector(".imagen");


    contador++;

    if (contador > 3) { // Si el contador supera 3, reiniciar a 1
        contador = 1;
    }

    img.setAttribute("src", `./img/image-${contador}.png`); // Corregir interpolación de cadena
}

let prevImage = function () {
    const img = document.querySelector(".imagen");

    contador--;

    if (contador < 1) { // Si el contador es menor que 1, reiniciar a 3
        contador = 3;
    }

    img.setAttribute("src", `./img/image-${contador}.png`); // Corregir interpolación de cadena
}

window.addEventListener("load", function () {

    //Declara los butones
    const bNext = document.querySelector("#buttonNext");
    const bPrevious = document.querySelector("#buttonPrevious");

    bNext.addEventListener("click", nextImage);
    bPrevious.addEventListener("click", prevImage);

})