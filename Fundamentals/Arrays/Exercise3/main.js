
//Based on an array of numbers
const numbers = [-1, -2, -3, -4, -5, -100];

/*Create another array whose elements are the positive
numbers of the first one.*/

//Traditional function

let positiveNumbers1 = function (array) {

    const positives = [];

    for (let i = 0; i < array.length; i++) {

        //If it is negative
        if (array[i] < 0) {

            //We turn it into positive while we add it too
            positives.push(-array[i])

        }


    }

    //returning the copy with positives
    return positives;

}

const positiveNumbers2 = numbers.map(numb => Math.abs(numb));


console.log(positiveNumbers1(numbers));
console.log(positiveNumbers2);