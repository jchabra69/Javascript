
const numbers = [1, 2, 3 , 4 ,5 ,6 ]; 

//Use an arrow function to calculate its average

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

let average = sum / numbers.length;

console.log(`Our numbers are: ${numbers} \n
    
    The sum is equivalent to: ${sum} \n
    
    And the average is ${average}

    `);