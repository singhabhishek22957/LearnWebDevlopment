 function ageInDays(person,callBack){
   //   if (person.hasOwnProperty('First_Name')&& (person.hasOwnProperty("Last_Name"))) {
      const name=`${person.First_Name} ${person.Last_Name}`
        callBack(name,person.Age);
   //   }else{
   //      return "object is does not contain data";
   //   }

 }

 const person1={
    First_Name:"abhishek",
    Last_Name:"Singh",
    Age:22   //years

 }
const year=365;
 function obj(firstName,age){
    const result=`The full name is ${firstName}, and their are in days is ${age*year}`
    console.log(result);
 }

 console.log(ageInDays(person1,obj)); //  The full name is abhishek Singh, and their are in days is 8030 