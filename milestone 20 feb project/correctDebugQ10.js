
function correctDebug(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i]= cart[i]*2;

        
    }
    return cart;

    
}

let arr=[23,45,67,12,1,3,4,]
console.log(arr);

console.log(correctDebug(arr));