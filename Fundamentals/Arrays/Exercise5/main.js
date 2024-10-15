//Based on an array of numbers
const numbers = [1, 2, 3, 4, 200];

//Use an arrow function to calculate the greatest number
const greatestNumber = (array) => {

    let max = array[0]; //My max will be the first element on the array

    for (let number of array) {

        //If there's someone bigger
        if (number > max) { 

            //Update our var
            max = number;
        }
    }

    return max; 
};

console.log(`Our numbers are: ${numbers} \n
    The GREATEST number is: ${greatestNumber(numbers)}
`);