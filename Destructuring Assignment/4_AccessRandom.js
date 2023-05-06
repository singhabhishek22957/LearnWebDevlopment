/*
4. Access random elements

You are building a program that takes an array of numbers as input and you need to extract the first, second, 
and last elements of the array. You decide to write a function that can accomplish this task using destructuring 
assignment with an array. The function should take the array as an argument, destructure it into three variables 
representing the first, second, and last elements, and then return an array with these three values. For example, 
if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].
*/




const arr=[1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20]



function fun(array){
    const {0 : first,1 : seconds, [array.length-1 ]: last} =array
    return [first,seconds ,last];
}
const newArray=fun(arr)
console.log(newArray);  //  [ 1, 2, 20 ]

