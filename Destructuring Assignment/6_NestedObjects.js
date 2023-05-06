/*6. Nested Objects.

Write a function that takes an object representing a person as input, and extracts the name and street 
properties from a nested object using object destructuring. The function should return an object with these two 
properties. A sample object is given below. */

function NestObj(person){
    const {name,address:{street}}=person
    return {name, street}
}

const person0={
    name:"Abhishek",
    age:23,
    address:{
        street:"ward 12 , Rekha Sundar Patti , pakariya , Majhariya Kishun ",
        city: "West Champaran",
        state : "Bihar"
        ,Country:"India"

    }
}

console.log(NestObj(person0));   //  {name: 'Abhishek', street: 'ward 12 , Rekha Sundar Patti , pakariya , Majhariya Kishun ' }