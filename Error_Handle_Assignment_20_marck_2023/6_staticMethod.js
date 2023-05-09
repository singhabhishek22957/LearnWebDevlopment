/**
 * 6. Using Static Method to Add Two Numbers with Calculator Class


Create a class called Calculator with a static method called add. The add method should take two numbers as 
arguments and return their sum. Instantiate the Calculator class and call the add method.
 */

class calculator{

    static add(num,num1){
        const result= `${num} + ${num1} = ${num+num1}`
        return result;
    }
}
let n=20,n1=40;
const result = calculator.add(n,n1)
console.log(result);  // 20 + 40 = 60