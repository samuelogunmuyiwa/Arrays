/*
Problem 2: Write a simple JavaScript program to 
join all elements of the following array into a string. 
using the array join() method
*/

//declare my arrays of cars
const cars = ["Toyota", "Jeep", "Honda", "Volvo"];

//create a variable to store the elements after using the join() method.
// the default separator for join() is Comma. 


// declare my function.
function joinElement(arr) {
	 let text = arr.join("-");
	return text;

}

//console.log(joinElement(cars));