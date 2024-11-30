//Primero tengo que coger el formulario
const formulario = document.querySelector(".form-general");
//Luego todos los inputs
const allInputs = document.querySelectorAll(".inputData");

//En este caso, debo hacer expresiones regulares para que coincida con datos precisos que yo quiero
//Así que me haré un objeto de mis condiciones
const misExpresiones = {

    creditCardNumber: /^\d{4} ?\d{4} ?\d{4} ?\d{4}$/,
    //creditCardNumber: /^\d{4} \d{4} \d{4} \d{4}$/, // FORMATO TARJETA (16 dígitos en 4 bloques SEPARADOS POR ESPACIOS)
    ownerName: /^[A-Za-z]{2,}\s[A-Za-z]{2,}.*$/, // Al menos un nombre y apellido con mínimo 7 caracteres
    expirationDate: /^(0[1-9]|1[0-2])\/\d{2}$/, // Formato MM/YY
    cvs: /^\d{3}$/ // Número de 3 dígitos
};

//Esto es para comprobar que los inputs no están vacíos, deben estar rellenos
const fields = {

    //Siempre serán false por si le dan al boton y está todo vacio
    NumberCredit: false,
    OwnerName: false,
    ExpirationDate: false,
    SecurityCode: false,

}

//Generico para todos los inputs, se podrán rojo o verdes y mostrarán el mensaje de error si es necesario
const validateInput = (expression, input, whatInput) => {
    console.log(whatInput);

    // Selecciona el input por su id
    const inputElement = document.querySelector(`#input_${whatInput}`);
    // El texto está justo debajo del input, así que hago eso
    const errorMessage = inputElement.nextElementSibling;

    if (expression.test(input.value)) {

        // Si el input es válido
        errorMessage.classList.remove("input_error-message-activated");
        inputElement.classList.remove("inputErrors");
        inputElement.classList.add("inputCorrect");

        fields[whatInput] = true;

    } else {
        // Si el input no es válido
        errorMessage.classList.add("input_error-message-activated");
        inputElement.classList.add("inputErrors");
        inputElement.classList.remove("inputCorrect");

        fields[whatInput] = false;

    }
};


const validateForm = (e) => {

    //A cada input, cogele el target name
    switch (e.target.name) {

        //Si el input tiene el NAME
        case "numberCredit":

            //VALIDA SU INPUT ACORDE A LA EXPRESION APROPIADA, EL INPUT OBJETIVO, Y EL NOMBRE DE SU ID
            validateInput(misExpresiones.creditCardNumber, e.target, "NumberCredit");

            //Ahora aquí manejaré los casos especiales, si me dan el número sin espacios, lo formateo para que se divida en bloques de 4 digitos

            e.target.value = e.target.value.replace(/\s+/g, '')  // Elimina todos los espacios

                .match(/.{1,4}/g)   // Divide en bloques de 4 caracteres

                .join(' ');

            break;

        case "ownerName":

            validateInput(misExpresiones.ownerName, e.target, "OwnerName");

            //Capitaliza todo el texto
            e.target.value = e.target.value.toLocaleUpperCase();

            break;

        case "expirationDate":

            validateInput(misExpresiones.expirationDate, e.target, "ExpirationDate");

            //after two numbers add /, automatically.

            // Dividir en bloques de 2 caracteres y unirlos con '/'
            e.target.value = e.target.value.replace(/\D/g, '')  // Elimina cualquier caracter no numérico
                .match(/.{1,2}/g)   // Divide en bloques de 2 caracteres
                .join('/');         // Une con '/'



            break;

        case "securityCode":

            validateInput(misExpresiones.cvs, e.target, "SecurityCode");

    }

    //Un input que no está pero útil de saber
    /*
    *
    * const amountInput = document.querySelector("#amountInput"); // Select the input field

amountInput.addEventListener("blur", (e) => {
    let value = e.target.value;

    // Step 1: Replace any commas with dots
    value = value.replace(",", ".");

    // Step 2: If the value doesn't have decimals, add ".00"
    if (!value.includes(".")) {
        value += ".00";
    } else {
        // Step 3: Ensure it has exactly 2 decimal places
        let parts = value.split(".");
        if (parts[1].length === 1) {
            value = value + "0"; // If there is only one decimal, add an additional zero
        }
    }

    // Update the input field with the new value
    e.target.value = value;
});

    * */

}


let dividirCadena4Digitos = function (cadena) {
    // Eliminamos espacios iniciales, finales y los existentes entre los números
    cadena = cadena.replace(/\s+/g, "");

    let cadenaDividida = "";

    for (let i = 0; i < cadena.length; i++) {
        cadenaDividida += cadena[i];

        // Agrega un espacio después de cada 4 caracteres, excepto al final
        if ((i + 1) % 4 === 0 && i + 1 !== cadena.length) {
            cadenaDividida += " ";
        }
    }

    return cadenaDividida;
};


//Debo agregar un evento que escuche lo que estén haciendo los usuarios en los inputs
allInputs.forEach((input) => {
    input.addEventListener('focus', (e) => {
        e.target.classList.add('inputData-focused');
    });

    input.addEventListener('blur', (e) => {
        e.target.classList.remove('inputData-focused');
        validateForm(e);  // Validamos el campo cuando pierde el foco
    });

    input.addEventListener('keyup', validateForm);  // Validación en tiempo real
});

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    //Si los inputs están validados
    if (fields.NumberCredit && fields.OwnerName && fields.ExpirationDate && fields.SecurityCode) {

        formulario.reset();

    }



})
