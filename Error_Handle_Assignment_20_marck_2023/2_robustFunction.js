/*
Create a function called getPerson that takes an object as a parameter representing a person's name and age. 
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". 
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw 
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error 
message if it occurs.
 */

function getPerson(obj){
  try {
    if(obj.hasOwnProperty('name')&& obj.hasOwnProperty('age')){
        const str = `Name: ${obj.name} and age:${obj.age} `
        // console.log(str);
        return str;
    }else{
      throw new Error("Invalid Object") 
    // return "Invalid" 
    }
    
    
  } catch (error) {
    return error.message;
    
  }
}





const user={
    name:"Abhishek",
    age:22,
    Course:"Full Stack Web Development"
}
console.log(getPerson(user));  //  Name: Abhishek and age:22 
const user1={
    name:"Abhishek",
    // age:22,
    Course:"Full Stack Web Development"
}
console.log(getPerson(user1));  //Invalid Object

