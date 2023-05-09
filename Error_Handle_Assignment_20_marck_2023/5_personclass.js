/**
 * Create a class called Person with two properties: name and age. The class should have a method called 
getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the 
constructor to set the values of name and age to "Unknown" and 0 if they are not provided.
 */

class Person{

    constructor(name='Unknown',age=0){
        this.name =name
        this.age=age
    }

    getdetails(){
        const details=`Name: ${this.name}  age: ${this.age}`
    }
}

const person1=new Person(); 
const person2=new Person("Abhishek",23);

console.log(person1.getdetails(s));  //  Person { name: 'Unknown', age: 0 }
console.log(person2.getdetails());   // Person { name: 'Abhishek', age: 23 }
