/**
 * 05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is 
assigned a value to demonstrate the temporal dead zone.
 */

{
    console.log(a);  // ReferenceError: Cannot access 'a' before initialization

    let a=10;
    console.log(a); // 10
}