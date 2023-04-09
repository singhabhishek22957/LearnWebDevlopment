
/*
4} Highest Marks

A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters 
the marks of all five students in an array called "marks". Write a program that iterates through the array and 
finds the highest marks scored by any student in the class. The highest marks must then be displayed to the 
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks
 */

const rd=require("readline-sync")
console.log("Enter number of students");
let a=Number(rd.question())
let students=[];
for (let index = 0; index <a; index++) {
    console.log("students",index+1,"Marks:");
    students.push(Number(rd.question()))
    
}
let hightestMarks=students[0];
for (let i = 1; i < students.length; i++) {
    if (hightestMarks<students[i]) {
        hightestMarks=students[i]
        
    }
    
}
console.log("Hightest Marks :",hightestMarks);