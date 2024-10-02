
//Function that accepts the components of an email

//It will return a string email template

let sendEmail = function (username, age, comments, email) {

    let format = null;

    if (username.length === 0 || age.length === 0 || comments.length === 0 || email.length === 0) {

        return format;

    }

    //Si cumple la edad, comenta
    
    return (age >= 18) ? `
    A user has posted a comment from the website: <br>
    => Name: ${username} <br>
    => Age: ${age} <br>
    => Status: ${username} is a valid user (${email}) <br>
    => Comments: ${comments}
    `
        //Si no cumple la edad
        : `Lo siento, ${username}, no puedes comentar porque debes ser mayor de 18 años`;
};


let username, age, comments, email;

username = prompt("What's your name?");
age = parseInt(prompt("How old are you?"));
comments = prompt("Write your comment");
email = prompt("Enter your email, please");

document.write(`${sendEmail(username, age, comments, email)}`);


