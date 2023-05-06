/*
You are building a word count generator that will take a large string of text as input and output the words and 
the number of times they are present in the string. Your task is to write a function that can count the 
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can 
assume that the string only contains alphabetic characters and spaces. in javascript

 */

function SwapValues(a,b){
    
    return ([a,b]=[b,a]) ;
    

}
var x=5,y=10;
[x,y] =SwapValues(x,y)
console.log(x);  //10
console.log(y);  //5

