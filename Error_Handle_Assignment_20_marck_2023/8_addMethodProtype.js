/**
 * 8. Adding a Method to a Prototype.


Create a prototype object called Student with a property name. Add a method called printDetails to the 
prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the 
name "Mithun" and call the printDetails method.
 * @param {*} name 
 */


function students(name){
    this.name=name;
}

students.prototype.printDetails=function(){
    return `Hello, my name is ${this.name}`
}

const stu= new students("Abhishek")
console.log(stu.printDetails());
// console.log(typeof students);