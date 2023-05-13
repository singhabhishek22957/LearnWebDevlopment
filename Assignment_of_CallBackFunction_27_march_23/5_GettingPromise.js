
function greeting(Name){
    return new Promise((resolve,reject)=>{
        const greet= `Hello, ${Name}`
        resolve(greet)
    })
}
const name="Abhishek Singh"
const Greeting=greeting(name)
Greeting.then((message)=>{
     console.log(message);
})

console.log(Greeting); //  Promise { 'Hello, Abhishek Singh' }   Hello, Abhishek Singh