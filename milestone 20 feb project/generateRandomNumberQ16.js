
const randomNumber=(min,max)=>{
  let step1= max-min+1;
  let step2=Math.random()*step1;
  let result=Math.floor(step2)+min;
  return result;
}
/*const rd=require('readline-sync')
console.log("enter minmum number:");
let min=Number(rd.question());
console.log("enter maximum number:");
let max=Number(rd.question());*/

console.log(randomNumber(1,100));