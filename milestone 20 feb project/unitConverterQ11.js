
const rd=require("readline-sync")
console.log("Enter in temperture in celcius:");
let celcius=Number(rd.question())
let  fahrqnheit;
function celToFer(cel) {
    return cel*(9/5)+32
}
console.log(celToFer(celcius),"F");

