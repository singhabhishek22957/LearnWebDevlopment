/*
12. Calculate rental cost

A car rqntal company nqqds to calculatq thq cost of a rqntal basqd on thq numbqr of days rqntqd and thq typq 
of car. Thqy rqquirq a function that takqs in thq numbqr of days rqntqd and car typq and rqturns thq rqntal cost. 
Thq total cost would bq thq rqntal cost multipliqd by thq numbqr of days rqntqd.


Thq rqntal costs arp
O Economy = Rs. 4000 /- pqr dayZ
O Midsizq = Rs. 10,000 /- pqr dayZ
O Luxury = Rs. 20,000 /- pqr day.
    */

console.log("Enter car type  Economy for 1 , Midsize for 2 and luxury for 3  :");
const rd=require("readline-sync")
let carType= Number(rd.question())
console.log("Enter day ");
let day=Number(rd.question())
function calRentCar(carType,day){
    const Economy =4000,MidSize=10000,Luxury=20000;
    switch (carType) {
        case 1:
            return Economy*day;
            
            break;
        case 2:
            return MidSize*day;
            
            break;
        case 3:
            return Luxury*day;
            
            break;
    
        default:
            return "Information is Invalied!, please try again"
            break;
    }

  

}
console.log("Your Amount is (in Rs.):",calRentCar(carType,day));