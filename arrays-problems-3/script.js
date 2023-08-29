/*Define a function that takes in an array of numbers/integers and returns the sorted 
version of that array, greatest to least. (Note: do NOT use the "reverse" method.)
*/

const myNumArr = [3,4,-2,13,8,43,-5,22,100];
// using the Array sort() method and comparing function to sort it 
// from greatest to lowest.

 

console.log(myNumArr);

 function sortedArr(arr) {
 	let list = arr.sort((a,b) => b - a );
 	return list;

 }
console.log(sortedArr(myNumArr));
