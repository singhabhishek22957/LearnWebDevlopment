/**
 * 02. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their 
product. Use function expressions to define the function and call the function before it is declared to 
demonstrate hoisting
 */
 console.log(multiTwoNum(4,6));  //  ReferenceError: Cannot access 'multiTwoNum' before initialization
const multiTwoNum=(num1,num2)=>{
    return `${num1} * ${num2} = ${num1*num2}`
}
console.log(multiTwoNum(4,6)); //  4 * 6 = 24