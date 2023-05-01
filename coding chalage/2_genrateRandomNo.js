/*
2. Random Number Generator with Delay and Progress Indication: 

The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a 
variable so can be modified. The program displays a message every second indicating the time remaining 
until the random number is generated and then outputs the generated number.  */

// set the delay time in seconds
let delayTime=3;
// counting delay Time
const CountInterval= setInterval(()=>{
  delayTime--;
  console.log(`Generating Random Number in  ${delayTime}  seconds....` );

  if(delayTime===1){
    clearInterval(CountInterval);
  }
},1000)

// generateRandom number
function genRan(){

  const random=()=>{
  return Math.floor(Math.random()*100+1)
 }
 setTimeout(function(){
  console.log(random());
 },3*1000)
}
genRan()


