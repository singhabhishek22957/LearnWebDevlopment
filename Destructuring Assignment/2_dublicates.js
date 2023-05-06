
const Dublicates=(array)=>{
    const Unique=new Set([...array])
    return Unique

}

arr=[345,54656,234,67,23454,234,5677,44,44,44,433,22,22,3,33,2,3,"abhishek","abhishek"]
console.log(Dublicates(arr));