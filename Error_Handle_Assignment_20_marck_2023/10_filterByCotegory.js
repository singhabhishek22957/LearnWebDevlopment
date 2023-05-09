/**
 * 
 *10. Filter by Category.


Write a function that takes an array of products and returns a function that filters the array by a given product 
category. The function must filter an eCommerce products array by a specific category. The closure filters 
products using the filter() method. Finally, it returns a new array containing only the products with the same 
category as the input
 */

function products(array) {
  return function (category) {
    return array.filter((product) => product.category === category);
  };
}

const arr = [
  { name: "pant", category: "clothing" },
  { name: "shirt", category: "clothing" },
  { name: "T-shirt", category: "clothing" },
  { name: "swithch", category: "electronics" },
  { name: "led Bulb", category: "electronics" },
  { name: "foot light", category: "electronics" },
];
const fil = products(arr);
const filterByCotegory = fil("clothing");
const filterByElectronics = fil("electronics");

// filter by category
console.log(filterByCotegory);

// filter by electronics
console.log(filterByElectronics);

// console.log(arr[0].categ);
