/*
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to 
show customers how much they can save. Given the original price and the discounted price of a product, 
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places. 
This function could be useful for the store's marketing team to create promotions and offers that attract 
customers.
*/

const rd = require("readline-sync")



const calculateDiscountPrice=(orginalPrice,discountedPrice)=>{
  let discount=orginalPrice-discountedPrice;
  let discountPercentage=(discount/orginalPrice)*100 +"% discount";
  return  discountPercentage

}
console.log("enter Orignal Price");
let OrPrice=Number(rd.question())
console.log("enter discount Price");
let disPrice=Number(rd.question())
console.log(calculateDiscountPrice(OrPrice,disPrice));