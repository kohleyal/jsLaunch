//Exercises from Launch Scool JS prep book. Functions section

//1. 
/*let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

THe code logs 1 to the console.
running foo will not change the value of bar in line one. 
bar is re defined in foo is that instance of bar is set in
local scope of foo and will not change the global bar value. */

//2. Edit greeter.js from the previouse chapter.
/*add a function to it to solicit the user's first and last
name in separate invoations 
See greeter for anser*/

//3.
function multiply() {
  let rlSync = require('readline-sync');
  numOne = rlSync.question("Enter the first number: ");
  numTwo = rlSync.question("Enter the second number: ");
  return numOne * numTwo
}
console.log(multiply());

//4. What does the following code log
/*
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
*/
/* It wont log anything the function ends with the 
return statment on the 3rd line. console.log is never
executed */

//5.How about now
/*
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
*/
/*Now it still does not log anything. scream is run 
but the return value isn't saved or logged to the console. */




