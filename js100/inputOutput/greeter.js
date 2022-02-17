
let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your name? ');
let lastName = rlSync.question(`That\'s great ${firstName}. Can I get your \
last name too? `);
//console.log(`Hello, ${firstName} ${lastName}!`);


// from exercies in later chapter functions.

function greeter(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}.`;
}
console.log(greeter(firstName, lastName));
