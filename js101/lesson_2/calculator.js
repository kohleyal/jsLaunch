// ask for one number and then a second number
// ask for the operation
// perform  the operation
// display the result

const MESSAGE = require('./calculator_messages.json');

const readline = require ('readline-sync');

function prompt(msg) {
  console.log(` => ${msg}`);
}

let invalidNumber = num => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};

let calcAgain = '1';

while (calcAgain === '1') {
  prompt(MESSAGE.welcome);

  prompt(MESSAGE["number1Text"]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGE.notValid);
    number1 = readline.question();
  }


  prompt(MESSAGE["number2Text"]);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGE.notValid);
    number2 = readline.question();
  }


  prompt(MESSAGE["operatorSelect"]);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGE.notValid);
    operation = readline.question();
  }


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

  prompt(MESSAGE.calcResult + ` ${output} \n`);

  prompt(MESSAGE.playAgain);
  calcAgain = readline.question();

  while (!['1', '2'].includes(calcAgain)) {
    prompt(MESSAGE.oneOrTwo);
    calcAgain = readline.question();
  }
}