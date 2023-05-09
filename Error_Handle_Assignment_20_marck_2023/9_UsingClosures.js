/**
 * 9. Check the presence using closures.


Create a numberChecker function that takes an array of numbers as an argument and returns a function. The 
returned function should take another number as an argument and return true if the number is in the array, and 
false otherwise
 * @param {*} array 
 * @returns 
 */

function numberCounter(array) {
  return function (num) {
    return array.includes(num);
  };
}

const arr = [1, 2, 3, 45, 6];
const checkNUmber = numberCounter(arr);
console.log(checkNUmber(5)); // flase
console.log(checkNUmber(6)); // true
