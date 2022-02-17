// ask for one number and then a second number
// ask for the operation
// perform  the operation
// display the result

const readline = require ('readline-sync');

function promt(msg) {
  console.log(` => ${msg}`);
}


promt('Welcome to the calculator');

promt('What is the first number?');
let number1 = readline.question();

promt('What is the second number?');
let number2 = readline.question();

promt(`What operation would you like to perform?\n1)Add 2) Subtract 3)Multiply or 4)Divide`);
let operation = readline.question();

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

promt(`The result is ${output}.`);