//1. What does the following log to the console. 

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// it will log [1,4,3] array2 is assigned a pointer the the same memory spot as arr1. 

//2. what does this error message tell you. 
// its says that the variable used in the log is not defined yet. on line 4 char 15.

//3. write code to output the squre root of 37 

console.log(Math.sqrt(37));

//4. Given a list of num, write code to find and display the largets num. 

function findLarge (numList) {
   let maxVal = numList[0];
   for (val of numList) {
     if (val > maxVal) {
       maxVal = val;
     }
   }
   return maxVal
}
let t1 = [1,6,3,2];
let t2 = [-1, -6, -3, -2];
let t3 = [2, 2];

console.log(findLarge(t1));
console.log(findLarge(t2));
console.log(findLarge(t3));

// it was really just use Math
console.log(Math.max(1,6,3,2));

//5. what does the following function do
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
/* 
it divided the string by spaces, then reverses it's order 
then returns a new array consiting of all the lengths of the 
values in the array. 
*/

//6. write a fucntion that uses regex to return all words with lab in them

function findWord (wordArr,re) {
  return wordArr.filter(word => re.test(word));
}
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(findWord(words, /lab/));

//7. what is exception handling and what problem does it solve.
/* 
excepting handling give you the ability to try to execute code and
a way to deal with errors/exceptions that are raised from that 
exicution block. its solve the problem of an error crashing your
code/ stopping it from continuing to run. 
*/

//8. Without using either number.isNaN or object.s(value,NaN),
/* write a function named isNotANumber that returns true if the value passed to it as 
an argument is NaN, false if it is not.
*/
function isNotANumber(varr) {
  return varr !== varr
}
//9. wirte a functio that returns true for -0 and false for all others numbers including 0

function negZero (testNum) {
  return (50/testNum == -Infinity) ? true : false;
}
console.log(negZero(0));
console.log(negZero(-0));
console.log(negZero(50));

//10. 5 is returned. 
