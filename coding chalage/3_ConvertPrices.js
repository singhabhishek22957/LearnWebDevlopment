/*
3. Build a feature for Store's Inventory.

Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript 
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should 
use the map higher-order function to create a new object with the converted prices in Rupees. */

// define the item prices in US dollars
const itemPrices = {
    apple: 1.99,
    banana: 0.99,
    orange: 2.49,
    pear: 1.79,
    mango: 4,
    WaterMelon: 7.5
  };
  
  // define the exchange rate from USD to INR
  const exchangeRate = 80;
  
  // use the map function to create a new object with prices in INR
  const itemPricesInRupees = Object.keys(itemPrices).map((item) => ({
    [item]: itemPrices[item] * exchangeRate,
  }));
  
  console.log(itemPricesInRupees);
  