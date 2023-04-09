
const customer={
    name:"abhishek",
    balance:2000
};
/*
17. Build a banking application

A banking application needs to manage customer accounts and transactions. The user detail is stored in an 
object with a keys name and balance. Write functions using object methods to update a customer's account 
balance based on a deposit or withdrawal. 
*/

function whithdrow(withdrowAmmount) {
    if (withdrowAmmount>customer.balance) {
        console.log("Balance is less than withdrowal Ammount");
        
    }else{
        customer.balance -= withdrowAmmount;
        console.log(`withdrowal susseccesful New Balance is ₹ ${customer.balance }`);
    } 

}
function diposit(dipositAmmount) {
    customer.balance += dipositAmmount;
    console.log(`Diposit Susseccesful new balance is ₹ ${customer.balance}`);
    
}

whithdrow(500)
diposit(3000)
whithdrow(1500)
diposit(100000)