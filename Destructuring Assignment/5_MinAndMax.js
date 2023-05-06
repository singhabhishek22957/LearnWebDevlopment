/*
5. Min and max values.

You are building a program that needs to find the maximum and minimum values in an array of numbers. You 
decide to write a function that can accomplish this task by taking an array of numbers as input and using the 
spread operator with the Math methods max() and min(). The function should return an object with two 
properties, max, and min, representing the maximum and minimum values in the input array, respectively. For 
example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 } */



function fun1(array) {
  let max = array[0];
  const maximum = () => {
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  };

  let min = array[0];
  const minimum = () => {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  };

  const MinMax = {
    minimum: minimum(),
    maximum: maximum(),
  };
  return MinMax;
}

const arr = [2, 3, 4, 5, 6, 1, 3454, 3455, 34134, 55687, 8789454, 345, -5];
console.log(fun1(arr).maximum); //8789454
console.log(fun1(arr).minimum); //-5
console.log(fun1(arr)); //  { minimum: -5, maximum: 8789454 }
