/*
ask user for their move
have computer play its move. random option
display who won
*/

const readline = require('readline-sync');
const VALID_CHOCIES = ['rock', 'paper', 'scissors'];

const prompt = msg => console.log(`=> ${msg}`);

while (true) {
  prompt(`Choose one: ${VALID_CHOCIES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOCIES.includes(choice)) {
    prompt("That's not a valid chice");
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor((Math.random() * VALID_CHOCIES.length));
  let computerChoice = VALID_CHOCIES[randomIndex];

  prompt(`You chose ${choice}. Computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    prompt('You Win!');
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
  (choice === 'paper' && computerChoice === 'scissors') ||
  (choice === 'rock' && computerChoice === 'paper')) {
    prompt('Computer Won!');
  } else {
    prompt('It was a tie.');
  }

  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}
