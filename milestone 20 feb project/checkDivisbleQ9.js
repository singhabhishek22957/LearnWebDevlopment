const rd=require("readline-sync")
console.log("enter length of array");
let i= Number(rd.question())
let num=[];
let check=0;

for (let a = 0; a < i; a++) {
    console.log("enter ",a+1,"Number:");
    num.push(Number(rd.question()))
    
}
for (let index = 0; index < num.length; index++) {
    if (num[index]%3===0) {
        if (num[index]%2===0) {
            // console.log("this number is divisble by 2 , 3, 6 :",num[index]);
            

        }else{
            console.log("this number is divisble by 3 but not divisible by 2 :",num[index]);
            check=1;
        }
        
    }
    
}
if (check==0) {
    console.log("Not found any number whose divisible by 3 but not 2");
}


