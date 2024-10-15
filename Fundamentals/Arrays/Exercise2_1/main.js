
/*
* Make a function to sort the array
* by the lastname or lastname1, depending on the case.
* */

/*- Firstname lastname1 lastname2
- Firstname lastname*/

class Student {
    constructor(name, lastname1, lastname2) {
        this.name = name;
        this.lastname1 = lastname1;
        this.lastname2 = lastname2;
    }


    toString() {
        return `${this.name} ${this.lastname1} ${this.lastname2}`;
    }

}

const students = [];

students.push(new Student("Carlos", "Alto", "A"));
students.push(new Student("Ana", "Lopez", "Z"));
students.push(new Student("José", "Bellota", "C"));
students.push(new Student("María", "Colmena", "B"));

let sortStudentsLastName1 = function (arrayStudents) {
    arrayStudents.sort((student1, student2) =>
        student1.lastname1.localeCompare(student2.lastname1)
    );
    //Aquí puedo llamar al sortStudents si hay empate
};

let sortStudentsLastName2 = function (arrayStudents) {
    arrayStudents.sort((student1, student2) =>
        student1.lastname2.localeCompare(student2.lastname2)
    );
};

const displayStudents = (arrayStudents, message) => {
    console.log(message);
    arrayStudents.forEach(student => console.log(student.toString()));
};

displayStudents(students, "Array de estudiantes sin ordenar:");

sortStudentsLastName1(students);
displayStudents(students, "\nEstudiantes ordenados por el primer apellido:");


sortStudentsLastName2(students);
displayStudents(students, "\nEstudiantes ordenados por el segundo apellido:");

