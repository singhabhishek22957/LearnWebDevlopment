/*
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of 
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing 
it and returns an object that contains the total bill and the bill to be paid by each person in the group.
*/


const rd = require("readline-sync");

function billSpillter(dishPrice, noOfDish, noOfPerson) {
  let totalBillAmount = 0;
  for (let index = 0; index < dishPrice.length; index++) {
    totalBillAmount = totalBillAmount + dishPrice[index];
  }
  let per_person_ammount = totalBillAmount / noOfPerson;
  let Total_bill_ammount = totalBillAmount;

  return {
    per_person_ammount,
    Total_bill_ammount,
  };
}
console.log("enter number of person");
let person = Number(rd.question());
console.log("Enter Number of Dish Do You Eat : ");
let NoOfDish = Number(rd.question());
let eachDishPrice = [];
for (let i = 0; i < NoOfDish; i++) {
  console.log("Enter first", i + 1, " dish amount :");
  eachDishPrice[i] = Number(rd.question());
  // let num=Number(rd.question())
}
console.log(billSpillter(eachDishPrice, NoOfDish, person));
