//Creo un objeto de expresiones regulares
const regExr = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//Esto es para comprobar que los inputs no están vacíos, deben estar rellenos
const fields = {

    //Siempre serán false por si le dan al boton y está todo vacio
    user: false,
    name: false,
    password: false,
    password2: false,
    email: false,
    tlf: false

}

const form = document.querySelector("#form");
const allInputs = document.querySelectorAll("#form input"); //me devuelve todos los inputs que tenga el elemento con id input

const validateInput = (expression, input, whatInput) => {

    //Accedo al value del elemento
    // if (regExr.usuario.test(e.target.value))
    console.log(whatInput);

    if (expression.test(input.value)) { /*El método test() en JavaScript se utiliza para comprobar si una cadena de 
        texto coincide con una expresión regular*/

        //Hay que poner esto para quitar la clase que haya podido poner al estar mal antes
        document.querySelector(`#group_${whatInput}`).classList.remove("form_group_wrong");
        //Entonces le decimos que está bien
        document.querySelector(`#group_${whatInput}`).classList.add("form_group_succesful");

        //Así que lo mismo para cambiar el icono, quito el icono de wrong y meto el nuevo
        //Font-awesome usa dos clases para meter el icono, así que tengo que hacer 2 add
        document.querySelector(`#group_${whatInput} i`).classList.add("fa-solid");
        document.querySelector(`#group_${whatInput} i`).classList.add("fa-circle-check");
        document.querySelector(`#group_${whatInput} i`).classList.remove("ri-error-warning-fill");

        document.querySelector(`#group_${whatInput} .form_input_error`).classList.remove("form_input_error_active")

        //Los campos están bien
        console.log(`Validating ${whatInput}:`, fields);
        fields[whatInput] = true;



        //Haces la inversa con los iconos y la classList de form group succesful
    } else {

        //Si está mal el input, accede al grupo usuario con su id
        document.querySelector(`#group_${whatInput}`).classList.add("form_group_wrong");
        document.querySelector(`#group_${whatInput} i`).classList.remove("form_group_succesful");

        document.querySelector(`#group_${whatInput} i`).classList.remove("fa-solid");
        document.querySelector(`#group_${whatInput} i`).classList.remove("fa-circle-check");
        document.querySelector(`#group_${whatInput} i`).classList.add("ri-error-warning-fill");

        //También hay que poner la leyenda, el texto de error que dejamos oculto!
        document.querySelector(`#group_${whatInput} .form_input_error`).classList.add("form_input_error_active")

        //Los campos están mal
        fields[whatInput] = false;

    }



}

const validateForm = (e) => {

    //Va a mostrar el nombre del input que ha ejecutado blur y keyup
    //console.log(e.target.name);

    //Lee el elemento objetivo por su atributo name
    switch (e.target.name) {

        //En cada caso voy a validar el input especifico
        case "usuario":

            validateInput(regExr.usuario, e.target, "user");

            //console.log("Funciona el usuario")

            break;

        case "nombre":

            validateInput(regExr.nombre, e.target, "name");


            //console.log("Funciona el nombre")

            break;

        case "password":

            //console.log("Funciona password")

            validateInput(regExr.password, e.target, "password");

            break;

        case "password2":
            validatePassword2();
            break;


        case "email":

            validateInput(regExr.correo, e.target, "email");
            //console.log("Funciona el email")

            break;

        case "tlf":

            validateInput(regExr.telefono, e.target, "tlf");
            //console.log("Funciona el tlf")

            break;


    }

}

const validatePassword2 = () => {

    const inputPassword1 = document.querySelector("#password");
    const inputPassword2 = document.querySelector("#password2");

    if (inputPassword1.value === inputPassword2.value) {
        // Si ambas contraseñas coinciden
        document.querySelector(`#group_password2`).classList.remove("form_group_wrong");
        document.querySelector(`#group_password2`).classList.add("form_group_succesful");

        document.querySelector(`#group_password2 i`).classList.add("fa-solid");
        document.querySelector(`#group_password2 i`).classList.add("fa-circle-check");
        document.querySelector(`#group_password2 i`).classList.remove("ri-error-warning-fill");

        document.querySelector(`#group_password2 .form_input_error`).classList.remove("form_input_error_active");

        // Actualiza el estado de fields
        fields.password2 = true;
    } else {
        // Si las contraseñas no coinciden
        document.querySelector(`#group_password2`).classList.add("form_group_wrong");
        document.querySelector(`#group_password2`).classList.remove("form_group_succesful");

        document.querySelector(`#group_password2 i`).classList.remove("fa-solid");
        document.querySelector(`#group_password2 i`).classList.remove("fa-circle-check");
        document.querySelector(`#group_password2 i`).classList.add("ri-error-warning-fill");

        document.querySelector(`#group_password2 .form_input_error`).classList.add("form_input_error_active");

        // Actualiza el estado de fields
        fields.password2 = false;
    }
};


//Debo agregar un addEventListener para saber lo que está escribiendo el usuario
//A cada input, 
allInputs.forEach((input) => {

    //le metemos un listener para saber si el usuario ha dejado de escribir en él
    input.addEventListener('keyup', validateForm);
    //le metemos un listener para saber el input ha perdido el foco del usuario
    input.addEventListener('blur', validateForm);


});


//Debo comprobar que todos los elementos estén bien (no vacios) al presionar el botón enviar
document.addEventListener('DOMContentLoaded', function () {
    
    // Asegura de que el mensaje de error esté oculto al cargar la página
    document.getElementById("form_message").classList.remove("form_message_active");
});

// Evento para manejar el envío del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe por defecto

    const terms = document.querySelector("#terms");

    // Si todos los campos son válidos y los términos están aceptados
    if (fields.user && fields.name && fields.password && fields.password2 && fields.email && fields.tlf && terms.checked) {
        form.reset(); // Resetea el formulario

        // Muestra mensaje de éxito
        document.getElementById("form_message_succesful").classList.add("form_message_succesful_activated");
        setTimeout(() => {
            document.getElementById("form_message_succesful").classList.remove("form_message_succesful_activated");
        }, 5000);

        // Limpia las clases de éxito
        document.querySelectorAll(".form_group_succesful").forEach((icono) => {
            icono.classList.remove("form_group_succesful");
        });

        // Asegúrate de ocultar el mensaje de error por si estaba visible
        document.getElementById("form_message").classList.remove("form_message_active");
    } else {
        // Si hay errores, muestra el mensaje de error
        document.getElementById("form_message").classList.add("form_message_active");
    }
});

