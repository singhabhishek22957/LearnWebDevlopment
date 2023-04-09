
const calculateTotalPrice =(arr) =>{
   let Total_Cost=0;
   let itemname;
   arr.forEach(element => {
    itemname="{ Item Name: " + element.ItemName +" quantiy: "+element.quntity + " price: " + element.price + "  Total price: " + element.price*element.quntity +"}";
    console.log(itemname);
    Total_Cost +=element.price*element.quntity;
   });
   return {
    // itemname,
    Total_Cost
   }
};




const cart=[
    {ItemName:"Mango",quntity:2,price:10},
    {ItemName:"Orange",quntity:4,price:20},
    {ItemName:"Apple",quntity:5,price:30}
];

console.log(calculateTotalPrice(cart));