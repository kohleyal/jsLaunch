//1. modify age.js to use a for loop
// wrote it with a for loop. wrote it again with partition for loop. 

//2. write a function that computes the factorial of a number with a for loop. 

function factorial(num) {
  let totalNum = 1
  for(let previousNums =1 ; previousNums <= num; previousNums +=1) {
    totalNum *=previousNums;
  }
  return totalNum
}
/*
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
*/
//3. why does the code cause a infinite loop.
/* 
the while expersion sets counter varible to 1 and then adds one. Because it 
is less than 2 the break is not executed. On the next loop, counter is reset
to one and the loop continure infinitly. JS accepts the assignment becase the 
result is 1 and evaluates it as a truthy. 
*/

//4. Does this code produce an error? 
/*
It does not produce an error. A for loop dosen't require the the 3 componetes.
The value i is chaged when the inside of console.log is executed. The += will
increment it. The console logs 1-5. 
*/

//5. 
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function numberBeater (beatNumber) {
  let tries = 0;
  let result;
  do { result = randomNumberBetween(1, beatNumber*1.1); 
    tries +=1;
  } while (result <= beatNumber);
  return tries
}
let avgTries = 0 ;
let attempts = 100;
let num = 100
for(let runAttempts = attempts; runAttempts >0; runAttempts-=1) {
  avgTries += numberBeater(num);
}; 
let NavgTries = avgTries/attempts
console.log(`It took an average ${String(NavgTries)} tries with ${avgTries} total tries, to get a number greater than ${num} with ${attempts} attempts.`);

//6. recreate factorial with a recursion funciton. 

function recFactorial (facNumber) {
  if (facNumber <= 1 ) {
    return 1;
  }
  return facNumber * recFactorial(facNumber-1); 
}

console.log(recFactorial(1));     // => 1
console.log(recFactorial(2));     // => 2
console.log(recFactorial(3));     // => 6
console.log(recFactorial(4));     // => 24
console.log(recFactorial(5));     // => 120
console.log(recFactorial(6));     // => 720
console.log(recFactorial(7));     // => 5040
console.log(recFactorial(8));     // => 40320
