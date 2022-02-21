/*
1. ask for information.
  a) loan amount b) intrest rate in percentage. c)laon duration in months.
  d) activly check inputs when coming in.
2. convert inout from string to float number.
3. do math function.
4. output answer in dollars and cents.
*/

const readline = require ('readline-sync');

const prompt = msg => console.log(`==> ${msg}`);

const validNumber = lineInput => {
  while (lineInput.trim() === '' || Number(lineInput) <= 0 || Number.isNaN(Number(lineInput))) {
    prompt('Please enter a valid number');
    lineInput = readline.question();
  }
  return lineInput;
};

const monthlyFormula = (loanTotal, monthInterestRate, durationMonths) => {
  if (monthInterestRate === 0) {
    return loanTotal / durationMonths;
  } else {
    return loanTotal * (monthInterestRate
      / (1 - Math.pow((1 + monthInterestRate), (-durationMonths))));
  }
};

prompt('Welcome to the Laon repayment calculator.');

prompt('Please enter your loan amount.');
let loanTotal = validNumber(readline.question());
loanTotal = parseFloat(loanTotal);

prompt('Please enter your annual percentage rate.');
let interestRate = validNumber(readline.question());
interestRate = parseFloat(interestRate) / 1200;

prompt('Please enter your loan duration.');
let loanDuration = validNumber(readline.question());
loanDuration = parseFloat(loanDuration) * 12;

let monthlyPayment = monthlyFormula(loanTotal, interestRate, loanDuration);

prompt(`Your monthly payment will be $${monthlyPayment.toFixed(2)}.`);