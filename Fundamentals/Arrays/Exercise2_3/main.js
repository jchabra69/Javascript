/*
* Creates a script that removes all duplicate elements in an array
* */

let arrayWithDuplicates = ["banana", "apple", "apple", "lemon", "strawberry", "watermelon", "strawberry"];

let removeDuplicates = function(array){

    //A Set doesn't allow duplicated, so I return one based on my array
    return [...new Set(array)];

}

console.log(removeDuplicates(arrayWithDuplicates));
