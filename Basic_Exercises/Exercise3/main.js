
/* Request four grades for a student, calculate the average,
indicate whether the grade is pass, sufficient, good or outstanding
*/

//The most used way to declare an array
let grades = [];
let sum = 0, average;
let displayArray = function (array) {

    let cadena = "";

    for (let gradee of array) {

        cadena += gradee + ", ";

    }

    return cadena;

}

let whatGrade = function (average) {

    let result;

    if (average >= 5 && average < 6) {

        result = "sufficient";

    } else if (average >= 6 && average < 7) {

        result = "good";

    } else if (average >= 7) {

        result = "outstanding"

    } else {

        result = "insufficient";

    }

    return result;

}

//We're asking for 4 grades
for (let i = 0; i < 4; i++) {

    let grade = parseFloat(prompt("Enter a grade " + i + "/4"));

    //We save a grade in each position of the loop
    grades[i] = grade;

    //then, we calculate the average

    sum += grade;


}

average = sum / grades.length;

document.write(` Your grades are: ${displayArray(grades)} <br> <br>
    
    Your sum is equivalent to: ${sum} <br> <br>
    And your average: ${average} <br> <br>1
    The result is: ${whatGrade(average)}
    
    `);

