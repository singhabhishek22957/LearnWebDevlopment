
function removeDublicates(cart){
    let newCart= [... new Set(cart)];
    return newCart;
}
let a = [1,1,33,2,3,2,3,4,5,2,5,6,4,6,4,33]
console.log(removeDublicates(a));
let Name=["Abhishek Singh","Abhishek Singh", "kumar","pwskills","Hello","pwskills","kumar"]
console.log(removeDublicates(Name));
