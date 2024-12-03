const lista = document.getElementById("lista");
const btnAgregar = document.getElementById("btn-agregar");

/* La delegación de eventos es util para no meter un addEventListener a cada elemento, esto
consume mucha memoria
*/

//Si agrego un evento al elemento padre, este se propaga a los hijos

lista.addEventListener("click", (e) => {

    //Debo controlar con un if que si clickan dentro del contenedor pero no es un "elemento al k keremos aplicar" no le meta la clase al contenedor padre

    if (e.target && e.target.tagName === "A") {

        e.target.classList.toggle("activo");

    }

});

btnAgregar.addEventListener("click", () => {

    const elemento = `
    
    <a href = "#">
    Elemento <i class = "bi bi-check-square-fill"></i>
    </a>

    `;

    lista.innerHTML += elemento;

});