let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));
let years = [10, 20, 30, 40];
console.log(`You are ${age} years old.`);
for(let year of years){
  console.log(`In ${year} years, you will be ${year+ age} years old.`);
}


//other way to write a for loop. just practice
/*
for (let future = 10; future <41; future +=10) {
  code
} */
