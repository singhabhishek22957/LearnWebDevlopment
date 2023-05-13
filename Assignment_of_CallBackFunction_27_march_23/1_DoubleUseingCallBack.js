/**
 * 1. Double using callback.

Write a function that takes in an array of integers and a callback function, and returns a new array where each 
element is doubled using the callback.
 *
 */

function arrayDouble(array, callBack) {
  
  return callBack(array);
}
const arr = [1, 2, 3, 4, 5];
const double = (arrayy) => {
  return [...arrayy, ...arrayy];
};

console.log(arrayDouble(arr, double)); // [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]


function arrayDouble1(array,callBack){
    const returnStm=array.map((e)=>callBack(e))
    return returnStm;
}

const multipleOfTwo=(element)=>{
   return element*2
}

console.log(arrayDouble1(arr,multipleOfTwo)); // [2,4,6,8,10]
   
   
 
