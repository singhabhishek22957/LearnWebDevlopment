/*
Write a function called convertToNumber that takes a string as an argument and returns the equivalent 
number. If the string cannot be converted to a number, the function should return the string "Invalid number". 
Use error handling in javascript to achieve this output.
 */

function covertToNumber(str) {

    // check input is string or not
  if (typeof str =='string') {
    
    // implement try method to check error
    try {
        // convert String into a Number
        const num = Number(str)
        // check is number or not
        if (isNaN(num)) {

            throw new Error("Invalid Number");
            
        }
        return num
    } catch (error) {
        // error massage print
        return error.message
    }


  } else {
    return   `${str} is Not String` ;
    
  }
}
const str = '1234567890';
const str1 = "abhishek";
const num= 1234

console.log(covertToNumber(str));   // 12345657890
console.log(covertToNumber(str1)); // Invalid Number
console.log(covertToNumber(num)); // 1234 is Not string
