/*
Problem 1: Write a JavaScript function that takes in two parameters, 
an array and a number (n), and return the first n elements of that array. 
(Example: If I pass in an array and the number 2, 
your function returns the first 2 elements in that array.)
*/
// declare my array elements of fruits.
const fruitsArray = ["Banana", "Apple", "Kiwi", "Orange", "Lemon"];

//function that takes in two parameters, an array and a number (n).

const getArrItems = function (array, num) {
//using the === to make sure the types and values entered are true.
	if (array === null || num === null) 
		return "Your input should be ('array','number'), please try again.";

//check if the number inputed is greater than 0;
	if (num < 0)
		return "Please enter a positive value for num";

//check if the number inputed is greater than the array length;
	if(num > array.length) 
		return "We only have " + array.length + " items. Please try again.";
	
	return array.slice(0, num);
  
}
  
  console.log(getArrItems(fruitsArray, 2));