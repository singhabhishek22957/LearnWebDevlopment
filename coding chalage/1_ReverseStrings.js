/*
1. Reverse String.

The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay 
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 
2 seconds before reversing the string. The reversed string should then be printed as output */

const rd = require("readline-sync");
  console.log("Enter a your Name");
  const Name = String(rd.question());

const reverseString = (str) => {

setTimeout(function(){
  let cnrtArray = str.split("");
const revArray = cnrtArray.reverse();
console.log(revArray.join(""));
// return revArray.join("")
 }, 2000);}
 
reverseString(Name)






