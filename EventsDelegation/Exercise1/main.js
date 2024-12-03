const opciones = document.querySelector(".modes");

opciones.addEventListener("change", (e) => {
    // Limpia las clases previas relacionadas con los modos
    document.body.className = "";

    // Añade la clase correspondiente al modo seleccionado
    if (e.target.value === "lightMode") {

        document.body.classList.add("lightMode");

    } else if (e.target.value === "darkMode") {

        document.body.classList.add("darkMode");

    } else if (e.target.value === "minimalistMode") {
        
        document.body.classList.add("minimalistMode");
    }
});
