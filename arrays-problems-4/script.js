/*
Problem 4: Write a JavaScript program to remove duplicate items from an array 
(ignore case sensitivity).
*/

//declare my function
function removeDuplicates(arr) {
    let uniqueValuesArray = [];
  
// using For loop method.
    for(let i = 0; i < arr.length; i++) {
        if(!uniqueValuesArray.includes(arr[i])) {
            uniqueValuesArray.push(arr[i]);
        };
    };
    return uniqueValuesArray;
};


const myNumbers = [1, 2, 3, 3, 4, 4, 5, 4, 7, 5, 9, 2, 8, 7, 6, 4]
console.log(removeDuplicates(myNumbers));