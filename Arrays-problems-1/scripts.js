/*
Problem 1: Write a JavaScript function that takes in two parameters, 
an array and a number (n), and return the first n elements of that array. 
(Example: If I pass in an array and the number 2, 
your function returns the first 2 elements in that array.)
*/

const fruitsArray = ["Banana", "Apple", "Kiwi", "Orange", "Lemon"];

const getArrItems = function (array, num) {

	if (array === null || num === null) 
		return "Your input should be ('array','number'), please try again.";

	if (num < 0)
		return "Please enter a positive value for num";

	if(num > array.length) 
		return "We only have " + array.length + " items. Please try again.";
	
	return array.slice(0, num);