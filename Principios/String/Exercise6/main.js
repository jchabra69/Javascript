
/*
Write a JavaScript function that hides
email addresses to prevent unauthorized access.
*/

function protect_email(email) {

    return email.replace(/^(.{4})(.*)(@.*)$/, function(match, p1, p2, p3) {
        return p1 + '...' + p3;

    });

    /*
    
    ^ : Indica el inicio de la cadena
    (.{2}): Captura los primeros 2 caracteres del correo electrónico
    (.*): Captura todos los caracteres que siguen después, hasta el símbolo @
    (@.*): Captura desde el símbolo @ hasta el final de la cadena (incluyendo el dominio)

    */

}

console.log(protect_email("robin_singh@example.com"));

