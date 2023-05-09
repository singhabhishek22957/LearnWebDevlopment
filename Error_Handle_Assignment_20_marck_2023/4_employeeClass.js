/**
 * 4. Employee Class Challenge.


Create a class called Employee with three properties: name, position, and salary. The class should have a 
method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and 
call the getSalary method.
 */


class empolyee{
    name;
    position;
    salary;

    constructor(n,p,s){
        this.name=n
        this.position=p
        this.salary=s
    }


    getSalary(){
        const sal =`Salary :  ${this.salary} `
        return sal;
    }
}

const empolyee0= new empolyee("Abhishek","CEO",100000)

console.log(empolyee0.getSalary());  //  Salary : 100000