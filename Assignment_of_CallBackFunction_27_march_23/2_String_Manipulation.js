
function pperString(str,callBack){
    const Upper= str.toUpperCase();
     callBack(Upper);
}
const ManiPulated=(pper)=>{
    console.log(`The manipulated string is: ${pper}`); 
}

let Name="Abhishek Singh"
console.log(Name.toUpperCase());

console.log(pperString(Name,ManiPulated));  //The manipulated string is: ABHISHEK SINGH
